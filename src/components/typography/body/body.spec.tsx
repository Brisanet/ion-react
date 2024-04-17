import { renderWithTheme } from '@ion/components/utils/test-utils';
import { screen } from '@testing-library/react';
import { IonBodyInterface } from '../typography.types';
import { IonBody } from './body';

const defaultProps: IonBodyInterface = { label: 'Ion React' };
const sut = (props: IonBodyInterface = defaultProps) => {
  return renderWithTheme(<IonBody {...props} />);
};

const bodyStyles: Array<IonBodyInterface['style']> = ['italic', 'normal'];
const bodySize: Array<IonBodyInterface['size']> = ['small', 'normal'];
const bodyWeight: Array<IonBodyInterface['weight']> = [
  'normal',
  'medium',
  'bold',
];
const bodyColor: Array<IonBodyInterface['colorScheme']> = [
  'primary',
  'secondary',
  'dark-primary',
  'dark-secondary',
];

describe('<IonBody />', () => {
  it('should render the body with the correct label', () => {
    sut();
    expect(screen.getByTestId('ion-body')).toHaveTextContent(
      defaultProps.label
    );
  });
  it.each(bodySize)(
    'should render the body with the correct size %s',
    (size) => {
      const { container } = sut({ ...defaultProps, size });
      expect(container).toMatchSnapshot();
    }
  );

  it.each(bodyWeight)(
    'should render the body with the correct weight %s',
    (weight) => {
      const { container } = sut({ ...defaultProps, weight });
      expect(container).toMatchSnapshot();
    }
  );

  it.each(bodyColor)(
    'should render the body with the correct color %s',
    (colorScheme) => {
      const { container } = sut({ ...defaultProps, colorScheme });
      expect(container).toMatchSnapshot();
    }
  );

  it.each(bodyStyles)(
    'should render the body with the correct styles %s',
    (style) => {
      const { container } = sut({ ...defaultProps, style });
      expect(container).toMatchSnapshot();
    }
  );
});
