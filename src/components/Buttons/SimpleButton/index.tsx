import React from 'react';

import { StyledSimpleButton } from './style';

export interface SimpleButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const SimpleButton = ({ text, onClick, className = '' }: SimpleButtonProps) => {
  return (
    <StyledSimpleButton className={className} onClick={onClick}>
      {text}
    </StyledSimpleButton>
  );
};

export default SimpleButton;
