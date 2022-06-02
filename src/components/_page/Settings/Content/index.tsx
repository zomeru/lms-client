import React from 'react';

import BookList from '../BookList';
import AddBook from '../AddBook';
import RequestHistory from '../RequestHistory';
import PendingRequest from '../PendingRequest';
import ApprovedRequest from '../ApprovedRequest';
import RejectedRequest from '../RejectedRequest';
import ReturnedRequest from '../ReturnedRequest';
import CancelledRequest from '../CancelledRequest';
import { StyledContent } from './style';

export interface IContentProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({ selected, setSelected }: IContentProps) => {
  const renderContent = () => {
    if (selected === 'Books') {
      return <BookList setSelected={setSelected} />;
    }

    if (selected === 'Add Book') {
      return <AddBook setSelected={setSelected} />;
    }

    if (selected === 'Request history') {
      return <RequestHistory />;
    }

    if (selected === 'Pending requests') {
      return <PendingRequest />;
    }

    if (selected === 'Approved requests') {
      return <ApprovedRequest />;
    }

    if (selected === 'Rejected requests') {
      return <RejectedRequest />;
    }

    if (selected === 'Returned books') {
      return <ReturnedRequest />;
    }

    if (selected === 'Cancelled requests') {
      return <CancelledRequest />;
    }

    return null;
  };

  return <StyledContent>{renderContent()}</StyledContent>;
};

export default Content;
