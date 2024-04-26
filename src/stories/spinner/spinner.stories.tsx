import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IonSpinner, IonSpinnerProps } from '../../components/spinner/spinner';

export default {
  title: 'Ion/Feedback/Spinner',
  component: IonSpinner,
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 32,
    },
    customColor: {
      control: { type: 'color' },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof IonSpinner>;

const Template: ComponentStory<typeof IonSpinner> = (args: IonSpinnerProps) => (
  <IonSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
