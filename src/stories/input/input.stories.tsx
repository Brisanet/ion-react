import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputProps, IonInput } from '../../components/input/input';

export default {
  title: 'Ion/Data Entry/Input',
  component: IonInput,
} as ComponentMeta<typeof IonInput>;

const Template: ComponentStory<typeof IonInput> = (args: InputProps) => (
  <IonInput {...args} />
);

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Digite seu nome',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Digite sua senha',
  type: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Campo desabilitado',
  disabled: true,
};
