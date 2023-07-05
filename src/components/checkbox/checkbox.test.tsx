import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IonCheckbox, CheckboxProps } from './checkbox';

const defaultCheckbox: CheckboxProps = {
  label: 'Checkbox',
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

    it('should render checkbox unchecked by default', () => {
      sut({ ...defaultCheckbox });
      expect(getCheckbox()).not.toBeChecked();
    });

    it('should render checked checkbox', () => {
      sut({ ...defaultCheckbox, checked: true });
      expect(getCheckbox()).toBeChecked();
    });

    it('should disable the checkbox', () => {
      sut({ ...defaultCheckbox, disabled: true });
      expect(getCheckbox()).toBeDisabled();
    });

    it('should render checkbox without label by default', () => {
      sut({});
      expect(getCheckbox().textContent).toBe('');
    });

    it('should render checkbox with label', () => {
      sut();
      expect(screen.getByText('Checkbox').textContent).toBe(
        defaultCheckbox.label
      );
    });

    it('should change checked state when checkbox is clicked', () => {
      sut();
      const checkbox = getCheckbox();
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });
});
