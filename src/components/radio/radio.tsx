import { Container, RadioGroup } from './styles';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface IonRadioProps {
  options: Option[];
  name: string;
  onChange: (value: string) => void;
  value?: Option['value'];
}

export const IonRadio = ({ name, options, value, onChange }: IonRadioProps) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <RadioGroup>
      {options.map(({ label, value: optionValue, disabled }) => (
        <Container key={optionValue} $disabled={disabled}>
          <input
            id={optionValue}
            name={name}
            type='radio'
            value={optionValue}
            checked={optionValue === value}
            disabled={disabled}
            onChange={() => handleChange(optionValue)}
          />
          <label htmlFor={optionValue}>{label}</label>
        </Container>
      ))}
    </RadioGroup>
  );
};
