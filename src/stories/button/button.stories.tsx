import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonButton, { ButtonProps } from '../../components/button/button';

export default {
  title: 'Ion/Navigation/Buttons',
  component: IonButton,
} as ComponentMeta<typeof IonButton>;

const Template: ComponentStory<typeof IonButton> = (args: ButtonProps) => (
  <IonButton {...args} />
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Primary',
  type: 'primary',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: 'Secondary',
  type: 'secondary',
};

export const ButtonGhost = Template.bind({});
ButtonGhost.args = {
  label: 'Ghost',
  type: 'ghost',
};

export const ButtonDashed = Template.bind({});
ButtonDashed.args = {
  label: 'Dashed',
  type: 'dashed',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  label: 'Primary',
  type: 'primary',
  disabled: true,
};

export const PrimaryDanger = Template.bind({});
PrimaryDanger.args = {
  label: 'Primary',
  type: 'primary',
  danger: true,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label: 'Primary',
  type: 'primary',
  size: 'sm',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Primary',
  type: 'primary',
  icon: 'pencil',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Primary',
  type: 'primary',
  icon: 'pencil',
  iconOnRight: true,
};
