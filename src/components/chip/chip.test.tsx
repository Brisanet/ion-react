import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test-utils';
import { ChipProps, ChipSizes, IonChip } from './chip';

const clickEvent = jest.fn();
const defaultChip: ChipProps = {
  label: 'Ragnarok!',
  handleClick: clickEvent,
};
const chipId = 'ion-chip';

const sut = (props: ChipProps = defaultChip) => {
  return renderWithTheme(<IonChip {...props} />);
};

describe('IonChip', () => {
  describe('Default', () => {
    beforeEach(() => {
      sut();
    });

    it('should render chip', () => {
      expect(screen.queryAllByTestId(chipId)).toHaveLength(1);
    });

    it('should render chip with correct value', () => {
      expect(screen.queryAllByText(defaultChip.label)).toHaveLength(1);
    });

    it('should render chip with correct value', async () => {
      await userEvent.click(screen.getByTestId(chipId));
      expect(clickEvent).toHaveBeenCalled();
    });

    it('should render chip not disabled by default', () => {
      expect(screen.getByTestId(chipId)).not.toBeDisabled();
    });
  });

  describe('Custom Props', () => {
    it('should render chip selected', () => {
      const { container } = sut({ ...defaultChip, selected: true });
      expect(container).toMatchSnapshot();
    });

    it.each<ChipSizes>(['sm', 'md'])('should render chip %s size', (size) => {
      const { container } = sut({ ...defaultChip, size });
      expect(container).toMatchSnapshot();
    });
  });

  describe('With Icon', () => {
    const iconName = 'pencil';

    beforeEach(() => {
      sut({ ...defaultChip, icon: iconName });
    });

    it('should render pencil icon', () => {
      expect(screen.getByTestId(`ion-icon-${iconName}`)).toBeInTheDocument();
    });

    it('should render icon sm by default', () => {
      const smSize = '16';
      expect(screen.getByTestId(`ion-icon-${iconName}`)).toHaveStyleRule(
        'height',
        `${smSize}px`
      );
    });

    it('should render icon md when chip is md', () => {
      const mdSize = '20';
      const mdIconName = 'alert';
      sut({ ...defaultChip, size: 'md', icon: mdIconName });
      expect(screen.getByTestId(`ion-icon-${mdIconName}`)).toHaveStyleRule(
        'height',
        `${mdSize}px`
      );
    });
  });

  afterEach(() => {
    clickEvent.mockClear();
  });
});
