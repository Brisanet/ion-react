import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test-utils';
import { DropdownProps, IonDropdown } from './dropdown';

const options = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
];

const sut = (props: DropdownProps) => {
  renderWithTheme(<IonDropdown {...props} />);
};

describe('Dropdown', () => {
  it('should render a list of items', () => {
    sut({ options });
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });
  it('should emit a click with a value', async () => {
    const onItemSelect = jest.fn();
    sut({ options, onItemSelect });
    await userEvent.click(screen.getByText(options[0].label));
    expect(onItemSelect).toHaveBeenCalledWith(options[0].value);
  });
  it('should render an empty message when there is no options', () => {
    sut({} as DropdownProps);
    expect(screen.getByText('Não há dados')).toBeInTheDocument();
  });
  it('should not emit a click when there is no onItemSelect', async () => {
    sut({ options, onItemSelect: undefined });
    await userEvent.click(screen.getByText(options[0].label));
    expect(screen.getByText(options[0].label)).toBeInTheDocument();
  });
  it('should render a loading spinner', () => {
    sut({ options: [], loading: true });
    expect(screen.getByTestId('ion-spinner')).toBeInTheDocument();
  });
  it('should render a top container', () => {
    const testId = 'top-container';
    sut({
      options,
      topContainer: <div data-testid={testId}>Top Container</div>,
    });
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
  it('should render a bottom container', () => {
    const testId = 'bottom-container';
    sut({
      options,
      bottomContainer: <div data-testid={testId}>Bottom Container</div>,
    });
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
