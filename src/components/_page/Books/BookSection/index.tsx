import React, { useState, useMemo } from 'react';

import { Section, BookCard, SimpleButton } from '@/components';
import { keyGenerator } from '@/utils/functions';
import { StyledBookSection } from './style';

const BookSection = () => {
  const [numOfBooks, setNumOfBooks] = useState(10);

  const images = Array(48).fill(
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg'
  );

  const slicedImages = useMemo(() => images.slice(0, numOfBooks), [numOfBooks]);

  const handleLoadMore = () => {
    setNumOfBooks(numOfBooks + 10);
  };

  return (
    <Section>
      <StyledBookSection>
        <h2 className="header-title ">Books</h2>
        <div className="book-container">
          {slicedImages &&
            slicedImages.map((img, i) => (
              <BookCard
                id={keyGenerator(i)}
                key={`${img}_${keyGenerator(i)}`}
                title="Title here"
                rating={0}
                image={img}
                // favorite={topBookFavorites[i]}
                onFavoriteClick={() => {}}
              />
            ))}
        </div>
        <SimpleButton text="Load more" onClick={handleLoadMore} />
      </StyledBookSection>
    </Section>
  );
};

export default BookSection;
