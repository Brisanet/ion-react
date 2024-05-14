import { SizeType } from '@ion/core/types/size';
import { AvatarContainer, AvatarPhoto } from './styled';
import { IonIcon } from '../icons';
import { useState } from 'react';

export enum AvatarType {
  initials = 'initials',
  icon = 'icon',
  photo = 'photo',
}

export type AvatarProps = {
  type?: AvatarType;
  size?: SizeType;
  value?: string;
  image?: string;
  onErrorImg?: string;
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
const defaultType = AvatarType.initials;

export const IonAvatar = ({
  type = defaultType,
  size = defaultSize,
  value,
  image,
  onErrorImg,
}: AvatarProps) => {
  const [imgSrc, setImgSrc] = useState(image);
  const avatarTypes = {
    initials: (
      <span data-testid='ion-avatar-initials'>{getInitials(value)}</span>
    ),
    icon: <IonIcon type='user' color='#06439d' size={getIconSize(size)} />,
    photo: image && (
      <AvatarPhoto
        data-testid='ion-avatar-photo'
        src={imgSrc}
        onError={() => setImgSrc(onErrorImg)}
      />
    ),
  };

  return (
    <AvatarContainer data-testid='ion-avatar' $size={size}>
      {avatarTypes[type]}
    </AvatarContainer>
  );
};
