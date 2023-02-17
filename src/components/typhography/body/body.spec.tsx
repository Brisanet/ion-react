import React from 'react';
import { render, screen } from '@testing-library/react';
import { IonBody } from './body';
import { IonBodyInterface } from '../typhography.types';

const defaultProps: IonBodyInterface = { label: 'Ion React' };
const sut = (props: IonBodyInterface = defaultProps) => {
  return render(<IonBody {...props} />);
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

function getClassElement(container: HTMLElement): string {
  return (container.firstChild as Element).className;
}

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
      expect(getClassElement(container)).toContain(`size-${size}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyWeight)(
    'should render the body with the correct weight %s',
    (weight) => {
      const { container } = sut({ ...defaultProps, weight });
      expect(getClassElement(container)).toContain(`weight-${weight}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyColor)(
    'should render the body with the correct color %s',
    (colorScheme) => {
      const { container } = sut({ ...defaultProps, colorScheme });
      expect(getClassElement(container)).toContain(`color-${colorScheme}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(bodyStyles)(
    'should render the body with the correct styles %s',
    (style) => {
      const { container } = sut({ ...defaultProps, style });
      expect(getClassElement(container)).toContain(`style-${style}`);
      expect(container.firstChild).toMatchSnapshot();
    }
  );
});
