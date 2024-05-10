import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarType, IonAvatar } from '../../components/avatar';

export default {
  title: 'Ion/Data Display/Avatar',
  component: IonAvatar,
} as ComponentMeta<typeof IonAvatar>;

const Template: ComponentStory<typeof IonAvatar> = (args) => (
  <IonAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  type: AvatarType.photo,
  image: require('../assets/photo.png'),
};

export const Icon = Template.bind({});
Icon.args = {
  value: 'ana souza',
  type: AvatarType.initials,
};
