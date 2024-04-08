import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonProps, IonButton } from '../../components/button/button';

export default {
  title: 'Ion/Navigation/Button',
  component: IonButton,
  argTypes: {
    danger: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    iconOnRight: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof IonButton>;

const Template: ComponentStory<typeof IonButton> = (args: ButtonProps) => (
  <IonButton {...args} />
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Primary',
  variant: 'primary',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const ButtonGhost = Template.bind({});
ButtonGhost.args = {
  label: 'Ghost',
  variant: 'ghost',
};

export const ButtonDashed = Template.bind({});
ButtonDashed.args = {
  label: 'Dashed',
  variant: 'dashed',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  label: 'Primary',
  variant: 'primary',
  disabled: true,
};

export const PrimaryDanger = Template.bind({});
PrimaryDanger.args = {
  label: 'Primary',
  variant: 'primary',
  danger: true,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label: 'Primary',
  variant: 'primary',
  size: 'sm',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Primary',
  variant: 'primary',
  icon: 'pencil',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Primary',
  variant: 'primary',
  icon: 'pencil',
  iconOnRight: true,
};
