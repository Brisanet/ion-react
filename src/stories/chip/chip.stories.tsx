import { ComponentStory, ComponentMeta } from '@storybook/react';
import IonChip, { ChipProps } from '../../components/chip/chip';

export default {
  title: 'Ion/Navigation/Chips',
  component: IonChip,
} as ComponentMeta<typeof IonChip>;

const Template: ComponentStory<typeof IonChip> = (args: ChipProps) => (
  <IonChip {...args} />
);

export const ChipDefault = Template.bind({});
ChipDefault.args = {
  label: 'Chip default',
};

export const ChipSmall = Template.bind({});
ChipSmall.args = {
  label: 'Small',
  size: 'sm',
};

export const ChipMedium = Template.bind({});
ChipMedium.args = {
  label: 'Medium',
  size: 'md',
};

export const ChipDisabled = Template.bind({});
ChipDisabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const ChipSelected = Template.bind({});
ChipSelected.args = {
  label: 'Selected',
  selected: true,
};
