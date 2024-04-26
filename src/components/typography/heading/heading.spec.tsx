import { renderWithTheme } from '@ion/components/utils/test-utils';
import { screen } from '@testing-library/react';
import { IonHeadingInterface } from '../typography.types';
import IonHeading from './heading';

const defaultProps: IonHeadingInterface = { label: 'Ion React', type: 'h1' };

const sut = (props: IonHeadingInterface = defaultProps) => {
  return renderWithTheme(<IonHeading {...props} />);
};

const headingSize: Array<IonHeadingInterface['size']> = [
  'medium',
  'normal',
  'small',
];
const headingcolorScheme: Array<IonHeadingInterface['colorScheme']> = [
  'dark-primary',
  'dark-secondary',
  'primary',
  'secondary',
];
const headingFontWeight: Array<IonHeadingInterface['weight']> = [
  'bold',
  'medium',
];
const heading: Array<IonHeadingInterface> = [
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
      expect(container).toMatchSnapshot();
    }
  );

  it.each(headingcolorScheme)(
    'should render the heading with the correct color %s',
    (colorScheme) => {
      const { container } = sut({ ...defaultProps, colorScheme });
      expect(container).toMatchSnapshot();
    }
  );

  it.each(headingFontWeight)(
    'should render the heading with the correct color %s',
    (weight) => {
      const { container } = sut({ ...defaultProps, weight });
      expect(container).toMatchSnapshot();
    }
  );
});
