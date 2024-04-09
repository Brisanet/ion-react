import { useCallback, useEffect, useState } from 'react';
import { BorderDirection } from '../../core/types/directions';
import { SizeType } from '../../core/types/size';
import { IonTab, TabProps } from '../tab/tab';
import { TabGroup } from './styles';

export type TabAlign = 'vertical' | 'horizontal';

export type TabGroupSizes = Exclude<SizeType, 'xs'>;

export interface IonTabGroupProps {
  tabs: TabProps[];
  align?: TabAlign;
  size?: TabGroupSizes;
  borderDirection?: BorderDirection;
  handleSelectedTab: (tab: TabProps) => void;
}

export const IonTabGroup = ({
  tabs,
  size = 'sm',
  align = 'horizontal',
  borderDirection = 'bottom',
  handleSelectedTab,
}: IonTabGroupProps) => {
  const [activeTab, setActiveTab] = useState<number>();

  const handleTabClick = useCallback((tab: TabProps, index: number) => {
    handleSelectedTab({ ...tab, selected: true });
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
    setActiveTab(tabs.findIndex((tab) => tab.selected));
  }, []);

  return (
    <TabGroup align={align} data-testid='ion-tabGroup'>
      {tabs.map((tabItem, index) => {
        return (
          <IonTab
            {...tabItem}
            key={index}
            handleClick={() => handleTabClick(tabItem, index)}
            selected={activeTab === index}
            direction={defineBorderByAlign()}
            size={size}
          />
        );
      })}
    </TabGroup>
  );
};
