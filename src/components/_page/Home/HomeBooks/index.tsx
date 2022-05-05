import React from 'react';

import { Section, BookCard } from '@/components';
import { StyledBookContainer } from './style';

const HomeBooks = () => {
  const imgs = Array(5).fill(
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg'
  );

  console.log('images', imgs);

  return (
    <Section>
      <StyledBookContainer>
        <div className="top-book-container">
          <div className="header-title">Top Books</div>
          <div className="book-container">
            <BookCard />
          </div>
        </div>
        <div className="new-book-container">
          <div className="header-title">New Books</div>
          <div className="book-container">Books here</div>
        </div>
      </StyledBookContainer>
    </Section>
  );
};

export default HomeBooks;
