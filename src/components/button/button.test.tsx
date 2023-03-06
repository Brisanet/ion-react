import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import IonButton from './button';
import { ButtonProps } from './button';

const clickEvent = jest.fn();
const defaultButton: ButtonProps = {
  label: 'Button',
  handleClick: clickEvent,
};

function sut(props: ButtonProps = defaultButton): HTMLElement {
  render(<IonButton {...props} />);
  return screen.getByRole('button', { name: props.label });
}

describe('Button', () => {
  describe('Default', () => {
    it('should render the Button component', () => {
      const label = 'Hello world!';
      sut({ ...defaultButton, label: label });
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should execute user event when the button is clicked', async () => {
      await userEvent.click(sut({ ...defaultButton }));
      expect(clickEvent).toHaveBeenCalled();
    });

    it('should be disabled', () => {
      expect(sut({ ...defaultButton, disabled: true })).toHaveAttribute(
        'disabled'
      );
    });

    afterEach(() => {
      clickEvent.mockClear();
    });
  });

  describe('Button Types', () => {
    const buttonTypes: Array<ButtonProps['type']> = [
      'primary',
      'secondary',
      'ghost',
      'dashed',
    ];

    it.each(buttonTypes)('should render button with %s style type', (type) => {
      const { className } = sut({ ...defaultButton, type: type });
      expect(className).toContain(`type-${type}`);
    });

    it.each(buttonTypes)('should render %s danger button', (type) => {
      const { className } = sut({ ...defaultButton, type: type, danger: true });
      expect(className).toContain('danger-true');
      expect(className).toContain(`type-${type}`);
    });
  });

  describe('Button Sizes', () => {
    const buttonSizes: Array<ButtonProps['size']> = ['sm', 'md', 'lg', 'xl'];

    it.each(buttonSizes)(
      'should render button with %s size variation',
      (size) => {
        expect(sut({ ...defaultButton, size: size }).className).toContain(
          `size-${size}`
        );
      }
    );
  });

  describe('With Icon', () => {
    it('should render md icon size by default', () => {
      const sm = '20';
      const icon = 'pencil';
      sut({ ...defaultButton, icon: icon });
      const Tab = screen.getByTestId(`ion-icon-${icon}`);
      expect(Tab).toHaveAttribute('height', sm);
    });

    it('should render icon lg when tab is lg', () => {
      const lgSize = '24';
      const lgIconName = 'alert';
      sut({ ...defaultButton, name: 'tab-icon', size: 'lg', icon: lgIconName });
      expect(screen.getByTestId(`ion-icon-${lgIconName}`)).toHaveAttribute(
        'height',
        lgSize
      );
    });

    it('should render icon in right side', () => {
      const icon = 'alert';
      expect(
        sut({ ...defaultButton, icon: icon, iconOnRight: true }).className
      ).toContain('iconOnRight-true');
    });
  });
});
