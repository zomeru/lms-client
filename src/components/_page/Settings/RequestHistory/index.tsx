import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { collection, orderBy, query } from 'firebase/firestore';

import { IBorrowRequest } from '@/models/borrowRuquest';
import { useCol } from '@/hooks';
import { db } from '@/utils/firebase';
import { IUser } from '@/models/user';
import BookRequestItem from '../BookRequestItem';
import { StyledRequestHistory } from './style';

const RequestHistory = () => {
  const [allRequestBooks, setAllRequestBooks] = useState<IBorrowRequest[]>([]);

  const [borrowedBooksData, queryLoading] = useCol<IBorrowRequest>(
    query(collection(db, 'borrows'), orderBy('updatedAt', 'desc'))
  );

  const [newUser, queryUserLoading] = useCol<IUser>(
    query(collection(db, 'users'))
  );

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

          setAllRequestBooks(newBorrowedBooksWithName);
        } else {
          toast.info('No data to display');
        }
      }
    }
  }, [queryLoading, queryUserLoading]);

  return (
    <StyledRequestHistory>
      <h2 className="header-label">Request History</h2>

      {allRequestBooks &&
        allRequestBooks.length > 0 &&
        allRequestBooks.map((item) => {
          return (
            <BookRequestItem
              className="book-list-item"
              key={item.id}
              borrowedBooks={item}
              actionBtnsShow={false}
            />
          );
        })}
    </StyledRequestHistory>
  );
};

export default RequestHistory;
