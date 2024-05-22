import { screen } from '@testing-library/react';

import { renderWithTheme } from '../utils/test-utils';
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

const sut = (props: IonIconProps = { type: 'pencil' }) =>
  renderWithTheme(<IonIcon {...props} />);
const getIcon = (type: IconType) => screen.getByTestId(`ion-icon-${type}`);
const getOuterHighlight = () => screen.getByTestId('ion-icon-outer-highlight');
const getInnerHighlight = () => screen.getByTestId('ion-icon-inner-highlight');

describe('IonIcon', () => {
  let iconElement: HTMLElement;
  let outerHighlight: HTMLElement;
  let innerHighlight: HTMLElement;
  describe('Default Props', () => {
    beforeEach(() => {
      sut();
      iconElement = getIcon(defaultIcon.type);
      outerHighlight = getOuterHighlight();
      innerHighlight = getInnerHighlight();
    });

    it('should render Icon component', () => {
      expect(iconElement).toBeVisible();
    });

    it('should render with default size', () => {
      expect(iconElement).toHaveStyleRule('width', `${defaultIcon.size}px`);
      expect(iconElement).toHaveStyleRule('height', `${defaultIcon.size}px`);
    });

    it('should render with default color', () => {
      expect(iconElement).toHaveStyleRule('fill', defaultIcon.color);
    });

    it('should render the highlights background color as transparent', () => {
      expect(outerHighlight).toHaveStyleRule('background-color', 'transparent');
      expect(innerHighlight).toHaveStyleRule('background-color', 'transparent');
    });
  });

  describe('Invalid Hex', () => {
    it('should render the highlights with the default props when the color informed is not Hexadecimal', () => {
      sut({ ...defaultIcon, color: 'red' });
      expect(outerHighlight).toHaveStyleRule('background-color', 'transparent');
      expect(innerHighlight).toHaveStyleRule('background-color', 'transparent');
      expect(outerHighlight).toHaveStyleRule('width', 'unset');
      expect(outerHighlight).toHaveStyleRule('height', 'unset');
      expect(innerHighlight).toHaveStyleRule('width', 'unset');
      expect(innerHighlight).toHaveStyleRule('height', 'unset');
    });
  });

  describe('Custom props', () => {
    beforeEach(() => {
      sut(customIcon);
      iconElement = getIcon(customIcon.type);
      outerHighlight = getOuterHighlight();
      innerHighlight = getInnerHighlight();
    });

    it('should render with the informed size', () => {
      expect(iconElement).toHaveStyleRule('width', `${customIcon.size}px`);
      expect(iconElement).toHaveStyleRule('height', `${customIcon.size}px`);
    });

    it('should render with the informed color', () => {
      expect(iconElement).toHaveStyleRule('fill', customIcon.color);
    });
  });

  describe('Simple Highlight', () => {
    beforeEach(() => {
      sut({ ...defaultIcon, highlight: 'simple' });
      outerHighlight = getOuterHighlight();
      innerHighlight = getInnerHighlight();
    });

    it('should render the outer container with double the icon size', () => {
      expect(outerHighlight).toHaveStyleRule(
        'width',
        `${defaultIcon.size && defaultIcon.size * 2}px`
      );
      expect(outerHighlight).toHaveStyleRule(
        'height',
        `${defaultIcon.size && defaultIcon.size * 2}px`
      );
    });

    it('should render the outer container with a 10% transparency background color', () => {
      expect(outerHighlight).toHaveStyleRule(
        'background-color',
        `${defaultIcon.color}1A`
      );
    });
  });

  describe('Double Highlight', () => {
    const iconSizes = {
      sm: 16,
      md: 24,
    };

    it('should render the outer circle with a background color with 10% transparency', () => {
      sut({
        ...defaultIcon,
        highlight: 'double',
      });
      expect(getOuterHighlight()).toHaveStyleRule(
        'background-color',
        `${defaultIcon.color}1A`
      );
    });

    it('should render the inner circle with a background color with 25% transparency', () => {
      sut({
        ...defaultIcon,
        highlight: 'double',
      });
      expect(getInnerHighlight()).toHaveStyleRule(
        'background-color',
        `${defaultIcon.color}40`
      );
    });

    it('should render the outer circle with the right proportion when the icon size is smaller than md', () => {
      sut({
        ...defaultIcon,
        size: iconSizes.sm,
        highlight: 'double',
      });
      expect(getOuterHighlight()).toHaveStyleRule(
        'width',
        `${iconSizes.sm * 2.5}px`
      );
      expect(getOuterHighlight()).toHaveStyleRule(
        'height',
        `${iconSizes.sm * 2.5}px`
      );
    });

    it('should render the outer circle with the right proportion when the icon size is at least md', () => {
      sut({
        ...defaultIcon,
        size: iconSizes.md,
        highlight: 'double',
      });
      expect(getOuterHighlight()).toHaveStyleRule(
        'width',
        `${iconSizes.md * 2.25}px`
      );
      expect(getOuterHighlight()).toHaveStyleRule(
        'height',
        `${iconSizes.md * 2.25}px`
      );
    });

    it('should render the inner circle with the right proportion when the icon size is smaller than md', () => {
      sut({
        ...defaultIcon,
        size: iconSizes.sm,
        highlight: 'double',
      });
      expect(getInnerHighlight()).toHaveStyleRule(
        'width',
        `${iconSizes.sm * 1.75}px`
      );
      expect(getInnerHighlight()).toHaveStyleRule(
        'height',
        `${iconSizes.sm * 1.75}px`
      );
    });

    it('should render the inner circle with the right proportion when the icon size is at least md', () => {
      sut({
        ...defaultIcon,
        size: iconSizes.md,
        highlight: 'double',
      });
      expect(getInnerHighlight()).toHaveStyleRule(
        'width',
        `${iconSizes.md * 1.5}px`
      );
      expect(getInnerHighlight()).toHaveStyleRule(
        'height',
        `${iconSizes.md * 1.5}px`
      );
    });
  });
});
