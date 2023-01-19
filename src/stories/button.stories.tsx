import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../lib/main";

export default {
  title: "button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  children: "button",
};
