import { IonDivider } from '../../components/divider';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Ion/Design Tokens/Dividers',
  component: IonDivider,
} as ComponentMeta<typeof IonDivider>;

const Template: ComponentStory<typeof IonDivider> = (args) => (
  <IonDivider {...args} />
);

export const DividerDefault = Template.bind({});

export const DividerWithLabel = Template.bind({});
DividerWithLabel.args = {
  label: 'Label',
};
