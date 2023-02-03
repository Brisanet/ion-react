import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  test('renders the Button component', () => {
    const label = 'Hello world!';
    render(<Button type="primary" label={label} />);
    expect(screen.queryAllByText(label)).toHaveLength(1);
  });
});
