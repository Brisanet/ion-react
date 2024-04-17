import { InputHTMLAttributes, useRef } from 'react';
import { InputType } from '../../core/types/input';
import { Container, Input } from './styles';

export type InputProps = {
  type?: InputType;
} & InputHTMLAttributes<HTMLInputElement>;

export const IonInput = ({
  type = 'text',
  disabled = false,
  ...props
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    ref.current && ref.current.focus();
  };

  return (
    <Container onClick={handleContainerClick} disabled={disabled}>
      <Input ref={ref} type={type} disabled={disabled} {...props} />
    </Container>
  );
};
