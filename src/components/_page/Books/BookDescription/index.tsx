import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';

import { Section, SimpleButton } from '@/components';
import { IBook } from '@/models/book';
import { db } from '@/utils/firebase';
import Loader from '@/components/Loader';
import { StyledBookDescription } from './style';

const BookDescription = () => {
  const router = useRouter();
  const [book, setBook] = useState({} as IBook);
  const [loading, setLoading] = useState(true);
  console.log('router', router);

  useEffect(() => {
    async function getBookDes() {
      if (router.asPath) {
        const bookId = router.asPath.split('/')[2];

        try {
          const docRef = doc(db, 'books', bookId);
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot && !docSnapshot.exists) {
            router.push('/404');
            return;
          }

          const bookData = docSnapshot.data() as IBook;
          setBook(bookData);

          setTimeout(() => {
            setLoading(false);
          }, 300);
          console.log('book Data', bookData);
        } catch (error) {
          router.push('/404');
          console.log('get book error', error);
        }
      }
    }

    getBookDes();
  }, [router.asPath]);

  const image =
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg';

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
                src={book.imageUrls ? book.imageUrls[0] : image}
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
