import { screen } from '@testing-library/react';
import { renderWithTheme } from '../utils/test-utils';
import { DividerProps, IonDivider } from './divider';

const sut = (props?: DividerProps) => {
  return renderWithTheme(<IonDivider {...props} />);
};

const directions: Array<DividerProps['direction']> = ['horizontal', 'vertical'];
const types: Array<DividerProps['type']> = ['dashed', 'solid'];
const label = 'Label';

describe('Divider', () => {
  describe('Default', () => {
    it.each(directions)('should render %s divider', (direction) => {
      const { container } = sut({ direction });
      expect(container).toMatchSnapshot();
    });

    it.each(types)('should render %s divider', (type) => {
      const { container } = sut({ type });
      expect(container).toMatchSnapshot();
    });
  });

  describe('With Label', () => {
    it('should render with a label', () => {
      sut({ label });
      expect(screen.getByText(label)).toBeVisible();
    });
  });
});
