import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  test('renders the Button component', () => {
    const label = 'Hello world!';
    render(<Button type="primary" label={label} />);
    expect(screen.queryAllByText(label)).toHaveLength(1);
  });

  test('execute the onClick event', () => {
    const handleClick = jest.fn();

    render(<Button type="primary" label="Button" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Button' }));

    // expect mock handler to be called
    expect(handleClick).toBeCalledTimes(1);
  });
});
