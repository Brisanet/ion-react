import { render, screen } from '@testing-library/react';
import IonChip, { ChipProps } from './chip';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

const clickEvent = jest.fn();
const defaultChip: ChipProps = {
  label: 'Ragnarok!',
  handleClick: clickEvent,
};
const chipId = 'ion-chip';

const sut = (props: ChipProps = defaultChip) => {
  return render(<IonChip {...props} />);
};

describe('IonChip', () => {
  describe('Default', () => {
    beforeEach(() => {
      sut();
    });

    test('should render chip', () => {
      expect(screen.queryAllByTestId(chipId)).toHaveLength(1);
    });

    test('should render chip with correct value', () => {
      expect(screen.queryAllByText(defaultChip.label)).toHaveLength(1);
    });

    test('should render chip with correct value', async () => {
      await userEvent.click(screen.getByTestId(chipId));
      expect(clickEvent).toHaveBeenCalled();
    });

    test('should render chip not disabled by default', () => {
      expect(screen.getByTestId(chipId)).not.toBeDisabled();
    });
  });

  describe('Custom Props', () => {
    it('should render chip selected', () => {
      const { container } = sut({ ...defaultChip, selected: true });
      const element = container.firstChild as Element;
      expect(element.className).toContain('selected-true');
    });

    it.each(['sm', 'md'])('should render chip %s size', (size: any) => {
      const { container } = sut({ ...defaultChip, size: size });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`size-${size}`);
    });
  });
});
