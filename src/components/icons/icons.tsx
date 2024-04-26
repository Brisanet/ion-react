import DOMPurify from 'dompurify';

import { iconsPaths, IconType } from './svgs/icons';

export interface IonIconProps {
  type: IconType;
  size?: number;
  color?: string;
}

function pathPurify(iconType: IconType): string {
  const iconPath = iconsPaths[iconType];
  const iconPathPurify = DOMPurify.sanitize(`<svg> ${iconPath} </svg>`);
  const pathWithoutSvg = iconPathPurify.substring(5, iconPathPurify.length - 6);
  return pathWithoutSvg;
}

const defaultSize = 24;
const defaultColor = '#282B33';

export const IonIcon = ({
  type,
  color = defaultColor,
  size = defaultSize,
}: IonIconProps) => {
  const iconPath = pathPurify(type);
  return (
    <svg
      data-testid={`ion-icon-${type}`}
      viewBox='0 0 24 24'
      height={size}
      width={size}
      fill={color}
      dangerouslySetInnerHTML={{
        __html: iconPath,
      }}
    ></svg>
  );
};
