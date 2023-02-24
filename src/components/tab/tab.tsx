import React, { useEffect, useState } from 'react';
import { SizeType } from '../../core/types/size';
import { TabStyles } from './styles';

type StitchesTabProps = React.ComponentProps<typeof TabStyles>;

type TabSizes = Exclude<SizeType, 'xs'>;

export type TabProps = {
  label: string;
  direction?: string;
  size?: TabSizes;
  selected?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
} & StitchesTabProps;

const IonTab = ({
  label,
  size = 'sm',
  direction = 'bottom',
  selected = false,
  disabled,
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

  return (
    <>
      <TabStyles
        size={size}
        direction={direction}
        onClick={handleClick}
        selected={selectedState}
        disabled={disabled}
      >
        {label}
      </TabStyles>
    </>
  );
};

export default IonTab;
