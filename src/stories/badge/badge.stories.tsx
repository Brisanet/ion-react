import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IonBadge, BadgeProps } from '../../components/badge/badge';

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
  label: '10',
};

export const BiggerValue = Template.bind({});
BiggerValue.args = {
  label: '100',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Neutral',
  type: 'neutral',
};

export const Negative = Template.bind({});
Negative.args = {
  label: 'Negative',
  type: 'negative',
};
