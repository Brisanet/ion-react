import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EmptyProps, IonEmpty } from '../../components/empty';

export default {
  title: 'Ion/Data Display/Empty',
  component: IonEmpty,
} as ComponentMeta<typeof IonEmpty>;

const Template: ComponentStory<typeof IonEmpty> = (args: EmptyProps) => (
  <IonEmpty {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Sem dados',
  icon: 'attention-rounded',
};
