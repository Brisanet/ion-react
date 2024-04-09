import { IonIcon } from '../icons/icons';
import { Tag } from './styles';

import { TagStatus } from '../../core/types/status';
import ErrorBoundary from '../error/error-boundary';
import { iconType } from '../icons/svgs/icons';
import isValidLabel from '../utils/isValidLabel';
import { validateHexColor } from '../utils/validateHexColor';

export interface IonTagProps {
  label: string;
  outline?: boolean;
  status?: TagStatus;
  color?: string;
  icon?: iconType;
}

const ICON_SIZE = 12;

export const IonTag = ({
  label,
  icon,
  color,
  status,
  outline = true,
}: IonTagProps) => {
  if (!isValidLabel(label)) {
    return <ErrorBoundary msg='Label cannot be empty' />;
  }

  if (color && !validateHexColor(color)) {
    return <ErrorBoundary msg='Invalid color' />;
  }

  return (
    <Tag data-testid='ion-tag' status={status} $outline={outline} color={color}>
      {icon && <IonIcon type={icon} size={ICON_SIZE} />}
      <span>{label}</span>
    </Tag>
  );
};
