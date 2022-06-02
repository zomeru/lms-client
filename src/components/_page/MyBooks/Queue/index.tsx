import React, { useEffect, useState } from 'react';
import { collection, orderBy, query, where } from 'firebase/firestore';

import { Section, BookQueueItem } from '@/components';
import { useCol, useDimensions } from '@/hooks';

import { IBorrowRequest } from '@/models/borrowRuquest';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { StyledQueue } from './style';

const Queue = () => {
  const { user } = useAuth();
  const { width } = useDimensions();
  const [myBooks, setMyBooks] = useState<IBorrowRequest[]>([]);

  const [borrowedBooks, queryLoading] = useCol<IBorrowRequest>(
    query(
      collection(db, 'borrows'),
      where('user', '==', user?.email ?? ''),
      orderBy('updatedAt', 'desc')
    )
  );

  useEffect(() => {
    if (!queryLoading) {
      if (borrowedBooks && borrowedBooks.length > 0) {
        setMyBooks(borrowedBooks);
      }
    }
  }, [queryLoading]);

  console.log('myBooks', myBooks);

  return (
    <Section
      minHeight={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledQueue>
        <h2 className="header">My books</h2>
        <div className="item-container">
          {myBooks.length > 0 &&
            myBooks.map((borrow) => {
              const newDate = borrow.updatedAt! as any;
              const date = new Date(newDate.seconds * 1000);

              return (
                <BookQueueItem
                  className="queue-item"
                  key={borrow.id}
                  id={borrow.id!}
                  image={borrow.imageUrl}
                  title={borrow.title}
                  genre={borrow.genre}
                  status={borrow.status}
                  date={date.toISOString().slice(0, 10)}
                />
              );
            })}
        </div>
      </StyledQueue>
    </Section>
  );
};

export default Queue;
