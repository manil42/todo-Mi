import { ButtonProps } from "../styledButton/StyledButton.type";

export const ButtonLabel: ButtonProps = {
  label: "button",
  varient: "contained",
};
export const ButtonIcon: ButtonProps = {
  icon: "person",
  varient: "contained",
  size: "small",
};

export const ButtonLabelIcon: ButtonProps = {
  label: "Person",
  icon: "person",
  varient: "contained",
};

export const DisableButtonArgs: ButtonProps = {
  label: "Person",
  icon: "person",
  varient: "contained",
  disabled: true,
};