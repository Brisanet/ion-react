import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './button';
import { ButtonProps } from './button';

const clickEvent = jest.fn();
const defaultButton: ButtonProps = {
  label: 'Button',
  onClick: clickEvent,
};

function sut(
  props: ButtonProps = defaultButton
): HTMLElement {
  render(<Button {...props} />);
  return screen.getByRole('button', { name: props.label });
}

describe('Button', () => {
  test('should render the Button component', () => {
    const label = 'Hello world!';
    render(<Button label={label} />);
    expect(screen.queryAllByText(label)).toHaveLength(1);
  });

  test('should execute event when the button is clicked', () => {
    fireEvent.click(sut({  ...defaultButton }));
    expect(clickEvent).toBeCalledTimes(1);
  });

  test('should be disabled', () => {
    expect(sut({ ...defaultButton, disabled: true })).toHaveAttribute(
      'disabled'
    );
  });
});

describe('Button Props', () => {
  const buttonTypes: Array<ButtonProps['type']> = [
    'primary',
    'secondary',
    'ghost',
    'dashed',
  ];

  test.each(buttonTypes)(
    'should render button with %s style type',
    (type) => {
      const {className} = sut({ ...defaultButton, type: type }); 
      expect(className).toContain(`type-${type}`);
    }
  );

  test.each(buttonTypes)(
    'should render %s danger button',
    (type) => {
      const {className} = sut({ ...defaultButton, type: type, isDanger: true }); 
      expect(className).toContain(`danger-${type}`);
    }
  );
})
