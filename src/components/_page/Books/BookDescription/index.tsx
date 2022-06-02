import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  query,
  where,
  updateDoc
} from 'firebase/firestore';

import { Section, SimpleButton } from '@/components';
import { IBook } from '@/models/book';
import { db } from '@/utils/firebase';
import Loader from '@/components/Loader';
import { useCol, useDoc } from '@/hooks';
import { BorrowRequestStatus, IBorrowRequest } from '@/models/borrowRuquest';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';
import { StyledBookDescription } from './style';

const BookDescription = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [book, setBook] = useState({} as IBook);
  const [loading, setLoading] = useState(true);
  const [borrowStatus, setBorrowStatus] = useState<BorrowRequestStatus | ''>(
    ''
  );

  const [bookInfo, queryLoading] = useDoc<IBook>(
    doc(db, 'books', router.asPath.split('/')[2] ?? '')
  );

  const [borrowInfo, queryBorrowLoading] = useCol<IBorrowRequest>(
    query(
      collection(db, 'borrows'),
      where('bookId', '==', router.asPath.split('/')[2] ?? ''),
      where('user', '==', user?.email ?? ''),
      where('status', 'in', ['pending', 'approved'])
    )
  );

  useEffect(() => {
    if (!queryBorrowLoading) {
      if (borrowInfo && borrowInfo.length > 0) {
        setBorrowStatus(borrowInfo[0].status);
      }
    }
  }, [queryBorrowLoading]);

  useEffect(() => {
    if (!queryLoading) {
      if (bookInfo === null || bookInfo === undefined) {
        router.push('/404');
      } else {
        setBook(bookInfo);

        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }
  }, [queryLoading]);

  const handleBorrowBook = async () => {
    if (!user) {
      toast.error('You must be logged in to borrow a book');
      return;
    }

    if (book.available === 0) {
      toast.error('No more available copies of this book');
      return;
    }

    try {
      const timestamp = serverTimestamp();

      const payload: IBorrowRequest = {
        bookId: book.id!,
        user: user.email,
        status: 'pending',
        createdAt: timestamp,
        updatedAt: timestamp,
        title: book.title,
        genre: book.genre[0],
        imageUrl: book.images[0].url
      };

      const addedBorrowRequest = await addDoc(
        collection(db, 'borrows'),
        payload
      );

      if (addedBorrowRequest) {
        console.log('addedBorrowRequest', addedBorrowRequest);
        setBorrowStatus('pending');
        toast.success('Borrow request sent');
      }
    } catch (error) {
      const err: any = error;
      console.log('Borrow request error', err);
      toast.error("Something went wrong, couldn't borrow the book");
    }
  };

  const handleCancelBorrowRequest = async () => {
    try {
      const bookRef = doc(db, 'borrows', borrowInfo?.[0].id!);
      await updateDoc(bookRef, {
        status: 'cancelled',
        updatedAt: serverTimestamp()
      });

      setBorrowStatus('');
      toast.success('Borrow request cancelled');
    } catch (error) {
      const err: any = error;
      console.log('Borrow request error', err);
      toast.error("Something went wrong, couldn't cancel the borrow request");
    }
  };

  if (loading) {
    return <Loader />;
  }

  const newBorrowStatus = () => {
    if (borrowStatus === 'pending') {
      return 'Borrow request pending';
    }

    if (borrowStatus === 'approved') {
      return 'Already borrowed';
    }

    return 'Borrow book';
  };

  return (
    <Section>
      <StyledBookDescription>
        <div className="book-des-container">
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                src={book.images[0].url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <SimpleButton
              text={newBorrowStatus()}
              onClick={handleBorrowBook}
              className="borrow-button"
              disabled={
                borrowStatus === 'pending' || borrowStatus === 'approved'
              }
            />
            {borrowStatus === 'pending' && (
              <SimpleButton
                text="Cancel request"
                onClick={handleCancelBorrowRequest}
                disabled={borrowStatus !== 'pending'}
              />
            )}
          </div>
          <div className="des-container">
            <h3 className="book-title ">{book.title}</h3>
            <h4 className="book-author">Author: {book.author}</h4>
            <p className="book-genre">Genre: {book.genre[0]}</p>
            <p className="book-avail-copies">Copies: {book.copies}</p>
            <p className="book-avail-copies">Available: {book.available}</p>

            <div className="book-des-header">Book summary</div>
            <p>{book.summary}</p>

            {/* <div className="book-des-header">Book characters</div>
            <p>
              Zomer Gregorio, Mark Joseph Yoldi, Lourence Jacaba, Joshua Pamisa,
              and Hannah Julieta Cabalo.
            </p> */}
          </div>
        </div>
      </StyledBookDescription>
    </Section>
  );
};

export default BookDescription;
