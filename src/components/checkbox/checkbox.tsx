import React, { useState } from 'react';
import { CheckboxStyles } from './styles';

type StitchesCheckboxProps = React.ComponentProps<typeof CheckboxStyles>;

export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
} & StitchesCheckboxProps;

export const IonCheckbox = ({ label, checked }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    // if (onChange) {
    //   onChange(!isChecked);
    // }
  };

  return (
    <CheckboxStyles>
      <input
        type="checkbox"
        name={label}
        checked={isChecked}
        onClick={handleChange}
      />
      <label>{label}</label>
    </CheckboxStyles>
  );
};
