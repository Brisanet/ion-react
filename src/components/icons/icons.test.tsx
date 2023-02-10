import React from 'react';
import { render, screen } from '@testing-library/react';

import IonIcon from './icons';
import { IonIconProps } from './icons';
import { iconType } from './svgs/icons';

const defaultIcon: IonIconProps = {
  type: 'pencil',
};

const sut = (props = defaultIcon) => render(<IonIcon {...props} />);
const getIcon = (type: iconType) => screen.getByTestId(`ion-icon-${type}`);

describe('IonIcon', () => {
  it('should render default icon of type pencil', () => {
    sut();
    const icon = getIcon('pencil');
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('width')).toBe('24');
    expect(icon.getAttribute('height')).toBe('24');
    expect(icon.getAttribute('fill')).toBe('#282B33');
  });

  it('should render icon with size 12', () => {
    sut({ ...defaultIcon, size: 12 });
    const icon = getIcon('pencil');
    expect(icon.getAttribute('width')).toBe('12');
    expect(icon.getAttribute('height')).toBe('12');
  });

  it('should render icon with color purple', () => {
    sut({ ...defaultIcon, color: 'purple' });
    const icon = getIcon('pencil');
    expect(icon.getAttribute('fill')).toBe('purple');
  });
});
