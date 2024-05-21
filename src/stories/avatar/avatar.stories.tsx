import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IonAvatar } from '../../components/avatar';

export default {
  title: 'Ion/Data Display/Avatar',
  component: IonAvatar,
} as ComponentMeta<typeof IonAvatar>;

const Template: ComponentStory<typeof IonAvatar> = (args) => (
  <IonAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'taylor swift',
  size: 'lg',
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'icon',
};

export const Photo = Template.bind({});
Photo.args = {
  type: 'photo',
  value: 'ana souza',
  image:
    'https://64.media.tumblr.com/40e2174ab5e68b1eabbc3dfc78607cef/c1effc67d5c3a1fd-20/s540x810/9d6ce72fcddf97841e7410a0652dd9d5f018b35d.pnj',
};
