import React, { useState } from 'react';
import { CheckboxStyles } from './styles';

type StitchesCheckboxProps = React.ComponentProps<typeof CheckboxStyles>;

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
} & StitchesCheckboxProps;

export const IonCheckbox = ({
  label,
  checked = false,
  disabled = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxStyles disabled={disabled}>
      <input
        type="checkbox"
        data-testid="ion-checkbox"
        name={label}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label>{label}</label>
    </CheckboxStyles>
  );
};
