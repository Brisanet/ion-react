import DOMPurify from 'dompurify';
import { iconsPaths, iconType } from './svgs/icons';

export type SvgModule = typeof import('./svgs/icons');
export type IconPaths = keyof typeof iconsPaths;

import { styled } from '@stitches/react';

export interface IonIconProps {
  type: iconType;
  size?: number;
  color?: string;
}

function pathPurify(iconType: iconType): string {
  const iconPath = iconsPaths[iconType];
  const iconPathPurify = DOMPurify.sanitize(`<svg> ${iconPath} </svg>`);
  const pathWithoutSvg = iconPathPurify.substring(5, iconPathPurify.length - 6);
  return pathWithoutSvg;
}

const Icon = styled('svg', {
  height: `${(size: number) => `${size || 24}px`}`,
  width: `${(size: number) => `${size || 24}px`}`,
  fill: `${(color: string) => color || '#282B33'}`,
});

const IonIcon = ({ type, color, size }: IonIconProps) => {
  const iconPath = pathPurify(type);
  return (
    <Icon
      data-testid={`ion-icon-${type}`}
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
      dangerouslySetInnerHTML={{
        __html: iconPath,
      }}
    ></Icon>
  );
};

export default IonIcon;
