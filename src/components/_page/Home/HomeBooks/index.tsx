import React, { useState, useEffect } from 'react';
import { collection, orderBy, limit, query } from 'firebase/firestore';

import { Section, BookCard } from '@/components';
import { IBook } from '@/models/book';
import { useCol } from '@/hooks';
import { db } from '@/utils/firebase';
import { StyledBookContainer } from './style';

const HomeBooks = () => {
  const [newBooks, setNewBooks] = useState<IBook[]>([]);
  const [topBooks, setTopBooks] = useState<IBook[]>([]);

  const [newBooksData, queryNewLoading] = useCol<IBook>(
    query(collection(db, 'books'), orderBy('createdAt', 'desc'), limit(5))
  );

  const [topBooksData, queryTopLoading] = useCol<IBook>(
    query(collection(db, 'books'), orderBy('createdAt', 'asc'), limit(5))
  );

  useEffect(() => {
    if (!queryNewLoading) {
      if (newBooksData) {
        setNewBooks(newBooksData);
      }
    }
  }, [queryNewLoading]);

  useEffect(() => {
    if (!queryTopLoading) {
      if (topBooksData) {
        setTopBooks(topBooksData);
      }
    }
  }, [queryTopLoading]);

  // const handleFavoriteClick = (
  //   i: number,
  //   favorites: boolean[],
  //   setFavorites: React.Dispatch<React.SetStateAction<boolean[]>>
  // ) => {
  //   const newFavorites = [...favorites];
  //   newFavorites[i] = !newFavorites[i];
  //   setFavorites(newFavorites);
  // };

  return (
    <Section>
      <StyledBookContainer>
        <div className="top-book-container">
          <h2 className="header-title">Top Books</h2>
          <div className="book-container">
            {topBooks &&
              topBooks.length > 0 &&
              topBooks.map((book) => (
                <BookCard
                  id={book.id!}
                  key={book.id!}
                  title={book.title}
                  rating={0}
                  image={book.images[0].url}
                  // favorite={topBookFavorites[i]}
                  // onFavoriteClick={() =>
                  //   handleFavoriteClick(
                  //     i,
                  //     topBookFavorites,
                  //     setTopBookFavorites
                  //   )
                  // }
                />
              ))}
          </div>
        </div>
        <div className="new-book-container">
          <h2 className="header-title">New Books</h2>
          <div className="book-container">
            {newBooks &&
              newBooks.length > 0 &&
              newBooks.map((book) => (
                <BookCard
                  id={book.id!}
                  key={book.id!}
                  title={book.title}
                  rating={0}
                  image={book.images[0].url}
                  // favorite={topBookFavorites[i]}
                  // onFavoriteClick={() =>
                  //   handleFavoriteClick(
                  //     i,
                  //     topBookFavorites,
                  //     setTopBookFavorites
                  //   )
                  // }
                />
              ))}
          </div>
        </div>
      </StyledBookContainer>
    </Section>
  );
};

export default HomeBooks;
