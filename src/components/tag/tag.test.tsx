import theme from '@ion/styles/theme';
import { screen } from '@testing-library/react';

import { StatusType } from '../../core/types/status';
import { renderWithTheme } from '../utils/test-utils';
import { getColorsByStatus } from './styles';
import { IonTag, IonTagProps } from './tag';

const defaultTag: IonTagProps = {
  label: 'tag label',
};

const sut = (props = defaultTag) => renderWithTheme(<IonTag {...props} />);
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
    sut({ label: customLabel });
    expect(await screen.findByText(customLabel)).toBeTruthy();
  });

  it.each([
    'success',
    'info',
    'warning',
    'negative',
    'neutral',
  ] as StatusType[])('should render tag with status: %s', (status) => {
    sut({ ...defaultTag, status: status });
    const { background, color } = getColorsByStatus(theme, status);
    expect(getTag()).toHaveStyleRule('background-color', background);
    expect(getTag()).toHaveStyleRule('color', color);
  });

  it('should not render outline in tag', () => {
    sut({ ...defaultTag, outline: false });
    expect(getTag()).not.toHaveStyleRule('border', '1px solid');
  });

  it('should render outline in tag', () => {
    sut({ ...defaultTag, outline: true });
    expect(getTag()).toHaveStyleRule('border', '1px solid');
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

  it('should render ErrorBoundary component when color is invalid', async () => {
    sut({ ...defaultTag, color: 'invalid-color' });
    const msgError = 'Invalid color';
    const errorBoundary = screen.getByTestId('ion-error-boundary');
    expect(errorBoundary).toBeTruthy();
    expect(await screen.findByText(msgError)).toBeTruthy();
  });

  it('should render tag with custom color', () => {
    sut({ ...defaultTag, color: customColor });
    expect(getTag()).toHaveStyleRule('background-color', `${customColor}1A`);
    expect(getTag()).toHaveStyleRule('color', customColor);
  });
});
