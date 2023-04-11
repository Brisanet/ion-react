import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IonButton, ButtonProps } from './button';

const clickEvent = jest.fn();
const defaultButton: ButtonProps = {
  label: 'Button',
  handleClick: clickEvent,
};

function sut(props: ButtonProps = defaultButton) {
  render(<IonButton {...props} />);
}

const getButton = () => {
  return screen.getByTestId('ion-button');
};

describe('Button', () => {
  describe('Default', () => {
    it('should render the Button component', () => {
      const label = 'Hello world!';
      sut({ ...defaultButton, label: label });
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should execute user event when the button is clicked', async () => {
      sut();
      await userEvent.click(getButton());
      expect(clickEvent).toHaveBeenCalled();
    });

    it('should be disabled', () => {
      sut({ ...defaultButton, disabled: true });
      expect(getButton()).toHaveAttribute('disabled');
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
      sut({ ...defaultButton, type: type });
      const { className } = getButton();
      expect(className).toContain(`type-${type}`);
    });

    it.each(buttonTypes)('should render %s danger button', (type) => {
      sut({ ...defaultButton, type: type, danger: true });
      const { className } = getButton();
      expect(className).toContain('danger-true');
      expect(className).toContain(`type-${type}`);
    });
  });

  describe('Button Sizes', () => {
    const buttonSizes: Array<ButtonProps['size']> = ['sm', 'md', 'lg', 'xl'];

    it.each(buttonSizes)(
      'should render button with %s size variation',
      (size) => {
        sut({ ...defaultButton, size: size });
        expect(getButton().className).toContain(`size-${size}`);
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

    it('should render icon lg when button is lg', () => {
      const lgSize = '24';
      const lgIconName = 'alert';
      sut({
        ...defaultButton,
        name: 'button-icon',
        size: 'lg',
        icon: lgIconName,
      });
      expect(screen.getByTestId(`ion-icon-${lgIconName}`)).toHaveAttribute(
        'height',
        lgSize
      );
    });

    it('should render icon in right side', () => {
      const icon = 'alert';
      sut({ ...defaultButton, icon: icon, iconOnRight: true });
      expect(getButton().className).toContain('iconOnRight-true');
    });

    it('should render icon in left by default', () => {
      sut({ ...defaultButton, icon: 'alert' });
      const buttonContainer = screen.getByTestId('ion-button-container');
      const ContainerFirstChild = buttonContainer.children.item(0);

      expect(ContainerFirstChild?.tagName).toBe('svg');
    });
  });
});
