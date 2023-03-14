import React, { useCallback, useEffect, useState } from 'react';
import { BorderDirection } from '../../core/types/directions';
import { SizeType } from '../../core/types/size';
import IonTab, { TabProps } from '../tab/tab';
import { TabGroupStyles } from './styles';

type TabAlign = 'vertical' | 'horizontal';

export type TabGroupSizes = Exclude<SizeType, 'xs'>;

export interface IonTabGroupProps {
  tabs: TabProps[];
  selected?: boolean;
  align?: TabAlign;
  size?: TabGroupSizes;
  borderDirection?: BorderDirection;
}

const IonTabGroup = ({
  tabs,
  size = 'sm',
  align = 'horizontal',
  borderDirection = 'bottom',
}: IonTabGroupProps) => {
  const [activeTab, setActiveTab] = useState<number>();

  const defaultSelectedTab = () => {
    const selectedTabIndex = tabs.findIndex((tab) => tab.selected);
    if (selectedTabIndex !== null) setActiveTab(selectedTabIndex);
  };

  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  const defineBorderByAlign = () => {
    const defaultHorizontal = 'bottom';
    const defaultVertical = 'right';

    if (['top', 'bottom'].includes(borderDirection)) {
      return align === 'horizontal' ? borderDirection : defaultVertical;
    } else {
      return align === 'vertical' ? borderDirection : defaultHorizontal;
    }
  };

  useEffect(() => {
    defaultSelectedTab();
  }, []);

  return (
    <TabGroupStyles align={align} data-testid="ion-tabGroup">
      <div>
        {tabs.map((tabItem, index) => {
          return (
            <IonTab
              {...tabItem}
              key={index}
              direction={defineBorderByAlign()}
              handleClick={() => handleTabClick(index)}
              selected={activeTab === index ? true : false}
              size={size}
            />
          );
        })}
      </div>
    </TabGroupStyles>
  );
};

export default IonTabGroup;
