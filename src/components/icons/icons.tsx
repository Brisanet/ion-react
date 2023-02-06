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

const IonIcon = ({
  type = iconDefault.type,
  color = iconDefault.color,
  size = iconDefault.size,
}: IonIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      data-testid={`ion-icon-${type}`}
      dangerouslySetInnerHTML={{ __html: iconsPaths[type] }}
    ></svg>
  );
};

export default IonIcon;
