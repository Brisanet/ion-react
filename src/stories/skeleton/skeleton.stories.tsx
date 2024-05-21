import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IonSkeleton, IonSkeletonProps } from '../../components/skeleton';

export default {
  title: 'Ion/Feedback/Skeleton',
  component: IonSkeleton,
} as ComponentMeta<typeof IonSkeleton>;

const Template: ComponentStory<typeof IonSkeleton> = (
  args: IonSkeletonProps
) => <IonSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 200,
  height: 20,
};

export const BasedOnContainer: ComponentStory<typeof IonSkeleton> = () => (
  <div style={{ width: '200px', height: '100px' }}>
    <IonSkeleton width='100%' height='100%' />
  </div>
);

export const Circular = Template.bind({});
Circular.args = {
  width: 50,
  height: 50,
  radius: '50%',
};
