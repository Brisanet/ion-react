import { InputHTMLAttributes } from 'react';
import { Checkbox, CheckboxContainer, Label } from './styles';

export type CheckboxProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const IonCheckbox = ({ label, id, ...props }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <Checkbox {...props} id={id} type='checkbox' data-testid='ion-checkbox' />
      {!!label && <Label htmlFor={id}>{label}</Label>}
    </CheckboxContainer>
  );
};
