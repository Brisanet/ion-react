import { IconType } from '@ion/components/icons/svgs/icons';
import { renderWithTheme } from '@ion/components/utils/test-utils';
import {
  FeedbackIcon,
  FeedbackIconProps,
  FeedbackTypes,
  ICON_BY_TYPE,
} from './feedbackIcon';

const sut = (props: FeedbackIconProps) => {
  return renderWithTheme(<FeedbackIcon {...props} />);
};

describe('FeedbackIcon', () => {
  describe.each(Object.keys(ICON_BY_TYPE) as FeedbackTypes[])(
    'Type %s',
    (type) => {
      it(`should render the feedback icon with the ${type} icon`, () => {
        const { getByTestId } = sut({ type });

        expect(
          getByTestId(`ion-icon-${ICON_BY_TYPE[type].type}`)
        ).toBeInTheDocument();
      });
    }
  );
  it('should render the feedback icon with the custom icon', () => {
    const customIcon = {
      type: 'box' as IconType,
      color: '#33b7ce',
    };
    const { getByTestId } = sut({ type: 'info', customIcon });

    expect(getByTestId(`ion-icon-${customIcon.type}`)).toBeInTheDocument();
    expect(getByTestId(`ion-icon-${customIcon.type}`)).toHaveStyle(
      `fill: ${customIcon.color}`
    );
  });
  it('should render default color if custom color is not provided', () => {
    const customIcon = {
      type: 'box' as IconType,
    };
    const { getByTestId } = sut({ type: 'info', customIcon });

    expect(getByTestId(`ion-icon-${customIcon.type}`)).toBeInTheDocument();
    expect(getByTestId(`ion-icon-${customIcon.type}`)).toHaveStyle(
      'fill: #282B33'
    );
  });
});
