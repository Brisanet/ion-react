import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonBreadcrumb, {
  BreadcrumbProps,
} from '../../components/breadcrumb/breadcrumb';

export default {
  title: 'Ion/Navigation/Breadcrumb',
  component: IonBreadcrumb,
} as ComponentMeta<typeof IonBreadcrumb>;

const Template: ComponentStory<typeof IonBreadcrumb> = (
  args: BreadcrumbProps
) => <IonBreadcrumb {...args} />;

export const BreadcrumbComp = Template.bind({});
BreadcrumbComp.args = {
  breadcrumb: [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Recursos',
      link: '/recursos',
    },
    {
      label: 'Técnico',
      link: '/tecniico',
    },
  ],
};
