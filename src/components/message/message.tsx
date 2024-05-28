import { IonIconProps } from '../icons';
import {
  FeedbackIcon,
  FeedbackTypes,
} from '../shared/FeedbackIcon/feedbackIcon';
import { Message } from './styles';

export interface IonMessageProps {
  message: string;
  type?: FeedbackTypes;
  customIcon?: Pick<IonIconProps, 'type' | 'color'>;
}

export const IonMessage = ({
  type = 'info',
  message,
  customIcon,
}: IonMessageProps) => {
  return (
    <Message>
      <FeedbackIcon type={type} customIcon={customIcon} />
      <span>{message}</span>
    </Message>
  );
};
