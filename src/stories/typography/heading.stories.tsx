import { ComponentMeta, ComponentStory } from '@storybook/react';
import IonHeading from '../../components/typography/heading/heading';
import { IonHeadingInterface } from '../../components/typography/typography.types';

export default {
  title: 'Ion/Design Tokens/Typography/Heading',
  component: IonHeading,
} as ComponentMeta<typeof IonHeading>;

const Template: ComponentStory<typeof IonHeading> = (
  args: IonHeadingInterface
) => <IonHeading {...args} />;

export const IonHeadingDefault = Template.bind({});
IonHeadingDefault.storyName = 'Heading: default';
IonHeadingDefault.args = {
  label: 'Ion React',
  type: 'h1',
};

export const IonHeadingH2 = Template.bind({});
IonHeadingH2.storyName = 'Heading: H2';
IonHeadingH2.args = {
  label: 'Ion React',
  type: 'h2',
};

export const IonHeadingH3 = Template.bind({});
IonHeadingH3.storyName = 'Heading: H3';
IonHeadingH3.args = {
  label: 'Ion React',
  type: 'h3',
};

export const IonHeadingH4 = Template.bind({});
IonHeadingH4.storyName = 'Heading: H4';
IonHeadingH4.args = {
  label: 'Ion React',
  type: 'h4',
};

export const IonHeadingSizeSmall = Template.bind({});
IonHeadingSizeSmall.storyName = 'size: small';
IonHeadingSizeSmall.args = {
  label: 'Ion React',
  type: 'h1',
  size: 'small',
};

export const IonHeadingSizeMedium = Template.bind({});
IonHeadingSizeMedium.storyName = 'size: medium';
IonHeadingSizeMedium.args = {
  label: 'Ion React',
  type: 'h1',
  size: 'medium',
};

export const IonHeadingSizeNormal = Template.bind({});
IonHeadingSizeNormal.storyName = 'size: normal';
IonHeadingSizeNormal.args = {
  label: 'Ion React',
  type: 'h1',
  size: 'normal',
};

export const IonHeadingColorSecondary = Template.bind({});
IonHeadingColorSecondary.storyName = 'colorScheme: secondary';
IonHeadingColorSecondary.args = {
  label: 'Ion React',
  type: 'h1',
  colorScheme: 'secondary',
};

export const IonHeadingDarkPrimary = Template.bind({});
IonHeadingDarkPrimary.storyName = 'colorScheme: dark-primary';
IonHeadingDarkPrimary.args = {
  label: 'Ion React',
  type: 'h1',
  colorScheme: 'dark-primary',
};

export const IonHeadingDarkSecondary = Template.bind({});
IonHeadingDarkSecondary.storyName = 'colorScheme: dark-secondary';
IonHeadingDarkSecondary.args = {
  label: 'Ion React',
  type: 'h1',
  colorScheme: 'dark-secondary',
};

export const IonHeadingFontWeightMedium = Template.bind({});
IonHeadingFontWeightMedium.storyName = 'font weight: medium';
IonHeadingFontWeightMedium.args = {
  label: 'Ion React',
  type: 'h1',
  weight: 'medium',
};

export const IonHeadingFontWeightbold = Template.bind({});
IonHeadingFontWeightbold.storyName = 'font weight: bold';
IonHeadingFontWeightbold.args = {
  label: 'Ion React',
  type: 'h1',
  weight: 'bold',
};
