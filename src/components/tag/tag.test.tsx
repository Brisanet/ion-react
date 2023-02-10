import React from 'react';
import { render, screen } from '@testing-library/react';

import IonTag from './tag';
import { IonTagProps } from '../../core/types/tag';
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
    const tag = getTag();
    expect(tag).toBeTruthy();
  });

  it('should render tag with label "example tag"', () => {
    const customLabel = 'example tag';
    sut({ label: customLabel });
    expect(screen.findByText(customLabel)).toBeTruthy();
  });

  it.each(['success', 'info', 'warning', 'negative', 'neutral'])(
    'should render tag with status: %s',
    (status: any) => {
      sut({ ...defaultTag, status: status });
      const tag = getTag();
      expect(tag.className).toContain(`status-${status}`);
    }
  );

  it('should not render outline in tag', async () => {
    await sut({ ...defaultTag, outline: false });
    const tag = getTag();
    expect(tag.className).not.toContain('outline-false');
  });

  it('should render outline in tag', async () => {
    await sut({ ...defaultTag, outline: true });
    const tag = getTag();
    expect(tag.className).toContain('outline-true');
  });

  it('should render tag with icon check', async () => {
    const iconType = 'check';
    await sut({ ...defaultTag, icon: iconType });
    const icon = screen.getByTestId(`ion-icon-${iconType}`);
    expect(icon).toBeTruthy();
  });

  it('should render ErrorBoundary component when not exist label', () => {
    sut({ label: '' });
    // eslint-disable-next-line quotes
    const msgError = "Error: Label can't be empty";
    const errorBoundary = screen.getByTestId('ion-error-boundary');
    expect(errorBoundary).toBeTruthy();
    expect(screen.findAllByText(msgError)).toBeTruthy();
  });

  it('should render tag whit color custom', () => {
    sut({ ...defaultTag, color: customColor });
    const tag = getTag();
    expect(tag.className).not.toContain('status');
  });

  it('should render the tag the same as it has a custom color', () => {
    const statusInfo = 'status-info';
    sut({ ...defaultTag, status: 'info', color: customColor });
    const tag = getTag();
    expect(tag.className).toContain(statusInfo);
  });
});
