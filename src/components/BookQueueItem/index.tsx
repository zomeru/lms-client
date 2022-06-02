import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { SampleBook } from '@/assets';
import { BorrowRequestStatus } from '@/models/borrowRuquest';
import { StyledBookQueueItem } from './style';

export interface BookQueueItemProps {
  id: string;
  bookId: string;
  image: string | StaticImageData;
  title: string;
  date?: string;
  genre: string;
  status?: BorrowRequestStatus;
  className?: string;
  children?: React.ReactNode;
}

const BookQueueItem: React.FC<BookQueueItemProps> = ({
  id,
  image,
  title,
  date,
  genre,
  status,
  className,
  children,
  bookId
}) => {
  return (
    <StyledBookQueueItem className={className}>
      <div className="image-wrapper">
        <Link href={`/books/${id}`} passHref>
          <a href={`/books/${id}`}>
            <Image
              src={image || SampleBook}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </a>
        </Link>
      </div>
      <Link href={`/books/${bookId}`} passHref>
        <a className="links" href={`/books/${bookId}`}>
          <p className="links">See book details</p>
        </a>
      </Link>
      <p className="title">{title}</p>
      <p>{date}</p>
      <p>{genre}</p>
      {status && <span className={`${status.toLowerCase()}`}>{status}</span>}
      {children}
    </StyledBookQueueItem>
  );
};

export default BookQueueItem;
