import React from 'react';

import { StyledSection } from './style';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, bgColor }) => {
  return (
    <StyledSection bgColor={bgColor}>
      <div className={`section-container ${className}`}>{children}</div>
    </StyledSection>
  );
};

export default Section;
