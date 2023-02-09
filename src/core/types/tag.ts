import { iconType } from '../../components/icons/svgs/icons';
import { TagStatus } from './status';

export interface IonTagProps {
  outline?: boolean;
  status?: TagStatus;
  color?: string;
  label: string;
  icon?: iconType;
}
