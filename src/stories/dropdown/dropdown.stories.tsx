import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { IonButton } from '../../components/button';
import { IonDropdown } from '../../components/dropdown';

export default {
  title: 'Ion/Navigation/Dropdown',
  component: IonDropdown,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof IonDropdown>;

const Template: ComponentStory<typeof IonDropdown> = (args) => {
  const [options, setOptions] = useState(args.options);

  const handleSelect = (value: string) => {
    setOptions(
      options.map((option) => ({
        ...option,
        selected: option.value === value,
      }))
    );
    args.onItemSelect && args.onItemSelect(value);
  };

  return (
    <IonDropdown
      {...args}
      options={options}
      onItemSelect={(value) => handleSelect(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2', disabled: true },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4', selected: true },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  options: [
    { label: 'Item 1', value: '1', icon: 'home' },
    { label: 'Item 2', value: '2', icon: 'star' },
    { label: 'Item 3', value: '3', icon: 'telephone' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  options: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  options: [],
};

export const WithElements = Template.bind({});
WithElements.args = {
  options: [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
  ],
  topContainer: <span style={{ padding: '10px 8px' }}>Escolha uma opção:</span>,
  bottomContainer: (
    <IonButton
      variant='secondary'
      size='sm'
      label='Limpar'
      icon='trash'
      iconOnRight
    />
  ),
};

const MultipleTemplate: ComponentStory<typeof IonDropdown> = (args) => {
  const [options, setOptions] = useState(args.options);

  const handleSelect = (value: string) => {
    setOptions((options) =>
      options.map((option) => ({
        ...option,
        selected: option.value === value ? !option.selected : option.selected,
      }))
    );
    args.onItemSelect && args.onItemSelect(value);
  };

  return (
    <IonDropdown
      options={options}
      onItemSelect={(value) => handleSelect(value)}
    />
  );
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {
  options: [
    { label: 'Item 1', value: '1', selected: true },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
  ],
};
