import React from 'react';
import { render, screen } from '@testing-library/react';

import { IonBadge, BadgeType, LabelType } from './badge';
import { BadgeProps } from './badge';

const defaultBadge: BadgeProps = {
  label: 'Badge',
  type: 'primary',
};

const sut = (props: BadgeProps = defaultBadge) => {
  return render(<IonBadge {...props} />);
};

const getBadge = () => {
  return screen.getByTestId('ion-badge');
};

describe('BadgeComponent', () => {
  describe('Default', () => {
    beforeEach(() => {
      sut();
    });

    it('should render badge component', async () => {
      expect(screen.getByText(defaultBadge.label)).toBeInTheDocument();
    });

    it('should render primary badge by default', async () => {
      expect(getBadge().className).toContain('type-primary');
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
      'negative',
    ];
    it.each(badgeTypes)(
      'should render badge %s type',
      async (type: BadgeType) => {
        sut({ ...defaultBadge, type: type });
        expect(getBadge().className).toContain(`type-${type}`);
      }
    );
  });
});
