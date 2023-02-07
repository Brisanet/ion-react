import DOMPurify from 'dompurify';
import { iconsPaths, iconType } from './svgs/icons';

export type SvgModule = typeof import('./svgs/icons');
export type IconPaths = keyof typeof iconsPaths;

export interface IonIconProps {
  type: iconType;
  size?: number;
  color?: string;
}

const iconDefault: IonIconProps = {
  type: 'access',
  color: '#282B33',
  size: 24,
};

function pathPurify(iconType: iconType): string {
  const iconPath = iconsPaths[iconType];
  const iconPathPurify = DOMPurify.sanitize(`<svg> ${iconPath} </svg>`);
  const pathWithoutSvg = iconPathPurify.substring(5, iconPathPurify.length - 6);
  return pathWithoutSvg;
}

const IonIcon = ({
  type = iconDefault.type,
  color = iconDefault.color,
  size = iconDefault.size,
}: IonIconProps) => {
  const iconPath = pathPurify(type);
  const icon = (
    <svg
      viewBox="0 0 24 24"
      height={`${size}px`}
      width={`${size}px`}
      fill={color}
      dangerouslySetInnerHTML={{
        __html: iconPath,
      }}
    />
  );

  return icon;
};

export default IonIcon;
