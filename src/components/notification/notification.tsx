import { IonButton } from '../button';
import { IonIcon, IonIconProps } from '../icons';
import { ICON_BY_TYPE, MessageTypes } from '../message';
import {
  Container,
  Description,
  Notification,
  TextContainer,
  Title,
} from './styles';

export interface IonNotificationProps {
  title: string;
  description: string;
  customIcon?: {
    type: IonIconProps['type'];
    color?: IonIconProps['color'];
  };
  type?: MessageTypes;
  onClose?: () => void;
}

export const IonNotification = ({
  title,
  description,
  type = 'info',
  customIcon,
  onClose,
}: IonNotificationProps) => {
  const { type: icon, color } = ICON_BY_TYPE[type];

  return (
    <Notification>
      <Container>
        <IonIcon
          size={24}
          type={customIcon?.type || icon}
          color={customIcon ? customIcon.color || '' : color}
        />

        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </Container>
      <IonButton
        icon='close'
        variant='ghost'
        circular
        size='sm'
        onClick={onClose}
      />
    </Notification>
  );
};
