import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BadgeProps, IonBadge } from '../../components/badge/badge';

export default {
  title: 'Ion/Data display/Badges/Dot',
  component: IonBadge,
  parameters: {
    controls: { exclude: ['type', 'dot'] },
  },
} as ComponentMeta<typeof IonBadge>;

const Template: ComponentStory<typeof IonBadge> = (args: BadgeProps) => (
  <IonBadge dot={true} {...args} />
);

export const Dot = Template.bind({});
Dot.args = {
  label: 'Badge',
};

export const DotWithIcon = Template.bind({});
DotWithIcon.args = {
  label: 'Badge',
  status: 'negative',
  icon: 'close',
  size: 'md',
};

export const DotWithCustomColor = Template.bind({});
DotWithCustomColor.args = {
  label: 'Badge',
  customColor: '#4d0cb4',
};
