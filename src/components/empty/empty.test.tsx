import { screen } from '@testing-library/dom';
import { renderWithTheme } from '../utils/test-utils';
import { EmptyProps, IonEmpty } from './empty';

const sut = (props: EmptyProps) => {
  renderWithTheme(<IonEmpty {...props} />);
};

describe('Empty', () => {
  describe('Default', () => {
    it('should render with default props', () => {
      sut({});
      expect(screen.getByText('Sem dados')).toBeInTheDocument();
      expect(
        screen.getByTestId('ion-icon-attention-rounded')
      ).toBeInTheDocument();
    });
  });
  it('should render with a given label', () => {
    sut({ label: 'Empty' });
    expect(screen.getByText('Empty')).toBeInTheDocument();
  });
  it('should render with a given icon', () => {
    sut({ icon: 'add' });
    expect(screen.getByTestId('ion-icon-add')).toBeInTheDocument();
  });
});
