import { screen } from '@testing-library/react';

import theme from '@ion/styles/theme';
import { renderWithTheme } from '../utils/test-utils';
import { BadgeProps, BadgeType, IonBadge, LabelType } from './badge';
import { typeColors } from './styles';

const defaultBadge: BadgeProps = {
  label: 'Badge',
  type: 'primary',
};

const sut = (props: BadgeProps = defaultBadge) => {
  return renderWithTheme(<IonBadge {...props} />);
};

const getBadge = () => {
  return screen.getByTestId('ion-badge');
};

const getDotBadge = () => {
  return screen.getByTestId('ion-dot-badge');
};

describe('BadgeComponent', () => {
  describe('With value', () => {
    describe('Default', () => {
      beforeEach(() => {
        sut();
      });

      it('should render badge component', async () => {
        expect(screen.getByText(defaultBadge.label || '')).toBeInTheDocument();
      });

      it('should render primary badge by default', async () => {
        const { background, color } = typeColors(theme, 'primary');
        expect(getBadge()).toHaveStyleRule('background-color', background);
        expect(getBadge()).toHaveStyleRule(
          'color',
          color || theme.colors.neutral[1]
        );
      });
    });

    describe('Custom Props', () => {
      it.each(['10', 99, '6', 0])(
        'should render badge with %i label (string or number)',
        async (label: LabelType) => {
          sut({ label });
          expect(screen.getByText(label)).toBeInTheDocument();
        }
      );

      it.each([100, 101, 1000])(
        'should render 99+ when value is %i (bigger than 100)',
        async (label: LabelType) => {
          sut({ label });
          expect(getBadge().textContent).toBe('99+');
        }
      );

      it('should not render 99+ if string contains characters other than numbers', async () => {
        const label = '100A';
        sut({ ...defaultBadge, label: label });
        expect(getBadge().textContent).toBe(label);
      });

      const badgeTypes: Array<BadgeType> = [
        'primary',
        'secondary',
        'neutral',
        'danger',
      ];
      it.each(badgeTypes)(
        'should render badge %s type',
        async (type: BadgeType) => {
          const { background, color } = typeColors(theme, type);
          sut({ ...defaultBadge, type: type });
          expect(getBadge()).toHaveStyleRule('background-color', background);
          expect(getBadge()).toHaveStyleRule(
            'color',
            color || theme.colors.neutral[1]
          );
        }
      );
    });
  });
  describe('Dot', () => {
    describe('Default', () => {
      beforeEach(() => {
        sut({ ...defaultBadge, dot: true });
      });

      it('should render dot badge by default', async () => {
        expect(getDotBadge()).toHaveStyleRule(
          'background-color',
          theme.colors.main.primary
        );
        expect(getDotBadge()).toHaveStyleRule('width', '8px');
        expect(getDotBadge()).toHaveStyleRule('height', '8px');
        expect(getDotBadge()).toHaveStyleRule('border-radius', '50%');
        expect(getDotBadge()).toMatchSnapshot();
      });
    });

    describe('With label', () => {
      it('should render dot badge with label', async () => {
        sut({ ...defaultBadge, dot: true });
        expect(getDotBadge()).toBeVisible();
        expect(screen.getByText(defaultBadge.label || '')).toBeInTheDocument();
      });
    });

    describe('With icon', () => {
      it('should render dot badge with icon when size is greater than extra small', async () => {
        sut({ ...defaultBadge, dot: true, icon: 'close', size: 'sm' });
        expect(getDotBadge()).toBeVisible();
        expect(screen.getByTestId('ion-icon-close')).toBeInTheDocument();
      });

      it('should not render icon when size is extra small', async () => {
        sut({ ...defaultBadge, dot: true, icon: 'close', size: 'xs' });
        expect(getDotBadge()).toBeVisible();
        expect(screen.queryByTestId('ion-icon-close')).not.toBeInTheDocument();
      });

      it('should not render label when icon is present', async () => {
        sut({ ...defaultBadge, dot: true, icon: 'close', size: 'sm' });
        expect(getDotBadge()).toBeVisible();
        expect(
          screen.queryByText(defaultBadge.label || '')
        ).not.toBeInTheDocument();
      });
    });
  });
});
