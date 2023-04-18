import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IonCheckbox, CheckboxProps } from '../../components/checkbox/checkbox';

export default {
  title: 'Ion/Data Entry/Checkbox',
  component: IonCheckbox,
} as ComponentMeta<typeof IonCheckbox>;

const Template: ComponentStory<typeof IonCheckbox> = (args: CheckboxProps) => (
  <IonCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  checked: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'label',
};
