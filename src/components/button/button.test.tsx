import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './button';
import { ButtonProps } from './button';

function sut(
  props: ButtonProps = { label: 'Button', type: 'primary' }
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
    const handleClick = jest.fn();
    fireEvent.click(sut({ onClick: handleClick, label: 'Button' }));
    expect(handleClick).toBeCalledTimes(1);
  });

  test('should be disabled', () => {
    expect(sut({ disabled: true, label: 'Button' })).toHaveAttribute(
      'disabled'
    );
  });

  // test('should be danger class', () => {
  //   expect(sut({ danger: true, label: 'Button' })).toHaveClass('danger');
  // });

  const buttonTypes: Array<ButtonProps['type']> = [
    'primary',
    'secondary',
    'ghost',
    'dashed',
  ];
  test.each(buttonTypes)(
    'should render button with %s style type',
    async (type) => {
      expect(sut({ type, label: 'Button' })).toHaveAttribute(
        'class',
        expect.stringContaining(`type-${type}`)
      );
    }
  );
});
