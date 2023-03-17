import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonTab, { TabProps } from '../../components/tab/tab';

export default {
  title: 'Ion/Navigation/Tab',
  component: IonTab,
} as ComponentMeta<typeof IonTab>;

const Template: ComponentStory<typeof IonTab> = (args: TabProps) => (
  <IonTab {...args} />
);

export const TabBasic = Template.bind({});
TabBasic.args = {
  label: 'Custom label',
};
export const TabSmall = Template.bind({});
TabSmall.args = {
  label: 'Small',
  size: 'sm',
};

export const TabMedium = Template.bind({});
TabMedium.args = {
  label: 'Medium',
  size: 'md',
};

export const TabLarge = Template.bind({});
TabLarge.args = {
  label: 'Large',
  size: 'lg',
};

export const TabBottom = Template.bind({});
TabBottom.args = {
  label: 'Bottom',
  direction: 'bottom',
};

export const TabTop = Template.bind({});
TabTop.args = {
  label: 'Top',
  direction: 'top',
};

export const TabRight = Template.bind({});
TabRight.args = {
  label: 'Right',
  direction: 'right',
};

export const TabLeft = Template.bind({});
TabLeft.args = {
  label: 'Left',
  direction: 'left',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected',
  selected: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon',
  icon: 'pencil',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  label: 'Badge',
  badge: { label: 10 },
};

export const IconAndBadge = Template.bind({});
IconAndBadge.args = {
  label: 'Badge',
  icon: 'pencil',
  badge: { label: 10 },
};
