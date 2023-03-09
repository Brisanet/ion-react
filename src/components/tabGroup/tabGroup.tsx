import React, { useEffect, useState } from 'react';
import { BorderDirection } from '../../core/types/directions';
import { SizeType } from '../../core/types/size';
import IonTab, { TabProps } from '../tab/tab';
import { TabGroupStyles } from './styles';

type TabAlign = 'vertical' | 'horizontal';

type TabGroupSizes = Exclude<SizeType, 'xs'>;

export interface IonTabGroupProps {
  tabs: TabProps[];
  selected?: boolean;
  align?: TabAlign;
  size?: TabGroupSizes;
  borderDirection?: BorderDirection;
}

const IonTabGroup = ({
  tabs,
  align = 'horizontal',
  borderDirection = 'bottom',
  size = 'sm',
}: IonTabGroupProps) => {
  const [activeTab, setActiveTab] = useState<number>();

  const haveDefaultSelected = () => {
    const selectedTabIndex = tabs.findIndex((tab) => tab.selected);
    if (selectedTabIndex || selectedTabIndex === 0)
      setActiveTab(selectedTabIndex);
  };

  const handleTabClick = (index: number): void => {
    setActiveTab(index);
  };

  useEffect(() => {
    haveDefaultSelected();
  }, []);

  return (
    <TabGroupStyles align={align} data-testid="ion-tabGroup">
      <div>
        {tabs.map((tabItem, index) => {
          return (
            <IonTab
              {...tabItem}
              key={index}
              direction={borderDirection}
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
