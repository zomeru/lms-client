import React from 'react';

import { StyledTextArea } from './style';

export interface TextAreaProps {
  id: string;
  label: string;
  className?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  rows?: number;
  cols?: number;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const TextArea = ({
  id,
  label = 'Input name',
  className,
  value,
  setValue,
  rows,
  cols,
  inputProps
}: TextAreaProps) => {
  return (
    <StyledTextArea className={className}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        className="input"
        placeholder={label}
        id={id}
        rows={rows}
        cols={cols}
        {...inputProps}
      />
    </StyledTextArea>
  );
};

export default TextArea;
