import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IonAlert, AlertProps } from './alert';
import { StatusType } from '../../core/types/status';

const defaultAlert: AlertProps = {
  message: 'Example message',
};

const sut = (props = defaultAlert) => render(<IonAlert {...props} />);
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
      sut({ ...defaultAlert, type });
      expect(getAlert().className).toContain(`type-${type}`);
    }
  );

  it('should not render background alert when hideBackground is true', async () => {
    await sut({ ...defaultAlert, hideBackground: true });
    expect(getAlert().className).toContain('hideBackground-true');
  });

  it('should render icon close when closable is true', async () => {
    await sut({ ...defaultAlert, closable: true });
    const iconClose = screen.getByTestId('ion-icon-close');
    expect(iconClose).toBeTruthy();
  });

  it('should remove alert when click on close icon', async () => {
    await sut({ ...defaultAlert, closable: true });
    const iconClose = screen.getByTestId('ion-icon-close');
    expect(getAlert()).toBeTruthy();

    await userEvent.click(iconClose);
    expect(screen.queryByTestId(alertId)).not.toBeTruthy();
  });
});
