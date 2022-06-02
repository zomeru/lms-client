import React from 'react';

import { StyledSimpleButton } from './style';

export interface SimpleButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

const SimpleButton = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled
}: SimpleButtonProps) => {
  return (
    <StyledSimpleButton
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </StyledSimpleButton>
  );
};

export default SimpleButton;
