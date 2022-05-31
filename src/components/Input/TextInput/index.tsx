import React from 'react';

import { StyledTextInput } from './style';

export interface TextInputProps {
  id: string;
  label: string;
  className?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type?: React.HTMLInputTypeAttribute | undefined;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TextInput = ({
  id,
  label = 'Input name',
  className,
  value,
  setValue,
  type = 'text',

  inputProps
}: TextInputProps) => {
  return (
    <StyledTextInput className={className}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => {
          if (setValue) {
            const val = e.target.value;
            let newVal = '';
            if (type === 'number') {
              newVal = val.replace(/\D+/g, '');
            } else if (type === 'password') {
              newVal = val.trim();
            } else {
              newVal = val;
            }
            setValue(newVal);
          }
        }}
        className="input"
        type={type}
        placeholder={label}
        id={id}
        {...inputProps}
      />
    </StyledTextInput>
  );
};

export default TextInput;
