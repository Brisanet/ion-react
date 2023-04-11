import React from 'react';
import { render, screen } from '@testing-library/react';

import { IonIcon } from './icons';
import { IonIconProps } from './icons';
import { iconType } from './svgs/icons';

const defaultIcon: IonIconProps = {
  type: 'pencil',
};

const sut = (props = defaultIcon) => render(<IonIcon {...props} />);
const getIcon = (type: iconType) => screen.getByTestId(`ion-icon-${type}`);

describe('IonIcon', () => {
  it('should render default size icon of type pencil', () => {
    sut();
    const defaultSize = 24;
    const icon = getIcon(defaultIcon.type);
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('width')).toBe(`${defaultSize}`);
    expect(icon.getAttribute('height')).toBe(`${defaultSize}`);
  });

  it('should render default color icon', () => {
    sut();
    const icon = getIcon(defaultIcon.type);
    const defaultColor = '#282B33';
    expect(icon.getAttribute('fill')).toBe(defaultColor);
  });

  it('should render icon with size 12', () => {
    const customSize = 12;
    sut({ ...defaultIcon, size: customSize });
    const icon = getIcon(defaultIcon.type);
    expect(icon.getAttribute('width')).toBe(`${customSize}`);
    expect(icon.getAttribute('height')).toBe(`${customSize}`);
  });

  it('should render icon with color purple', () => {
    const customColor = 'purple';
    sut({ ...defaultIcon, color: customColor });
    const icon = getIcon(defaultIcon.type);
    expect(icon.getAttribute('fill')).toBe(customColor);
  });
});
