import { SizeType } from '@ion/core/types/size';
import { AvatarContainer, AvatarPhoto } from './styled';
import { IonIcon } from '../icons';
import { useEffect, useState } from 'react';

export type AvatarType = 'initials' | 'icon' | 'photo';

export type AvatarProps = {
  type?: AvatarType;
  size?: SizeType;
  value?: string;
  image?: string;
  onErrorImg?: string;
};

const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const defaultSize = 'md';
const defaultType = 'initials';

export const IonAvatar = ({
  type = defaultType,
  size = defaultSize,
  value,
  image,
  onErrorImg,
}: AvatarProps) => {
  const [errorImage, setErrorImage] = useState<string | null>(null);

  const initials = value ? getInitials(value) : '--';

  const iconSize = {
    lg: 24,
    md: 20,
    sm: 16,
    xs: 12,
  }[size];

  useEffect(() => {
    setErrorImage(null);
  }, [image]);

  const avatarTypes = {
    initials: <span data-testid='ion-avatar-initials'>{initials}</span>,
    icon: <IonIcon type='user' color='#06439d' size={iconSize} />,
    photo: image && (
      <AvatarPhoto
        data-testid='ion-avatar-photo'
        src={errorImage || image}
        onError={() => onErrorImg && setErrorImage(onErrorImg)}
      />
    ),
  };

  return (
    <AvatarContainer data-testid='ion-avatar' $size={size}>
      {avatarTypes[type]}
    </AvatarContainer>
  );
};
