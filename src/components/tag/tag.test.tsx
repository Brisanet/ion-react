import React from 'react';
import { render, screen } from '@testing-library/react';

import IonTag, { IonTagProps } from './tag';
import { StatusType } from '../../core/types/status';

const defaultTag: IonTagProps = {
  label: 'tag label',
};

const sut = (props = defaultTag) => render(<IonTag {...props} />);
const tagId = 'ion-tag';
const getTag = () => screen.getByTestId(tagId);

const customColor = '#AADD00';

describe('IonTag', () => {
  it('should render default tag ', () => {
    sut();
    expect(getTag()).toBeTruthy();
  });

  it('should render tag with label "example tag"', async () => {
    const customLabel = 'example tag';
    await sut({ label: customLabel });
    expect(screen.findByText(customLabel)).toBeTruthy();
  });

  it.each([
    'success',
    'info',
    'warning',
    'negative',
    'neutral',
  ] as StatusType[])('should render tag with status: %s', (status) => {
    sut({ ...defaultTag, status: status });
    expect(getTag().className).toContain(`status-${status}`);
  });

  it('should not render outline in tag', async () => {
    await sut({ ...defaultTag, outline: false });
    expect(getTag().className).not.toContain('outline-false');
  });

  it('should render outline in tag', async () => {
    await sut({ ...defaultTag, outline: true });
    expect(getTag().className).toContain('outline-true');
  });

  it('should render tag with icon check', async () => {
    const iconType = 'check';
    await sut({ ...defaultTag, icon: iconType });
    const icon = screen.getByTestId(`ion-icon-${iconType}`);
    expect(icon).toBeTruthy();
  });

  it('should render ErrorBoundary component when not exist label', async () => {
    sut({ label: '' });
    const msgError = 'Label cannot be empty';
    const errorBoundary = screen.getByTestId('ion-error-boundary');
    expect(errorBoundary).toBeTruthy();
    expect(await screen.findByText(msgError)).toBeTruthy();
  });

  it('should render tag with custom color', async () => {
    await sut({ ...defaultTag, color: customColor });
    expect(getTag().className).not.toContain('status');
  });

  it('should render the tag the same as it has a custom color', async () => {
    const statusInfo = 'status-info';
    await sut({ ...defaultTag, status: 'info', color: customColor });
    expect(getTag().className).toContain(statusInfo);
  });
});
