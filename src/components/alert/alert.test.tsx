import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StatusType } from '../../core/types/status';
import { renderWithTheme } from '../utils/test-utils';
import { AlertProps, IonAlert } from './alert';

const defaultAlert: AlertProps = {
  message: 'Example message',
};

const sut = (props = defaultAlert) => renderWithTheme(<IonAlert {...props} />);
const alertId = 'ion-alert';
const getAlert = () => screen.getByTestId(alertId);

describe('IonAlert', () => {
  it('should render alert', () => {
    sut();
    expect(getAlert()).toBeTruthy();
  });

  it('should render alert with label "Message alert"', async () => {
    const customLabel = 'Message alert';
    sut({ message: customLabel });
    expect(await screen.findAllByText(customLabel)).toBeTruthy();
  });

  it('should render ErrorBoundary component when not exist message', async () => {
    sut({ message: '' });
    const msgError = 'Message cannot be empty';
    const errorBoundary = screen.getByTestId('ion-error-boundary');
    expect(errorBoundary).toBeTruthy();
    expect(await screen.findByText(msgError)).toBeTruthy();
  });

  it.each(['success', 'info', 'warning', 'negative'] as StatusType[])(
    'should render alert with type: %s',
    (type) => {
      const { container } = sut({ ...defaultAlert, type });
      expect(container).toMatchSnapshot();
    }
  );

  it('should not render background alert when hideBackground is true', async () => {
    await sut({ ...defaultAlert, hideBackground: true });
    expect(getAlert()).not.toHaveStyleRule(
      'background-color',
      expect.any(String)
    );
  });

  it('should render icon close when closable is true', async () => {
    await sut({ ...defaultAlert, closable: true });
    const iconClose = screen.getByTestId('ion-icon-close');
    expect(iconClose).toBeTruthy();
  });

  it('should emit onClose function when click on close icon', async () => {
    const onClose = jest.fn();
    await sut({ ...defaultAlert, closable: true, onClose });

    await userEvent.click(screen.getByTestId('ion-icon-close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
