import { render, screen } from '@testing-library/react';

import { IonIcon } from './icons';
import { IonIconProps } from './icons';
import { IconType } from './svgs/icons';

const defaultIcon: IonIconProps = {
  size: 24,
  type: 'pencil',
  color: '#282B33',
};

const customIcon: IonIconProps = {
  type: 'access',
  size: 12,
  color: 'purple',
};

const sut = (props = defaultIcon) => render(<IonIcon {...props} />);
const getIcon = (type: IconType) => screen.getByTestId(`ion-icon-${type}`);

describe('IonIcon', () => {
  let iconElement: HTMLElement;
  describe('Default Props', () => {
    beforeEach(() => {
      sut();
      iconElement = getIcon(defaultIcon.type);
    });

    it('should render the icon', () => {
      expect(iconElement).toBeVisible();
    });

    it('should render with the default size', () => {
      expect(iconElement.getAttribute('width')).toBe(`${defaultIcon.size}`);
      expect(iconElement.getAttribute('height')).toBe(`${defaultIcon.size}`);
    });

    it('should render with the default color', () => {
      expect(iconElement.getAttribute('fill')).toBe(defaultIcon.color);
    });
  });

  describe('Custom Props', () => {
    beforeEach(() => {
      sut(customIcon);
      iconElement = getIcon(customIcon.type);
    });

    it('should render with custom size', () => {
      expect(iconElement.getAttribute('width')).toBe(`${customIcon.size}`);
      expect(iconElement.getAttribute('height')).toBe(`${customIcon.size}`);
    });

    it('should render icon with color purple', () => {
      expect(iconElement.getAttribute('fill')).toBe(customIcon.color);
    });
  });
});
