import DOMPurify from 'dompurify';

import { iconsPaths, IconType } from './svgs/icons';
import { Icon, IconHighlight } from './styles';
import { validateHexColor } from '../utils/validateHexColor';

export type Highlight = 'none' | 'simple' | 'double';
export interface IonIconProps {
  type: IconType;
  size?: number;
  color?: string;
  highlight?: Highlight;
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
  highlight = 'none',
}: IonIconProps) => {
  const defaultContainerStyle = {
    color: 'transparent',
    size: 'unset',
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

  const outerContainerStyle = (): { color: string; size: string } => {
    if (!validateHexColor(color)) {
      return defaultContainerStyle;
    }

    const stylesControl = {
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

    return stylesControl[highlight];
  };

  const innerContainerStyle = (): { color: string; size: string } => {
    if (!validateHexColor(color)) {
      return defaultContainerStyle;
    }

    const stylesControl = {
      double: {
        color: `${color}40`,
        size: `${size * getCircleProportion(size).innerCircle}px`,
      },
      simple: defaultContainerStyle,
      none: defaultContainerStyle,
    };

    return stylesControl[highlight];
  };

  const iconPath = pathPurify(type);

  return (
    <IconHighlight
      $color={outerContainerStyle().color}
      $size={outerContainerStyle().size}
      $isHighlighted={highlight !== 'none' && validateHexColor(color)}
      data-testid={'ion-icon-outer-highlight'}
    >
      <IconHighlight
        $color={innerContainerStyle().color}
        $size={innerContainerStyle().size}
        $isHighlighted={highlight !== 'none' && validateHexColor(color)}
        data-testid={'ion-icon-inner-highlight'}
      >
        <Icon
          $color={color}
          $size={size}
          data-testid={`ion-icon-${type}`}
          viewBox='0 0 24 24'
          dangerouslySetInnerHTML={{
            __html: iconPath,
          }}
        ></Icon>
      </IconHighlight>
    </IconHighlight>
  );
};
