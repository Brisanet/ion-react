import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonIcon, { IonIconProps } from '../components/icons/icons';

export default {
  title: 'Ion/Design Tokens/Icons',
  component: IonIcon,
} as ComponentMeta<typeof IonIcon>;

const Template: ComponentStory<typeof IonIcon> = (args: IonIconProps) => (
  <IonIcon {...args} />
);

export const IconDefault = Template.bind({});

IconDefault.args = {
  type: 'pencil',
  color: 'black',
  size: 24,
};
