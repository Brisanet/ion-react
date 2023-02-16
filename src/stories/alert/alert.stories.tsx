import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IonAlert, AlertProps } from '../../components/alert/alert';

export default {
  title: 'Ion/Feedback/Alert',
  component: IonAlert,
} as ComponentMeta<typeof IonAlert>;

const Template: ComponentStory<typeof IonAlert> = (args: AlertProps) => (
  <IonAlert {...args} />
);

export const AlertDefault = Template.bind({});
AlertDefault.storyName = 'Alert message';
AlertDefault.args = {
  message: 'Example of alert message',
};

export const AlertSuccess = Template.bind({});
AlertSuccess.storyName = 'Alert success';
AlertSuccess.args = {
  message: 'Example of alert message',
  type: 'success',
};

export const AlertWarning = Template.bind({});
AlertWarning.storyName = 'Alert warning';
AlertWarning.args = {
  message: 'Example of alert message',
  type: 'warning',
};

export const AlertInfo = Template.bind({});
AlertInfo.storyName = 'Alert info';
AlertInfo.args = {
  message: 'Example of alert message',
  type: 'info',
};

export const AlertNegative = Template.bind({});
AlertNegative.storyName = 'Alert negative';
AlertNegative.args = {
  message: 'Example of alert message',
  type: 'negative',
};

export const AlertClosable = Template.bind({});
AlertClosable.storyName = 'Alert closable';
AlertClosable.args = {
  message: 'Example of alert message',
  closable: true,
};

export const AlertWithBackground = Template.bind({});
AlertWithBackground.storyName = 'Alert with background';
AlertWithBackground.args = {
  message: 'Example of alert message',
  hideBackground: true,
};
