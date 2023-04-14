import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IonChip, ChipProps } from '../../components/chip/chip';

export default {
  title: 'Ion/Navigation/Chips',
  component: IonChip,
  argTypes: { handleClick: { action: 'clicked' } },
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

export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  label: 'Selected',
  icon: 'pencil',
};

export const ChipSelectedWithIcon = Template.bind({});
ChipSelectedWithIcon.args = {
  label: 'Selected With Icon',
  icon: 'pencil',
  selected: true,
};

export const ChipDisabledWithIcon = Template.bind({});
ChipDisabledWithIcon.args = {
  label: 'Disabled',
  icon: 'pencil',
  disabled: true,
};
