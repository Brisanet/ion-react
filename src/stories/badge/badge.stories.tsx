import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BadgeProps, IonBadge } from '../../components/badge/badge';

export default {
  title: 'Ion/Data display/Badges',
  component: IonBadge,
} as ComponentMeta<typeof IonBadge>;

const Template: ComponentStory<typeof IonBadge> = (args: BadgeProps) => (
  <IonBadge {...args} />
);

export const StringLabel = Template.bind({});
StringLabel.args = {
  label: 'Label',
};

export const NumberLabel = Template.bind({});
NumberLabel.args = {
  label: 10,
};

export const BiggerValue = Template.bind({});
BiggerValue.args = {
  label: 100,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Badge',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Badge',
  type: 'secondary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Badge',
  type: 'neutral',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Badge',
  type: 'danger',
};
