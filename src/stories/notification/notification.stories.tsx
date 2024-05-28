import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  IonNotification,
  IonNotificationProps,
} from '../../components/notification';

export default {
  title: 'Ion/Feedback/Notification',
  component: IonNotification,
} as ComponentMeta<typeof IonNotification>;

const Template: ComponentStory<typeof IonNotification> = (
  args: IonNotificationProps
) => <IonNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Notification Title',
  description: 'Notification Description',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: 'Notification Title',
  description: 'Notification Description',
  customIcon: {
    type: 'box',
  },
};
