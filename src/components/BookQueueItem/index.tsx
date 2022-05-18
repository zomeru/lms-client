import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { SampleBook } from '@/assets';
import { StyledBookQueueItem } from './style';

export type StatusType = 'Borrowed' | 'Denied' | 'Pending';

export interface BookQueueItemProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  date: string;
  genre: string;
  status: StatusType;
  className?: string;
}

const BookQueueItem = ({
  id,
  image,
  title,
  date,
  genre,
  status,
  className
}: BookQueueItemProps) => {
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
      <span className={`${status.toLowerCase()}`}>{status}</span>
    </StyledBookQueueItem>
  );
};

export default BookQueueItem;
