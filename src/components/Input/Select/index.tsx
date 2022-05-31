import React from 'react';

import { StyledSelect } from './style';

export interface TextAreaProps {
  id: string;
  label: string;
  className?: string;
  selectedValue?: string;
  setSelectedValue?: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  required?: boolean;
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

const Select = ({
  id,
  label = 'Input name',
  className,
  selectedValue,
  setSelectedValue,
  options,
  inputProps
}: TextAreaProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setSelectedValue) setSelectedValue(e.target.value);
  };

  return (
    <StyledSelect className={className}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select
        className="input"
        id={id}
        value={selectedValue}
        onChange={handleSelectChange}
        {...inputProps}
      >
        {options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </StyledSelect>
  );
};

export default Select;
