import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { doc } from 'firebase/firestore';

import { Section, SimpleButton } from '@/components';
import { IBook } from '@/models/book';
import { db } from '@/utils/firebase';
import Loader from '@/components/Loader';
import { useDoc } from '@/hooks';
import { StyledBookDescription } from './style';

const BookDescription = () => {
  const router = useRouter();
  const [book, setBook] = useState({} as IBook);
  const [loading, setLoading] = useState(true);
  console.log('router', router);

  const [bookInfo, queryLoading] = useDoc<IBook>(
    doc(db, 'books', router.asPath.split('/')[2] ?? '')
  );

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
  }, [bookInfo, queryLoading]);

  const handleBorrowBook = () => {};

  if (loading) {
    return <Loader />;
  }

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
              text="Borrow"
              onClick={handleBorrowBook}
              className="borrow-button"
            />
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
