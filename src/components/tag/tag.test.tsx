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

describe('IonTag', () => {
  it('should render default tag ', async () => {
    await sut();
    const tag = await getTag();
    expect(tag).toBeTruthy();
  });

  it('sould rendet tag with label "example tag"', () => {
    const label = 'example tag';
    sut({ label: label });
    expect(screen.findByText(label)).toBeTruthy();
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
    screen.debug();
    expect(tag.className).not.toContain('outiline-false');
  });

  it('should render outline in tag', async () => {
    await sut({ ...defaultTag, outline: true });
    const tag = getTag();
    expect(tag.className).not.toContain('outiline-true');
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
});
