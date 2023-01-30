import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

// eslint-disable-next-line no-undef
describe('Button', () => {
  // eslint-disable-next-line no-undef
  test('renders the Button component', () => {
    render(<Button label="Hello world!" />);
  });
});
