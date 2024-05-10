import { SizeType } from '@ion/core/types/size';
import { AvatarContainer, AvatarPhoto } from './styled';
import { IonIcon } from '../icons';

export enum AvatarType {
  initials = 'initials',
  icon = 'icon',
  photo = 'photo',
}

export type AvatarProps = {
  type: AvatarType;
  size?: SizeType;
  value?: string;
  image?: string;
  onErrorImage?: string;
};

const getIconSize = (size: SizeType): number =>
  ({
    lg: 24,
    md: 20,
    sm: 16,
    xs: 12,
  }[size]);

const getInitials = (name?: string) => {
  return name
    ? name
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '--';
};

const defaultSize = 'md';

export const IonAvatar = ({
  type,
  size = defaultSize,
  value,
  image,
  onErrorImage,
}: AvatarProps) => {
  const avatarTypes = {
    initials: <span>{getInitials(value)}</span>,
    icon: <IonIcon type='users' size={getIconSize(size)} />,
    photo: <AvatarPhoto src={image} defaultValue={onErrorImage} />,
  };

  return <AvatarContainer $size={size}>{avatarTypes[type]}</AvatarContainer>;
};
