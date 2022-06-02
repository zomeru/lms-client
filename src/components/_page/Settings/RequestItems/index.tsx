import React, { useState, useEffect } from 'react';
import {
  doc,
  updateDoc,
  serverTimestamp,
  increment,
  query,
  collection,
  where,
  orderBy
} from 'firebase/firestore';
import { toast } from 'react-toastify';

import { BorrowRequestStatus, IBorrowRequest } from '@/models/borrowRuquest';
import { db } from '@/utils/firebase';
import { useCol } from '@/hooks';
import { IUser } from '@/models/user';
import RequestPage from '../RequestPage';

export interface RequestItemsProps {
  status: BorrowRequestStatus;
  header: string;
}

const RequestItems = ({ status, header }: RequestItemsProps) => {
  const [borrowedBooks, setBorrowedBooks] = useState<IBorrowRequest[]>([]);

  const [borrowedBooksData, queryLoading] = useCol<IBorrowRequest>(
    query(
      collection(db, 'borrows'),
      where('status', '==', status),
      orderBy('updatedAt', 'desc')
    )
  );

  const [newUser, queryUserLoading] = useCol<IUser>(
    query(collection(db, 'users'))
  );

  useEffect(() => {
    if (!queryLoading) {
      if (borrowedBooksData && borrowedBooksData.length > 0) {
        setBorrowedBooks(borrowedBooksData);
      }
    }
  }, [queryLoading]);

  useEffect(() => {
    if (!queryLoading && !queryUserLoading) {
      if (borrowedBooksData && newUser) {
        if (borrowedBooksData.length > 0 && newUser.length > 0) {
          const newBorrowedBooksWithName: IBorrowRequest[] = [];

          for (let i = 0; i < borrowedBooksData.length; i++) {
            for (let j = 0; j < newUser.length; j++) {
              if (borrowedBooksData[i].user === newUser[j].email) {
                newBorrowedBooksWithName.push({
                  ...borrowedBooksData[i],
                  name: `${newUser[j].firstName} ${newUser[j].lastName}`
                });
              }
            }
          }

          console.log('newBorrowedBooksWithName', newBorrowedBooksWithName);

          setBorrowedBooks(newBorrowedBooksWithName);
        } else {
          // toast.info('No data to display');
        }
      }
    }
  }, [queryLoading, queryUserLoading]);

  const handleReject = async (id: string) => {
    try {
      const borrowRef = doc(db, 'borrows', id);
      await updateDoc(borrowRef, {
        status: 'rejected',
        updatedAt: serverTimestamp()
      });

      const newBorrowedBooks = borrowedBooks.filter((item) => item.id !== id);
      setBorrowedBooks(newBorrowedBooks);

      toast.success('Book rejected successfully');
    } catch (error) {
      const err: any = error;
      console.log('delete book error', err);
      toast.error("Something wen't wrong. Failed to reject pending request.");
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const currentBook = borrowedBooks.find((item) => item.id === id);

      const borrowRef = doc(db, 'borrows', id);
      await updateDoc(borrowRef, {
        status: 'approved',
        updatedAt: serverTimestamp()
      });

      const newBorrowedBooks = borrowedBooks.filter((item) => item.id !== id);
      setBorrowedBooks(newBorrowedBooks);

      const bookRef = doc(db, 'books', currentBook?.bookId!);
      await updateDoc(bookRef, {
        available: increment(-1)
      });

      toast.success('Book approved successfully');
    } catch (error) {
      const err: any = error;
      console.log('delete book error', err);
      toast.error("Something wen't wrong. Failed to approve pending request.");
    }
  };

  const handleReturn = async (id: string) => {
    try {
      const currentBook = borrowedBooks.find((item) => item.id === id);

      const borrowRef = doc(db, 'borrows', id);
      await updateDoc(borrowRef, {
        status: 'returned',
        updatedAt: serverTimestamp()
      });

      const newBorrowedBooks = borrowedBooks.filter((item) => item.id !== id);
      setBorrowedBooks(newBorrowedBooks);

      const bookRef = doc(db, 'books', currentBook?.bookId!);
      await updateDoc(bookRef, {
        available: increment(1)
      });

      toast.success('Book returned successfully');
    } catch (error) {
      const err: any = error;
      console.log('delete book error', err);
      toast.error("Something wen't wrong. Failed to return this book.");
    }
  };

  return (
    <RequestPage
      borrowedBooks={borrowedBooks}
      header={header}
      onReject={(id) => handleReject(id)}
      onApprove={(id) => handleApprove(id)}
      onReturn={(id) => handleReturn(id)}
      type={status}
      loading={queryUserLoading || queryLoading}
    />
  );
};

export default RequestItems;
