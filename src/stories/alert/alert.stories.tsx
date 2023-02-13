import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonAlert, { AlertProps } from '../../components/alert/alert';

export default {
  title: 'Ion/Feedback/Alert',
  component: IonAlert,
  argTypes: {
    handClick: { action: 'clicked' },
    type: {
      name: 'type',
      defaultValue: 'success',
      control: 'radio',
      options: ['success', 'info', 'warning', 'negative'],
    },
  },
} as ComponentMeta<typeof IonAlert>;

const Template: ComponentStory<typeof IonAlert> = (args: AlertProps) => (
  <IonAlert {...args} />
);

export const AlertDefault = Template.bind({});
AlertDefault.args = {
  message: 'Example of alert message',
  type: 'success',
  hideBackground: false,
  closable: false,
};
