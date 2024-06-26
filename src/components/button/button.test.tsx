import theme from '@ion/styles/theme';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test-utils';
import { ButtonProps, ButtonSizes, ButtonVariants, IonButton } from './button';
import { variantsColors } from './styles';

const clickEvent = jest.fn();
const defaultButton: ButtonProps = {
  label: 'Button',
  onClick: clickEvent,
};

const sut = (props: ButtonProps = defaultButton) =>
  renderWithTheme(<IonButton {...props} />);

const getButton = () => {
  return screen.getByTestId('ion-button');
};

describe('Button', () => {
  describe('Default', () => {
    it('should render the Button component', () => {
      const label = 'Hello world!';
      sut({ ...defaultButton, label: label });
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });

    it('should execute user event when the button is clicked', async () => {
      sut();
      await userEvent.click(getButton());
      expect(clickEvent).toHaveBeenCalled();
    });

    it('should be disabled', () => {
      sut({ ...defaultButton, disabled: true });
      expect(getButton()).toBeDisabled();
    });

    afterEach(() => {
      clickEvent.mockClear();
    });
  });

  describe('Button Types', () => {
    const buttonTypes: ButtonVariants[] = [
      'primary',
      'secondary',
      'ghost',
      'dashed',
    ];

    it.each(buttonTypes)('should render button with %s styles', (type) => {
      const colors = variantsColors(theme, type);
      sut({ ...defaultButton, variant: type });
      expect(getButton()).toHaveStyleRule(
        'background-color',
        colors.default.background
      );
      expect(getButton()).toHaveStyleRule('color', colors.default.color);
    });

    it.each(buttonTypes)(
      'should render %s button with danger styles',
      (type) => {
        const colors = variantsColors(theme, type, true);
        sut({ ...defaultButton, variant: type, danger: true });
        expect(getButton()).toHaveStyleRule(
          'background-color',
          colors.default.background
        );
        expect(getButton()).toHaveStyleRule('color', colors.default.color);
      }
    );
  });

  describe('Button Sizes', () => {
    const buttonSizes: ButtonSizes[] = ['sm', 'md', 'lg', 'xl'];

    it.each(buttonSizes)(
      'should render button with %s size variation',
      (size) => {
        sut({ ...defaultButton, size: size });
        expect(getButton()).toMatchSnapshot();
      }
    );

    it.each<{ borderRadius: string; size: ButtonSizes }>([
      { borderRadius: '6px', size: 'md' },
      { borderRadius: '10px', size: 'lg' },
    ])(
      'should render borderRadius as $borderRadius for button with size $size',
      ({ borderRadius, size }) => {
        sut({ ...defaultButton, size });
        expect(getButton()).toHaveStyleRule('border-radius', borderRadius);
      }
    );
  });

  describe('With Icon', () => {
    it('should render md icon size by default', () => {
      const sm = '20';
      const icon = 'pencil';
      sut({ ...defaultButton, icon: icon });
      const Tab = screen.getByTestId(`ion-icon-${icon}`);
      expect(Tab).toHaveStyleRule('height', `${sm}px`);
    });

    it('should render icon lg when button is lg', () => {
      const lgSize = '24';
      const lgIconName = 'alert';
      sut({
        ...defaultButton,
        name: 'button-icon',
        size: 'lg',
        icon: lgIconName,
      });
      expect(screen.getByTestId(`ion-icon-${lgIconName}`)).toHaveStyleRule(
        'height',
        `${lgSize}px`
      );
    });

    it('should render icon in right side', () => {
      const icon = 'alert';
      sut({ ...defaultButton, icon: icon, iconOnRight: true });
      expect(screen.getByRole('button')).toHaveStyleRule(
        'flex-direction',
        'row-reverse'
      );
    });

    it('should render icon in left by default', () => {
      sut({ ...defaultButton, icon: 'alert' });
      expect(screen.getByRole('button')).toHaveStyleRule(
        'flex-direction',
        'row'
      );
    });

    it('should render correct styles when there is no label', () => {
      sut({ ...defaultButton, icon: 'alert', label: '' });
      expect(getButton()).toHaveStyleRule('padding', '0');
    });
  });

  describe('Circular Button', () => {
    it('should render circular button when there is no label', () => {
      sut({ ...defaultButton, circular: true, label: '' });
      expect(getButton()).toHaveStyleRule('border-radius', '50%');
    });
  });

  describe('Loading Button', () => {
    it('should render spinner when loading is true', () => {
      sut({ ...defaultButton, loading: true });
      expect(screen.getByTestId('ion-spinner')).toBeInTheDocument();
    });

    it('should render spinner with danger variant when danger is true and variant is not primary', () => {
      sut({
        ...defaultButton,
        loading: true,
        danger: true,
        variant: 'secondary',
      });
      expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
        'border-left-color',
        theme.colors.main.negative
      );
    });

    it('should render spinner with variant secondary when danger is true and variant is primary', () => {
      sut({
        ...defaultButton,
        loading: true,
        danger: true,
        variant: 'primary',
      });
      expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
        'border-left-color',
        theme.colors.main.secondary
      );
    });

    it('should render spinner with variant primary when danger is false and variant is not primary', () => {
      sut({
        ...defaultButton,
        loading: true,
        danger: false,
        variant: 'secondary',
      });
      expect(screen.getByTestId('ion-spinner')).toHaveStyleRule(
        'border-left-color',
        theme.colors.main.primary
      );
    });

    it('should not render icon when loading is true', () => {
      sut({ ...defaultButton, loading: true, icon: 'alert' });
      expect(screen.queryByTestId('ion-icon-alert')).not.toBeInTheDocument();
    });

    it('should not allow user to click when loading is true', async () => {
      const onClick = jest.fn();
      sut({ ...defaultButton, loading: true, onClick });
      expect(getButton()).toHaveStyleRule('pointer-events', 'none');
    });
  });
});
