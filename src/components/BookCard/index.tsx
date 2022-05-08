import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai';

import { SampleBook } from '@/assets';
import { StyledBookCard } from './style';

export interface BookCardProps {
  title: string;
  image: string;
  rating: number;
  favorite?: boolean;
  onFavoriteClick?: () => void;
}

const BookCard = ({
  title,
  image,
  favorite,
  onFavoriteClick,
  rating
}: BookCardProps) => {
  return (
    <StyledBookCard>
      <div className="image-wrapper">
        <Image
          className="image"
          src={image ?? SampleBook}
          layout="fill"
          objectFit="cover"
        />
        <div className="hover-overlay">
          <div className="rating-container">
            <AiFillStar className="rating-icon" />
            <span className="rating">{rating ?? '0'}/5</span>
          </div>
          <h1 className="book-title">{title ?? 'Title here'}</h1>
        </div>
      </div>
      <div className="action-container">
        <div
          className="fav-button"
          onClick={onFavoriteClick}
          onKeyDown={onFavoriteClick}
          role="button"
          tabIndex={0}
        >
          {favorite ? (
            <AiFillHeart className="fav-icon" />
          ) : (
            <AiOutlineHeart className="fav-icon" />
          )}
        </div>

        <Link href="/books/123" passHref>
          <div className="btn btn-2">
            <p>Details</p>
          </div>
        </Link>
      </div>
    </StyledBookCard>
  );
};

export default BookCard;
