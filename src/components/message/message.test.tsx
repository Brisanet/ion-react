import { IonIconProps } from '../icons';
import { renderWithTheme } from '../utils/test-utils';
import {
  ICON_BY_TYPE,
  IonMessage,
  IonMessageProps,
  MessageTypes,
} from './message';

const message = 'This is a message';

const sut = (props: IonMessageProps) => {
  return renderWithTheme(<IonMessage {...props} />);
};

describe('IonMessage', () => {
  describe('Default', () => {
    it('should render the message with the default icon', () => {
      const { getByText, getByTestId } = sut({ message });

      expect(getByText(message)).toBeInTheDocument();
      expect(
        getByTestId(`ion-icon-${ICON_BY_TYPE.info.type}`)
      ).toBeInTheDocument();
    });
  });
  describe.each(Object.keys(ICON_BY_TYPE) as MessageTypes[])(
    'Type %s',
    (type) => {
      it(`should render the message with the ${type} icon`, () => {
        const { getByText, getByTestId } = sut({ message, type });

        expect(getByText(message)).toBeInTheDocument();
        expect(
          getByTestId(`ion-icon-${ICON_BY_TYPE[type].type}`)
        ).toBeInTheDocument();
      });
    }
  );
  describe('Custom Icon', () => {
    it('should render the message with the custom icon', () => {
      const customIcon: Pick<IonIconProps, 'type' | 'color'> = {
        type: 'box',
        color: '#000000',
      };
      const { getByText, getByTestId } = sut({ message, customIcon });

      expect(getByText(message)).toBeInTheDocument();
      expect(getByTestId(`ion-icon-${customIcon.type}`)).toBeInTheDocument();
    });
  });
});
