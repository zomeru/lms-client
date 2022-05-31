import React from 'react';

import BookList from '../BookList';
import AddBook from '../AddBook';
import { StyledContent } from './style';

export interface IContentProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({ selected, setSelected }: IContentProps) => {
  const renderContent = () => {
    if (selected === 'books') {
      return <BookList setSelected={setSelected} />;
    }

    if (selected === 'addBook') {
      return <AddBook setSelected={setSelected} />;
    }

    return null;
  };

  return <StyledContent>{renderContent()}</StyledContent>;
};

export default Content;