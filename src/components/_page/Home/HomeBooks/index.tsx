import React from 'react';

import { Section, BookCard } from '@/components';
import { keyGenerator } from '@/utils';
import { StyledBookContainer } from './style';

const HomeBooks = () => {
  const images = Array(5).fill(
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fkkhp1-lg.jpg'
  );

  const [topBookFavorites, setTopBookFavorites] = React.useState<boolean[]>([]);
  const [newBookFavorites, setNewBookFavorites] = React.useState<boolean[]>([]);

  const handleFavoriteClick = (
    i: number,
    favorites: boolean[],
    setFavorites: React.Dispatch<React.SetStateAction<boolean[]>>
  ) => {
    const newFavorites = [...favorites];
    newFavorites[i] = !newFavorites[i];
    setFavorites(newFavorites);
  };

  return (
    <Section>
      <StyledBookContainer>
        <div className="top-book-container">
          <div className="header-title">Top Books</div>
          <div className="book-container">
            {images &&
              images.map((img, i) => (
                <BookCard
                  key={`${img}_${keyGenerator(i)}`}
                  title="Title here"
                  rating={0}
                  image={img}
                  favorite={topBookFavorites[i]}
                  onFavoriteClick={() =>
                    handleFavoriteClick(
                      i,
                      topBookFavorites,
                      setTopBookFavorites
                    )
                  }
                />
              ))}
          </div>
        </div>
        <div className="new-book-container">
          <div className="header-title">New Books</div>
          <div className="book-container">
            {images &&
              images.map((img, i) => (
                <BookCard
                  key={`${img}_${keyGenerator(i)}`}
                  title="Title here"
                  rating={0}
                  image={img}
                  favorite={newBookFavorites[i]}
                  onFavoriteClick={() =>
                    handleFavoriteClick(
                      i,
                      newBookFavorites,
                      setNewBookFavorites
                    )
                  }
                />
              ))}
          </div>
        </div>
      </StyledBookContainer>
    </Section>
  );
};

export default HomeBooks;
