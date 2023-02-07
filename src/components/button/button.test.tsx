import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './button';
import { ButtonProps } from './button';

function renderAndGetButton(props: ButtonProps): HTMLElement {
  render(<Button label={props.label || 'Button'} {...props} />);
  return screen.getByRole('button', { name: props.label });
}

describe('Button', () => {
  test('renders the Button component', () => {
    const label = 'Hello world!';
    render(<Button type="primary" label={label} />);
    expect(screen.queryAllByText(label)).toHaveLength(1);
  });

  test('execute the onClick event', () => {
    const handleClick = jest.fn();
    const button = renderAndGetButton({
      type: 'primary',
      onClick: handleClick,
    });
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });

  test('is disabled', () => {
    const button = renderAndGetButton({
      label: 'Button',
      type: 'secondary',
      disabled: true,
    });
    expect(button).toHaveAttribute('disabled');
  });

  const buttonTypes: Array<ButtonProps['type']> = [
    'primary',
    'secondary',
    'ghost',
    'dashed',
  ];
  test.each(buttonTypes)('should render all types', async (type) => {
    expect(renderAndGetButton({ type })).toHaveAttribute(
      'class',
      expect.stringContaining(`type-${type}`)
    );
  });
});
