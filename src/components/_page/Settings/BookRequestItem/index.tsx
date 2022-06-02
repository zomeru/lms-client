// @ts-nocheck
/* eslint-disable */
import React from 'react';

import { StyledBookRequestItem } from './style';
import Image from 'next/image';
import { IBorrowRequest } from '@/models/borrowRuquest';

export interface BookRequestItemProps {
  borrowedBooks: IBorrowRequest;
  children?: React.ReactNode;
  className?: string;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onReturn?: (id: string) => void;
  actionBtnsShow?: boolean;
}

const BookRequestItem: React.FC<BookRequestItemProps> = ({
  children,
  borrowedBooks,
  className,
  onApprove,
  onReject,
  onReturn,
  actionBtnsShow = true
}) => {
  const { id, title, genre, imageUrl, updatedAt, status, user, name } =
    borrowedBooks;
  const newDate = updatedAt as any;
  const date = new Date(newDate.seconds * 1000);

  return (
    <StyledBookRequestItem className={className}>
      <div className="image-container">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="borrow-info">
        <div className="book-info">
          <p className="title">Title: {title}</p>
          <div className="book-lil-info">
            <p className="genre">Genre: {genre}</p>
            <p className="status-wrapper">
              Status: <p className={`${status} status`}>{status}</p>
            </p>
          </div>
        </div>
        <div className="line" />
        <div className="borrower-details">
          <div>Borrower details:</div>
          <p className="name">Name: {name ? name : ''}</p>
          <p className="email">Email: {user}</p>
          <p className="date">
            Request date: {date.toISOString().slice(0, 10)}
          </p>
        </div>
        <div className="separator" />
        {actionBtnsShow && status === 'pending' && (
          <div className="action-container">
            <div className="action-wrapper">
              <button
                type="button"
                className="action-btn approve-btn"
                onClick={() => {
                  if (onApprove) onApprove(id!);
                }}
              >
                Approve
              </button>
              <button
                type="button"
                className="action-btn reject-btn"
                onClick={() => {
                  if (onReject) onReject(id!);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        )}
        {actionBtnsShow && status === 'approved' && (
          <div className="action-container">
            <div className="action-wrapper">
              <button
                type="button"
                className="action-btn approve-btn"
                onClick={() => {
                  if (onReturn) onReturn(id!);
                }}
              >
                Returned?
              </button>
            </div>
          </div>
        )}
        {children}
      </div>
    </StyledBookRequestItem>
  );
};

export default BookRequestItem;
