import { IonIcon } from '../icons/icons';
import { Tag } from './styles';

import { TagStatus } from '../../core/types/status';
import ErrorBoundary from '../error/error-boundary';
import { IconType } from '../icons/svgs/icons';
import isValidLabel from '../utils/isValidLabel';
import { validateHexColor } from '../utils/validateHexColor';

export interface IonTagProps {
  label: string;
  outline?: boolean;
  status?: TagStatus;
  color?: string;
  icon?: IconType;
}

const ICON_SIZE = 12;

const validateProps = ({ color, label }: IonTagProps) => {
  if (!isValidLabel(label)) {
    return <ErrorBoundary message='Label cannot be empty' />;
  }
  if (color && !validateHexColor(color)) {
    return <ErrorBoundary message='Invalid color' />;
  }
  return null;
};

export const IonTag = ({
  label,
  icon,
  color,
  status,
  outline = true,
}: IonTagProps) => {
  const validation = validateProps({ color, label });

  if (validation) return validation;

  return (
    <Tag data-testid='ion-tag' status={status} $outline={outline} color={color}>
      {icon && <IonIcon type={icon} size={ICON_SIZE} />}
      <span>{label}</span>
    </Tag>
  );
};
