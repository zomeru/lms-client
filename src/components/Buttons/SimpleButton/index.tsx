import React from 'react';

import { StyledSimpleButton } from './style';

export interface SimpleButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const SimpleButton = ({
  text,
  onClick,
  className = '',
  type = 'button'
}: SimpleButtonProps) => {
  return (
    <StyledSimpleButton type={type} className={className} onClick={onClick}>
      {text}
    </StyledSimpleButton>
  );
};

export default SimpleButton;
