import React, { useEffect, useState } from 'react';
import { SizeType } from '../../core/types/size';
import IonIcon from '../icons/icons';
import { iconType } from '../icons/svgs/icons';
import { TabStyles } from './styles';

type StitchesTabProps = React.ComponentProps<typeof TabStyles>;

type TabSizes = Exclude<SizeType, 'xs'>;

export type TabProps = {
  label: string;
  direction?: string;
  size?: TabSizes;
  selected?: boolean;
  disabled?: boolean;
  icon?: iconType;
  handleClick?: () => void;
} & StitchesTabProps;

const IonTab = ({
  label,
  icon,
  size = 'sm',
  direction = 'bottom',
  selected = false,
  disabled = false,
  handleClick,
}: TabProps) => {
  const [selectedState, setSelectedState] = useState<boolean>(selected);

  /**
   * If the @component IonTab is used individually outside
   * the @param handleClick function that changes the
   * 'selected' status will be defined to support individual IonTabs
   */
  if (handleClick === undefined) {
    handleClick = () => {
      setSelectedState(true);
    };
  }

  useEffect(() => {
    setSelectedState(selected);
  }, [selected]);

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <>
      <TabStyles
        size={size}
        direction={direction}
        onClick={handleClick}
        selected={selectedState}
        disabled={disabled}
      >
        <div>
          {icon && <IonIcon type={icon} size={iconSize[`${size}`]} />}
          <span>{label}</span>
        </div>
      </TabStyles>
    </>
  );
};

export default IonTab;
