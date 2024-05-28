import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { IonRadio, IonRadioProps } from '../../components/radio';

export default {
  title: 'Ion/Data Entry/Radio',
  component: IonRadio,
} as ComponentMeta<typeof IonRadio>;

const Template: ComponentStory<typeof IonRadio> = (args: IonRadioProps) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (value: string) => {
    setValue(value);
    args.onChange && args.onChange(value);
  };

  return <IonRadio {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'radio',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ],
};
