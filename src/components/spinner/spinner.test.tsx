import theme from '@ion/styles/theme';
import { screen } from '@testing-library/dom';
import { renderWithTheme } from '../utils/test-utils';
import { IonSpinner, IonSpinnerProps } from './spinner';
import { colorsByType } from './styles';

const variants: IonSpinnerProps['variant'][] = [
  'primary',
  'secondary',
  'danger',
];

const size = 62;
const customColor = '#f00';

const sut = (props?: IonSpinnerProps) => {
  return renderWithTheme(<IonSpinner {...props} />);
};

describe('Spinner', () => {
  it('should render spinner with default props', () => {
    const { container } = sut();
    expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
      'border-left-color',
      colorsByType(theme)
    );
    expect(container).toMatchSnapshot();
  });
  describe('Variants', () => {
    it.each(variants)('should render spinner with %s variant', (variant) => {
      const { container } = sut({ variant });
      expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
        'border-left-color',
        colorsByType(theme, variant)
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe('Size', () => {
    it('should render spinner with 64px size', () => {
      const { container } = sut({ size });
      const spinner = screen.getByTestId('ion-spinner');
      expect(spinner).toHaveStyleRule('width', `${size}px`);
      expect(spinner).toHaveStyleRule('height', `${size}px`);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Custom color', () => {
    it('should render spinner with custom color', () => {
      const { container } = sut({ customColor });
      expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
        'border-left-color',
        customColor
      );
      expect(container).toMatchSnapshot();
    });
  });
});
