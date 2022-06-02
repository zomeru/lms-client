import React, { useState, useEffect } from 'react';
import { collection, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { toast } from 'react-toastify';

import { BookQueueItem } from '@/components/';
import { IBook } from '@/models/book';
import { db, storage } from '@/utils/firebase';
import { useCol } from '@/hooks';
import { StyledBookList } from './style';

export interface BookListProps {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const BookList = ({ setSelected }: BookListProps) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksData, loading, queryError] = useCol<IBook>(
    query(collection(db, 'books'), orderBy('updatedAt', 'desc'))
  );

  useEffect(() => {
    if (!loading) {
      if (booksData) {
        setBooks(booksData);
        return;
      }

      if (queryError) {
        toast.error('Failed to load list of books');
      }
    }
  }, [loading]);

  // useEffect(() => {
  //   if (queryError && !loading) {
  //     toast.error('Failed to load list of books');
  //   }
  // }, [queryError]);

  const handleDeleteBook = async (id: string, imgRef: string) => {
    try {
      await deleteDoc(doc(db, 'books', id));
      const newBookArray = books?.filter((book) => book.id !== id);
      setBooks(newBookArray);
      toast.success('Book deleted successfully');

      const bookImageRef = ref(storage, imgRef);
      await deleteObject(bookImageRef);
    } catch (error) {
      const err: any = error;
      console.log('delete book error', err);
      toast.error("Something wen't wrong. Failed to add book.");
    }
  };

  const renderBookItemActions = (id: string, imgRef: string) => {
    return (
      <div className="book-item-actions ">
        <button type="button" className="action-btn">
          Edit
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={() => {
            handleDeleteBook(id, imgRef);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <StyledBookList>
      <button
        type="button"
        className="action-btn add-btn"
        onClick={() => setSelected('Add Book')}
      >
        Add book +
      </button>

      {books &&
        books.length > 0 &&
        books.map((item) => {
          const { id, title, genre, images } = item;

          return (
            <BookQueueItem
              className="book-list-item"
              key={id}
              id={id!}
              image={images[0].url}
              genre={genre[0]}
              title={title}
            >
              {renderBookItemActions(id!, images[0].url)}
            </BookQueueItem>
          );
        })}
    </StyledBookList>
  );
};

export default BookList;
