import { InputHTMLAttributes, useState } from 'react';
import { Checkbox, CheckboxContainer, Label } from './styles';

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const IonCheckbox = ({
  label,
  checked = false,
  disabled = false,
  id,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer>
      <Checkbox
        {...props}
        id={id}
        type='checkbox'
        data-testid='ion-checkbox'
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      {!!label && <Label htmlFor={id}>{label}</Label>}
    </CheckboxContainer>
  );
};
