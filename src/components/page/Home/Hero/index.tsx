import React from 'react';
import Image from 'next/image';

import { useDimensions } from '@/hooks';
import { HeroImage } from '@/assets';
import { StyledHero } from './style';

const Hero = () => {
  const { width } = useDimensions();

  console.log('width', width);

  return (
    <StyledHero
      height={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <div className="hero-header-container">
        <h1 className="hero-header">
          Pick and choose the book according to your needs
        </h1>
        <p className="hero-description">
          From applied literature to education resources, we have a lot of
          textbooks to provide you.
        </p>
      </div>
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <Image src={HeroImage} />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
