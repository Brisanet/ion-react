import React from 'react';
import { render, screen } from '@testing-library/react';
import { IonHeading, IonHeadingProps } from './heading';

const defaultProps: IonHeadingProps = { label: 'Ion React', type: 'h1' };

const sut = (props: IonHeadingProps = defaultProps) => {
  return render(<IonHeading {...props} />);
};

describe('<IonHeading />', () => {
  it('should render the heading with the correct label', () => {
    sut();
    expect(
      screen.getByRole('heading', { name: defaultProps.label })
    ).toBeInTheDocument();
  });

  it('should render the heading with the correct size', () => {
    sut();
    expect(screen.getByTestId('ion-heading-h1')).toHaveStyle({
      'font-size': '2em',
    });
    sut({ ...defaultProps, type: 'h2' });
    expect(screen.getByTestId('ion-heading-h2')).toHaveStyle({
      'font-size': '1.5em',
    });
  });

  it('should render the heading with the correct color', () => {
    sut();
    expect(screen.getByTestId('ion-heading-h1')).toHaveStyle({
      color: '$neutral8',
    });
    sut({ ...defaultProps, type: 'h2', colorScheme: 'secondary' });
    expect(screen.getByTestId('ion-heading-h1')).toHaveStyle({
      color: '$neutral7',
    });
  });

  it('should render the heading with the correct weight', () => {
    sut();
    expect(screen.getByTestId('ion-heading-h1')).toHaveStyle({
      'font-weight': 'bold',
    });
  });

  describe('snapshot tests', () => {
    it('should render snapshot headings', () => {
      sut({ ...defaultProps, type: 'h1' });
      expect(screen.getByTestId('ion-heading-h1')).toMatchSnapshot();
      sut({ ...defaultProps, type: 'h2' });
      expect(screen.getByTestId('ion-heading-h2')).toMatchSnapshot();
      sut({ ...defaultProps, type: 'h3' });
      expect(screen.getByTestId('ion-heading-h3')).toMatchSnapshot();
      sut({ ...defaultProps, type: 'h4' });
      expect(screen.getByTestId('ion-heading-h4')).toMatchSnapshot();
    });
  });
});
