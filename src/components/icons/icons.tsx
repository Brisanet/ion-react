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

const defaultSize = 24;
const defaultColor = '#282B33';

const Icon = styled('svg', {});

export const IonIcon = ({ type, color, size = defaultSize }: IonIconProps) => {
  const iconPath = pathPurify(type);
  return (
    <Icon
      data-testid={`ion-icon-${type}`}
      viewBox='0 0 24 24'
      height={size}
      width={size}
      fill={color || defaultColor}
      dangerouslySetInnerHTML={{
        __html: iconPath,
      }}
    ></Icon>
  );
};
