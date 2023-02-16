import React from 'react';
import { render, screen } from '@testing-library/react';
import { IonHeading, IonHeadingProps } from './heading';

const defaultProps: IonHeadingProps = { label: 'Ion React', type: 'h1' };

const sut = (props: IonHeadingProps = defaultProps) => {
  return render(<IonHeading {...props} />);
};

const headingTypes: Array<IonHeadingProps['type']> = ['h1', 'h2', 'h3', 'h4'];
const headingSize: Array<IonHeadingProps['size']> = [
  'medium',
  'normal',
  'small',
];
const headingcolorScheme: Array<IonHeadingProps['colorScheme']> = [
  'dark-primary',
  'dark-secondary',
  'primary',
  'secondary',
];
const headingFontWeight: Array<IonHeadingProps['weight']> = ['bold', 'medium'];
const heading: Array<IonHeadingProps> = [
  { label: 'ion react', type: 'h1' },
  { label: 'ion react', type: 'h2' },
  { label: 'ion react', type: 'h3' },
  { label: 'ion react', type: 'h4' },
];

describe('<IonHeading />', () => {
  it.each(heading)(
    'should render the heading with the correct label $type',
    (heading) => {
      sut(heading);
      expect(
        screen.getByRole('heading', { name: heading.label })
      ).toBeInTheDocument();
    }
  );

  it.each(headingSize)(
    'should render the heading with the correct size %s',
    (size) => {
      const { container } = sut({ ...defaultProps, size });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`size-${size}`);
    }
  );

  it.each(headingcolorScheme)(
    'should render the heading with the correct color %s',
    (colorScheme) => {
      const { container } = sut({ ...defaultProps, colorScheme });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`color-${colorScheme}`);
    }
  );

  it.each(headingFontWeight)(
    'should render the heading with the correct color %s',
    (weight) => {
      const { container } = sut({ ...defaultProps, weight });
      const element = container.firstChild as Element;
      expect(element.className).toContain(`weight-${weight}`);
    }
  );

  describe('snapshot tests', () => {
    it.each(headingTypes)('should render snapshot heading %s', (type) => {
      const { container } = sut({ ...defaultProps, type });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
