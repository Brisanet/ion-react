import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IonCheckbox, CheckboxProps } from '../../components/checkbox/checkbox';

export default {
  title: 'Ion/Data Entry/Checkbox',
  component: IonCheckbox,
} as ComponentMeta<typeof IonCheckbox>;

const Template: ComponentStory<typeof IonCheckbox> = (args: CheckboxProps) => (
  <IonCheckbox {...args} />
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Primary',
};
