import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { inputTypes } from '../../core/types/input';
import { renderWithTheme } from '../utils/test-utils';
import { InputProps, IonInput } from './input';

const defaultInput = {
  placeholder: 'Digite o seu nome',
};

const sut = (props: InputProps = defaultInput) => {
  return renderWithTheme(<IonInput {...props} />);
};

const getInput = () => {
  return screen.getByPlaceholderText(defaultInput.placeholder);
};

describe('IonInput', () => {
  describe('Default', () => {
    beforeEach(() => {
      sut();
    });

    it('should render input with placeholder', () => {
      expect(getInput()).toBeInTheDocument();
    });

    it('should render input enabled', () => {
      expect(getInput()).toBeEnabled();
    });

    it('should render input text', () => {
      expect(getInput()).toHaveAttribute('type', 'text');
    });

    it('should type value on input', async () => {
      const textToType = 'Olá eu sou o Goku!';
      await userEvent.type(getInput(), textToType);
      expect(getInput()).toHaveValue(textToType);
    });
  });

  describe('Alternatives cases', () => {
    it.each(inputTypes)('should render input type %s', (type) => {
      sut({ ...defaultInput, type: type });
      expect(getInput()).toHaveAttribute('type', type);
    });

    it('should render input disabled', () => {
      sut({ ...defaultInput, disabled: true });
      expect(getInput()).toBeDisabled();
    });
  });
});
