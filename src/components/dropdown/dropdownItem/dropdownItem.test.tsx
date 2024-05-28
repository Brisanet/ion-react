import { renderWithTheme } from '@ion/components/utils/test-utils';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DropdownItemProps, IonDropdownItem } from './dropdownItem';

const sut = (props: DropdownItemProps) => {
  renderWithTheme(<IonDropdownItem {...props} />);
};

describe('DropdownItem', () => {
  describe('Default', () => {
    it('should render a label', () => {
      const label = 'Item';
      sut({ label });
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    it('should render an icon', () => {
      const icon = 'access';
      sut({ label: 'Item', icon });
      expect(screen.getByTestId('ion-icon-access')).toBeInTheDocument();
    });
    it('should emit a click', async () => {
      const onClick = jest.fn();
      sut({ label: 'Item', onClick });
      await userEvent.click(screen.getByText('Item'));
      expect(onClick).toHaveBeenCalled();
    });
  });
  describe('Selected', () => {
    it('should render a selected item', () => {
      sut({ label: 'Item', selected: true });
      expect(screen.getByTestId('ion-icon-check')).toBeInTheDocument();
    });
    it('should show a close icon when hovering', async () => {
      sut({ label: 'Item', selected: true });
      expect(screen.getByTestId('ion-icon-check')).toBeInTheDocument();
      await userEvent.hover(screen.getByText('Item'));
      expect(screen.getByTestId('ion-icon-close')).toBeInTheDocument();
    });
    it('should reset to check icon when unhovering', async () => {
      sut({ label: 'Item', selected: true });
      expect(screen.getByTestId('ion-icon-check')).toBeInTheDocument();
      await userEvent.hover(screen.getByText('Item'));
      expect(screen.getByTestId('ion-icon-close')).toBeInTheDocument();
      await userEvent.unhover(screen.getByText('Item'));
      expect(screen.getByTestId('ion-icon-check')).toBeInTheDocument();
    });
  });
  describe('Disabled', () => {
    it('should not emit a click', async () => {
      const onClick = jest.fn();
      sut({ label: 'Item', disabled: true, onClick });
      await userEvent.click(screen.getByText('Item'));
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should render check icon when selected', () => {
      sut({ label: 'Item', selected: true, disabled: true });
      expect(screen.getByTestId('ion-icon-check')).toBeInTheDocument();
    });
    it('should not render close icon when hovering', async () => {
      sut({ label: 'Item', selected: true, disabled: true });
      await userEvent.hover(screen.getByText('Item'));
      expect(screen.queryByTestId('ion-icon-close')).not.toBeInTheDocument();
    });
  });
});
