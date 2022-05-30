import React from 'react';

import BookList from '../BookList';
import { StyledContent } from './style';

export interface IContentProps {
  selected: string;
}

const Content = ({ selected }: IContentProps) => {
  return <StyledContent>{selected === 'Books' && <BookList />}</StyledContent>;
};

export default Content;
