import React from 'react';

import { StyledSection } from './style';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  height?: number | string;
}

const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, bgColor, height }) => {
  return (
    <StyledSection bgColor={bgColor} height={height}>
      <div className={`section-container ${className}`}>{children}</div>
    </StyledSection>
  );
};

export default Section;
