import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IonBody } from '../../components/typhography';
import { IonBodyInterface } from '../../components/typhography/typhography.types';

export default {
  title: 'Ion/Design Tokens/Typhopraphy/Body',
  component: IonBody,
} as ComponentMeta<typeof IonBody>;

const Template: ComponentStory<typeof IonBody> = (args: IonBodyInterface) => (
  <IonBody {...args} />
);

export const IonBodyDefault = Template.bind({});
IonBodyDefault.storyName = 'Body: default';
IonBodyDefault.args = {
  label: 'Ion React',
};

export const IonBodySizeSmall = Template.bind({});
IonBodySizeSmall.storyName = 'Size: small';
IonBodySizeSmall.args = {
  label: 'Ion React',
  size: 'small',
};

export const IonBodyStyleItalic = Template.bind({});
IonBodyStyleItalic.storyName = 'Style: italic';
IonBodyStyleItalic.args = {
  label: 'Ion React',
  style: 'italic',
};

export const IonBodyWeightMedium = Template.bind({});
IonBodyWeightMedium.storyName = 'Weight: medium';
IonBodyWeightMedium.args = {
  label: 'Ion React',
  weight: 'medium',
};

export const IonBodyWeightBold = Template.bind({});
IonBodyWeightBold.storyName = 'Weight: bold';
IonBodyWeightBold.args = {
  label: 'Ion React',
  weight: 'bold',
};

export const IonBodyColorSecondary = Template.bind({});
IonBodyColorSecondary.storyName = 'Color: Secondary';
IonBodyColorSecondary.args = {
  label: 'Ion React',
  colorScheme: 'secondary',
};

export const IonBodyColordarkPrimary = Template.bind({});
IonBodyColordarkPrimary.storyName = 'Color: dark-primary';
IonBodyColordarkPrimary.args = {
  label: 'Ion React',
  colorScheme: 'dark-primary',
};

export const IonBodyColordarkSecondary = Template.bind({});
IonBodyColordarkSecondary.storyName = 'Color: dark-secondary';
IonBodyColordarkSecondary.args = {
  label: 'Ion React',
  colorScheme: 'dark-secondary',
};
