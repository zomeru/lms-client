import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { SampleBook } from '@/assets';
import { BorrowRequestStatus } from '@/models/borrowRuquest';
import { StyledBookQueueItem } from './style';

export interface BookQueueItemProps {
  id: string;
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
  children
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
      <div>{id}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{genre}</div>
      {status && <span className={`${status.toLowerCase()}`}>{status}</span>}
      {children}
    </StyledBookQueueItem>
  );
};

export default BookQueueItem;
