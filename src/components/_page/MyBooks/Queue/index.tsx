import React, { useEffect, useState } from 'react';

import { Section, BookQueueItem } from '@/components';
import { useDimensions } from '@/hooks';
import { BOOK_GENRES_FICTION, BOOK_GENRES_NONFICTION } from '@/constants';
import { BookQueueItemProps, StatusType } from '@/components/BookQueueItem';
import { StyledQueue } from './style';

function genRand(min: number, max: number) {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand += min;
  return rand;
}

const statuses: StatusType[] = ['Borrowed', 'Denied', 'Pending'];

const Queue = () => {
  const { width } = useDimensions();
  const [data, setData] = useState<BookQueueItemProps[]>([]);

  useEffect(() => {
    const books: BookQueueItemProps[] = [];

    for (let i = 0; i < 10; i++) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      const newData = {
        id: `${today.getTime()}`,
        title: 'Title here',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg',
        genre:
          genRand(1, 2) === 1
            ? BOOK_GENRES_FICTION[genRand(0, BOOK_GENRES_FICTION.length)]
            : BOOK_GENRES_NONFICTION[genRand(0, BOOK_GENRES_NONFICTION.length)],
        status: statuses[genRand(0, 3)],
        date: `${mm}/${dd}/${yyyy}`
      };

      books.push(newData);
    }

    setData(books);
  }, []);

  return (
    <Section
      minHeight={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledQueue>
        <h2 className="header">My books</h2>
        <div className="item-container">
          {data &&
            data.map((book) => (
              <BookQueueItem className="queue-item" key={book.id} {...book} />
            ))}
        </div>
      </StyledQueue>
    </Section>
  );
};

export default Queue;
