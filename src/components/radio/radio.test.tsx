import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test-utils';
import { IonRadio, IonRadioProps } from './radio';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
];

const sut = (props: IonRadioProps) => {
  return renderWithTheme(<IonRadio {...props} />);
};

describe('IonRadio', () => {
  it('should render a given option selected', () => {
    const { container, getByRole } = sut({
      name: 'radio',
      options,
      value: 'option1',
      onChange: jest.fn(),
    });

    expect(getByRole('radio', { name: 'Option 1' })).toBeChecked();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container, getByRole } = sut({
      name: 'radio',
      options: [
        ...options,
        { label: 'Option 3', value: 'option3', disabled: true },
      ],
      value: 'option1',
      onChange: jest.fn(),
    });

    expect(getByRole('radio', { name: 'Option 3' })).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('should call onChange when an option is clicked', async () => {
    const onChange = jest.fn();

    const { getByLabelText } = sut({
      name: 'radio',
      options,
      value: 'option1',
      onChange,
    });

    await userEvent.click(getByLabelText('Option 2'));

    expect(onChange).toHaveBeenCalledWith('option2');
  });
});
