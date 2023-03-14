import { ComponentMeta, ComponentStory } from '@storybook/react';
import IonSteps, { StepConfig } from '../../components/steps/steps';

export default {
  title: 'Ion/Navigation/Steps',
  component: IonSteps,
  argTypes: { handleClick: { action: 'clicked' } },
} as ComponentMeta<typeof IonSteps>;

const Template: ComponentStory<typeof IonSteps> = (args: StepConfig) => (
  <IonSteps {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  steps: [
    {
      label: 'Step 1',
      stepNumber: 1,
    },
    {
      label: 'Step 2',
      stepNumber: 2,
    },
    {
      label: 'Step 3',
      stepNumber: 3,
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: [
    {
      label: 'First',
      status: 'checked',
      stepNumber: 1,
    },
    {
      label: 'Second',
      stepNumber: 2,
    },
    {
      label: 'Third',
      stepNumber: 3,
    },
  ],
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  steps: [
    {
      label: 'First',
      status: 'checked',
      stepNumber: 1,
    },
    {
      label: 'Second',
      status: 'checked',
      stepNumber: 2,
    },
    {
      label: 'Third',
      stepNumber: 3,
    },
    {
      label: 'Fourty',
      stepNumber: 4,
    },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  steps: [
    {
      label: 'First',
      status: 'checked',
      stepNumber: 1,
    },
    {
      label: 'Second',
      status: 'error',
      description: 'Atenção neste passo',
      stepNumber: 2,
    },
    {
      label: 'Third',
      stepNumber: 3,
    },
    {
      label: 'Fourty',
      stepNumber: 4,
    },
  ],
};

export const Clickable = Template.bind({});
Clickable.args = {
  steps: [
    {
      label: 'First',
      status: 'checked',
      stepNumber: 1,
    },
    {
      label: 'Second',
      stepNumber: 2,
    },
    {
      label: 'Third',
      stepNumber: 3,
    },
    {
      label: 'Fourty',
      stepNumber: 4,
    },
  ],
  clickable: true,
};
