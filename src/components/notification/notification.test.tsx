import { IconType } from '../icons/svgs/icons';
import {
  FeedbackTypes,
  ICON_BY_TYPE,
} from '../shared/FeedbackIcon/feedbackIcon';
import { renderWithTheme } from '../utils/test-utils';
import { IonNotification, IonNotificationProps } from './notification';

const title = 'Notification title';
const description = 'Notification description';

const sut = (props: IonNotificationProps) => {
  return renderWithTheme(<IonNotification {...props} />);
};

describe('IonNotification', () => {
  describe('Default', () => {
    it('should render the notification with the default icon', () => {
      const { getByText, getByTestId } = sut({ title, description });

      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
      expect(getByTestId('ion-icon-info-solid')).toBeInTheDocument();
    });
    it('should render a close button', () => {
      const { getByTestId } = sut({ title, description });

      expect(getByTestId('ion-button')).toBeInTheDocument();
      expect(getByTestId('ion-icon-close')).toBeInTheDocument();
    });
    it('should call onClose when the close button is clicked', () => {
      const onClose = jest.fn();
      const { getByTestId } = sut({ title, description, onClose });

      getByTestId('ion-button').click();

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
  describe.each(Object.keys(ICON_BY_TYPE) as FeedbackTypes[])(
    'Type %s',
    (type) => {
      it(`should render the notification with the ${type} icon`, () => {
        const { getByText, getByTestId } = sut({ title, description, type });

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(description)).toBeInTheDocument();
        expect(
          getByTestId(`ion-icon-${ICON_BY_TYPE[type].type}`)
        ).toBeInTheDocument();
      });
    }
  );
  describe('Custom Icon', () => {
    it('should render the notification with the custom icon', () => {
      const customIcon = {
        type: 'box' as IconType,
        color: '#070ac9',
      };
      const { getByText, getByTestId } = sut({
        title,
        description,
        customIcon,
      });

      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
      expect(getByTestId(`ion-icon-${customIcon.type}`)).toBeInTheDocument();
      expect(getByTestId(`ion-icon-${customIcon.type}`)).toHaveStyle(
        `fill: ${customIcon.color}`
      );
    });
  });
});
