import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./StyledButton";
import {
  ButtonIcon,
  ButtonLabel,
  ButtonLabelIcon,
  DisableButtonArgs,
} from "../__mock/StyledButton";
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);
export const ButtonWithLabel = Template.bind({});
ButtonWithLabel.args = {
  ...ButtonLabel,
};
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  ...ButtonIcon,
};
export const ButtonWithLabelIcon = Template.bind({});
ButtonWithLabelIcon.args = {
  ...ButtonLabelIcon,
};
export const DisableButton = Template.bind({});
DisableButton.args = {
  ...DisableButtonArgs,
};

export const ButtonEventHandle = Template.bind({});
function handleClick(event: any) {
  console.log("Button clicked!");
}
ButtonEventHandle.args = {
  label: "button",
  onClick: handleClick,
  onKeyPress(event) {
    console.log("key pressed:", event.key);
  },
  onDoubleClick: (event) => {
    console.log("double clicked!");
  },
};