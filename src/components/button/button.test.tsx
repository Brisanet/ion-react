import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import IonButton from './button';
import { ButtonProps } from './button';

const clickEvent = jest.fn();
const defaultButton: ButtonProps = {
  label: 'Button',
  onClick: clickEvent,
};

function sut(props: ButtonProps = defaultButton): HTMLElement {
  render(<IonButton {...props} />);
  return screen.getByRole('button', { name: props.label });
}

describe('Button', () => {
  it('should render the Button component', () => {
    const label = 'Hello world!';
    sut({ ...defaultButton, label: label });
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should execute event when the button is clicked', () => {
    userEvent.click(sut({ ...defaultButton }));
    expect(clickEvent).toBeCalledTimes(1);
  });

  it('should be disabled', () => {
    expect(sut({ ...defaultButton, disabled: true })).toHaveAttribute(
      'disabled'
    );
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
    const { className } = sut({ ...defaultButton, type: type, isDanger: true });
    expect(className).toContain(`danger-${type}`);
  });
});

afterEach(() => {
  clickEvent.mockClear();
});
