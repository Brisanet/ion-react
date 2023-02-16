import React from 'react';
import { render, screen } from '@testing-library/react';
import { IonBody, IonBodyProps } from './body';

const defaultProps: IonBodyProps = { label: 'Ion React' };
const sut = (props: IonBodyProps = defaultProps) => {
  return render(<IonBody {...props} />);
};

const bodyStyles: Array<IonBodyProps['style']> = ['italic', 'normal'];
const bodySize: Array<IonBodyProps['size']> = ['small', 'normal'];
const bodyWeight: Array<IonBodyProps['weight']> = ['normal', 'medium', 'bold'];
const bodyColor: Array<IonBodyProps['color']> = [
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
      const element = container.firstChild as Element;
      expect(element.className).toContain(`size-${size}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyWeight)(
    'should render the body with the correct weight %s',
    (weight) => {
      const { container } = sut({ ...defaultProps, weight });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`weight-${weight}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyColor)(
    'should render the body with the correct color %s',
    (color) => {
      const { container } = sut({ ...defaultProps, color });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`color-${color}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyStyles)(
    'should render the body with the correct styles %s',
    (style) => {
      const { container } = sut({ ...defaultProps, style });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`style-${style}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );
});
