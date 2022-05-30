import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { BookQueueItem } from '@/components/';
import { IBook } from '@/models/book';
import { db } from '@/utils/firebase';
import { StyledBookList } from './style';

const BookList = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  console.log('books', books);

  const image =
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg';

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
  }, []);

  const renderBookItemActions = () => {
    return (
      <div className="book-item-actions ">
        <button type="button" className="action-btn">
          Edit
        </button>
        <button type="button" className="action-btn">
          Delete
        </button>
      </div>
    );
  };

  return (
    <StyledBookList>
      <button type="button" className="action-btn add-btn">
        Add book +
      </button>

      {books.length > 0 &&
        books.map((item) => {
          const { id, title, genre } = item;

          return (
            <BookQueueItem
              className="book-list-item"
              key={id}
              id={id!}
              image={image}
              genre={genre[0]}
              title={title}
            >
              {renderBookItemActions()}
            </BookQueueItem>
          );
        })}
    </StyledBookList>
  );
};

export default BookList;
