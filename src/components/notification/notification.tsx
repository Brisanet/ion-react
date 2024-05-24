import { IonButton } from '../button';
import { IonIconProps } from '../icons';
import {
  FeedbackIcon,
  FeedbackTypes,
} from '../shared/FeedbackIcon/feedbackIcon';
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
  customIcon?: Pick<IonIconProps, 'type' | 'color'>;
  type?: FeedbackTypes;
  onClose?: () => void;
}

export const IonNotification = ({
  title,
  description,
  type = 'info',
  customIcon,
  onClose,
}: IonNotificationProps) => {
  return (
    <Notification>
      <Container>
        <FeedbackIcon type={type} customIcon={customIcon} />
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
