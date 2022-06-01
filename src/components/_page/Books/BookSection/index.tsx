import React, { useState, useMemo, useEffect } from 'react';

import { Section, BookCard, SimpleButton } from '@/components';
import { IBook } from '@/models/book';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { StyledBookSection } from './style';

const BookSection = () => {
  const [numOfBooks, setNumOfBooks] = useState(10);
  const [books, setBooks] = useState<IBook[]>([]);

  console.log('books', books);

  useEffect(() => {
    async function getAllBooks() {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));

        if (querySnapshot) {
          const newBooks = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            } as IBook;
          });

          setBooks(newBooks);
        }
      } catch (error) {
        console.log('get all books error', error);
      }
    }

    getAllBooks();
  });

  const image =
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg';

  const slicedBooks = useMemo(
    () => books.slice(0, numOfBooks),
    [books, numOfBooks]
  );

  const handleLoadMore = () => {
    setNumOfBooks(numOfBooks + 10);
  };

  return (
    <Section>
      <StyledBookSection>
        <h2 className="header-title ">Books</h2>
        <div className="book-container">
          {slicedBooks.length > 0 &&
            slicedBooks.map((img) => (
              <BookCard
                id={img?.id!}
                key={img?.id}
                title={img.title}
                rating={0}
                image={img.imageUrls ? img.imageUrls[0] : image}
                // favorite={topBookFavorites[i]}
                onFavoriteClick={() => {}}
              />
            ))}
        </div>
        <SimpleButton text="Load more" onClick={handleLoadMore} />
      </StyledBookSection>
    </Section>
  );
};

export default BookSection;
