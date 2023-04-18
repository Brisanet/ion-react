import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IonCheckbox, CheckboxProps } from './checkbox';

const onChange = jest.fn();
const defaultCheckbox: CheckboxProps = {
  label: 'Checkbox',
  onChange: onChange,
};

function sut(props: CheckboxProps = defaultCheckbox) {
  render(<IonCheckbox {...props} />);
}

const getCheckbox = () => {
  return screen.queryByTestId('ion-checkbox') as HTMLElement;
};

describe('Checkbox', () => {
  describe('Default', () => {
    it('should render checkbox component without errors', () => {
      sut();
      expect(getCheckbox()).toBeInTheDocument();
    });

    it('should render checked checkbox', () => {
      sut({ ...defaultCheckbox, checked: true });
      expect(getCheckbox()).toBeChecked();
    });

    it('should disable the checkbox', () => {
      sut({ ...defaultCheckbox, disabled: true });
      expect(getCheckbox()).toBeDisabled();
    });

    it('calls onChange when checked state changes', () => {
      sut();
      userEvent.click(getCheckbox());
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('With Icon', () => {});
});
