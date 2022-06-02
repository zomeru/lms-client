// @ts-nocheck
/* eslint-disable */
import React from 'react';

import { BorrowRequestStatus, IBorrowRequest } from '@/models/borrowRuquest';
import BookRequestItem from '../BookRequestItem';
import { StyledRequestPage } from './style';

export interface RequestPageProps {
  borrowedBooks: IBorrowRequest[];
  header: string;
  onReject: (id: string) => void;
  onApprove: (id: string) => void;
  onReturn: (id: string) => void;
  type: BorrowRequestStatus;
  loading?: boolean;
}

const RequestPage = ({
  borrowedBooks,
  header,
  onReject,
  onApprove,
  onReturn,
  type,
  loading
}: RequestPageProps) => {
  return (
    <StyledRequestPage>
      <h2 className="header-label">{header}</h2>
      {borrowedBooks &&
        borrowedBooks.length > 0 &&
        borrowedBooks.map((item) => {
          return (
            <BookRequestItem
              key={item.id}
              borrowedBooks={item}
              className="book-request-item"
              onReject={(id) => {
                onReject(id);
              }}
              onApprove={(id) => {
                onApprove(id);
              }}
              onReturn={(id) => {
                onReturn(id);
              }}
            />
          );
        })}
      {borrowedBooks && borrowedBooks.length === 0 && !loading && (
        <p className="no-requests">
          There is currently no {type}{' '}
          {type === 'returned' ? 'books' : 'request'}.
        </p>
      )}
    </StyledRequestPage>
  );
};

export default RequestPage;
