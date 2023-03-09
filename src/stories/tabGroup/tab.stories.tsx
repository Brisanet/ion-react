import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconsPaths, iconType } from '../../components/icons/svgs/icons';

import IonTabGroup, {
  IonTabGroupProps,
} from '../../components/tabGroup/tabGroup';

export default {
  title: 'Ion/Navigation/TabGroup',
  component: IonTabGroup,
  argTypes: {
    align: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    borderDirection: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof IonTabGroup>;

const tabs = [];
for (let index = 1; index <= 8; index++) {
  tabs.push({
    label: 'Tab ' + index,
  });
}

const Template: ComponentStory<typeof IonTabGroup> = (
  args: IonTabGroupProps
) => <IonTabGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  tabs: tabs,
};

export const Vertical = Template.bind({});
Vertical.args = {
  tabs: tabs,
  align: 'vertical',
  borderDirection: 'left',
};

export const VerticalBorderRight = Template.bind({});
VerticalBorderRight.args = {
  tabs: tabs,
  align: 'vertical',
  borderDirection: 'right',
};

export const SelectedByDefault = Template.bind({});
SelectedByDefault.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not selected',
    },
  ],
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  tabs: tabs,
  size: 'md',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  tabs: tabs,
  size: 'lg',
};

export const WithIcons = Template.bind({});
const tabsIcons = Object.keys(iconsPaths).map((icon) => {
  return {
    label: icon,
    selected: false,
    icon: icon as iconType,
  };
});
WithIcons.args = {
  tabs: tabsIcons,
  align: 'vertical',
};
