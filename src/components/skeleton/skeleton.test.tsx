import { renderWithTheme } from '../utils/test-utils';
import { IonSkeleton, IonSkeletonProps } from './skeleton';

const sut = (props?: IonSkeletonProps) => {
  return renderWithTheme(<IonSkeleton {...props} />);
};

describe('IonSkeleton', () => {
  it('should render default skeleton', () => {
    const { container } = sut();
    expect(container.firstChild).toHaveStyle({
      width: '100px',
      height: '100px',
      borderRadius: '0px',
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render skeleton with correct unit when width and height are numbers', () => {
    const sizes = { width: 200, height: 200, radius: 50 };
    const { container } = sut({ ...sizes });
    expect(container.firstChild).toHaveStyle({
      width: `${sizes.width}px`,
      height: `${sizes.height}px`,
      borderRadius: `${sizes.radius}px`,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render skeleton with correct unit when width and height are strings', () => {
    const sizes = { width: '20rem', height: '200px', radius: '50%' };
    const { container } = sut({ ...sizes });
    expect(container.firstChild).toHaveStyle({
      width: sizes.width,
      height: sizes.height,
      borderRadius: sizes.radius,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
