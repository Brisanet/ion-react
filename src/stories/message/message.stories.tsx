import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IonMessage, IonMessageProps } from '../../components/message';

export default {
  title: 'Ion/Feedback/Message',
  component: IonMessage,
} as ComponentMeta<typeof IonMessage>;

const Template: ComponentStory<typeof IonMessage> = (args: IonMessageProps) => (
  <IonMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'This is a message',
  type: 'success',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  message: 'This is a message',
  customIcon: {
    type: 'box',
  },
};
