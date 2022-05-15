import React from 'react';
import Image from 'next/image';

import Section from '@/components/Section';
import { useDimensions } from '@/hooks';
import { HeroImage } from '@/assets';
import { colors } from '@styles/theme';
import { StyledHero } from './style';

const Hero = () => {
  const { width } = useDimensions();

  return (
    <Section
      bgColor={colors.primary}
      height={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledHero>
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
            <Image
              src={HeroImage}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </StyledHero>
    </Section>
  );
};

export default Hero;
