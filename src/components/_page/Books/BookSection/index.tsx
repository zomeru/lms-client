import React, { useState, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Section, BookCard, SimpleButton } from '@/components';
import { IBook } from '@/models/book';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { useCol } from '@/hooks';
import { StyledBookSection } from './style';

const BookSection = () => {
  const [numOfBooks, setNumOfBooks] = useState(10);
  const [books, setBooks] = useState<IBook[]>([]);

  const [booksData, loading, error] = useCol<IBook>(
    query(collection(db, 'books'), orderBy('updatedAt', 'desc'))
  );

  useEffect(() => {
    if (!loading) {
      if (booksData) {
        setBooks(booksData);
      }
    }
  }, [booksData, loading]);

  useEffect(() => {
    if (error && !loading) {
      toast.error('Failed to display books');
    }
  }, [error]);

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
                image={img.images[0].url}
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
