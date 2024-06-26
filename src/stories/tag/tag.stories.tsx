import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IonTag, IonTagProps } from '../../components/tag/tag';

export default {
  title: 'Ion/Data Display/Tag',
  component: IonTag,
} as ComponentMeta<typeof IonTag>;

const Template: ComponentStory<typeof IonTag> = (args: IonTagProps) => (
  <IonTag {...args} />
);

export const tagDefault = Template.bind({});
tagDefault.storyName = 'type: default';
tagDefault.args = {
  label: 'Example Message',
};

export const TagWithoutOutline = Template.bind({});
TagWithoutOutline.storyName = 'type: without outline';
TagWithoutOutline.args = {
  label: 'Example Message',
  outline: false,
};

export const TagWithStatusSuccess = Template.bind({});
TagWithStatusSuccess.storyName = 'type: success';
TagWithStatusSuccess.args = {
  label: 'tag with status success',
  status: 'success',
};

export const TagWithStatusWarning = Template.bind({});
TagWithStatusWarning.storyName = 'type: warning';
TagWithStatusWarning.args = {
  label: 'Example Message',
  status: 'warning',
};

export const TagWithStatusInfo = Template.bind({});
TagWithStatusInfo.storyName = 'type: info';
TagWithStatusInfo.args = {
  label: 'Example Message',
  status: 'info',
};

export const TagWithStatusNegative = Template.bind({});
TagWithStatusNegative.storyName = 'type: negative';
TagWithStatusNegative.args = {
  label: 'Example Message',
  status: 'negative',
};

export const TagWithStatusNeutral = Template.bind({});
TagWithStatusNeutral.storyName = 'type: neutral';
TagWithStatusNeutral.args = {
  label: 'Example Message',
  status: 'neutral',
};

export const TagCustomColor = Template.bind({});
TagCustomColor.storyName = 'type: custom';
TagCustomColor.args = {
  label: 'Example Message',
  color: '#7f0dff',
};

export const tagWithIcon = Template.bind({});
tagWithIcon.storyName = 'type: with icon';
tagWithIcon.args = {
  label: 'Example Message',
  icon: 'check',
  status: 'success',
  outline: true,
};

export const tagError = Template.bind({});
tagError.storyName = 'type: Error';
tagError.args = {
  label: '',
  icon: 'check',
  status: 'success',
};
