import { InputType } from '../../core/types/input';
import { InputContainer, InputRow, InputStyles } from './styles';
import React from 'react';

export type InputProps = {
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
};

export const IonInput = ({
  placeholder,
  type = 'text',
  disabled = false,
}: InputProps) => {
  return (
    <InputContainer>
      <InputRow disabled={disabled}>
        <InputStyles
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </InputRow>
    </InputContainer>
  );
};
