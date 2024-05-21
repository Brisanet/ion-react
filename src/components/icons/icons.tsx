import DOMPurify from 'dompurify';

import { iconsPaths, IconType } from './svgs/icons';
import { Icon, IconHighlight } from './styles';

export type Highlight = 'none' | 'simple' | 'double';
export interface IonIconProps {
  type: IconType;
  size?: number;
  color?: string;
  highlight?: Highlight;
}

const defaultSize = 24;
const defaultColor = '#282B33';

const defaultContainerStyle = {
  color: 'transparent',
  size: 'unset',
};

const isHex = (color: string): boolean => {
  const regex = /^#?([0-9A-Fa-f]{6})$/;
  return regex.test(color);
};

const getCircleProportion = (
  size: number
): {
  innerCircle: number;
  outsideCircle: number;
} => {
  const mdIcon = 24;
  const proportions = {
    largeIcon: {
      inner: 1.5,
      outer: 2.25,
    },
    smallIcon: {
      inner: 1.75,
      outer: 2.5,
    },
  };

  const iconSize = size >= mdIcon ? 'largeIcon' : 'smallIcon';

  return {
    innerCircle: proportions[iconSize].inner,
    outsideCircle: proportions[iconSize].outer,
  };
};

const pathPurify = (iconType: IconType): string => {
  const iconPath = iconsPaths[iconType];
  const iconPathPurify = DOMPurify.sanitize(`<svg> ${iconPath} </svg>`);
  const pathWithoutSvg = iconPathPurify.substring(5, iconPathPurify.length - 6);
  return pathWithoutSvg;
};

export const IonIcon = ({
  type,
  color = defaultColor,
  size = defaultSize,
  highlight = 'none',
}: IonIconProps) => {
  const outerStylesControl = {
    double: {
      color: `${color}1A`,
      size: `${size * getCircleProportion(size).outsideCircle}px`,
    },
    simple: {
      color: `${color}1A`,
      size: `${size * 2}px`,
    },
    none: defaultContainerStyle,
  };

  const innerStylesControl = {
    double: {
      color: `${color}40`,
      size: `${size * getCircleProportion(size).innerCircle}px`,
    },
    simple: defaultContainerStyle,
    none: defaultContainerStyle,
  };

  const iconPath = pathPurify(type);

  const iconContent = (
    <Icon
      $color={color}
      $size={size}
      data-testid={`ion-icon-${type}`}
      viewBox='0 0 24 24'
      dangerouslySetInnerHTML={{
        __html: iconPath,
      }}
    />
  );

  if (!isHex(color)) {
    return (
      <IconHighlight
        $color={defaultContainerStyle.color}
        $size={defaultContainerStyle.size}
        data-testid='ion-icon-outer-highlight'
      >
        <IconHighlight
          $color={defaultContainerStyle.color}
          $size={defaultContainerStyle.size}
          data-testid='ion-icon-inner-highlight'
        >
          {iconContent}
        </IconHighlight>
      </IconHighlight>
    );
  }

  return (
    <IconHighlight
      $color={outerStylesControl[highlight].color}
      $size={outerStylesControl[highlight].size}
      $isHighlighted={highlight !== 'none' && isHex(color)}
      data-testid='ion-icon-outer-highlight'
    >
      <IconHighlight
        $color={innerStylesControl[highlight].color}
        $size={innerStylesControl[highlight].size}
        $isHighlighted={highlight !== 'none' && isHex(color)}
        data-testid='ion-icon-inner-highlight'
      >
        {iconContent}
      </IconHighlight>
    </IconHighlight>
  );
};
