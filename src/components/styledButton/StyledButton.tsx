import React, { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./StyledButton.type";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined icons-size  ">{children}</i>
);

const Button = ({
  iconRight,
  iconLeft,
  icon,
  label,
  ariaLabel,
  ariaDisabled,
  varient = "contained",
  disabled,

  shape,
  color,
  size = "small",
  id,
  accesskey,
  autofocus,
  form,
  formenctype,
  formnovalidate,
  formtarget,
  formaction,
  formmethod,
  name,
  type,
  value,
  style,
  className,
  onClick,
  onDoubleClick,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  ...props
}: ButtonProps) => {
  return (
    <button
      role="button"
      className={`button-component button-${varient}
       button-${shape} 
       ${
         icon && label
           ? `button-icon-label-${size}`
           : `${icon ? `buttonIcon-${size}` : `button-${size}`}`
       }  
       ${iconRight ? `button-iconRight` : `button-iconLeft`}

      button-color-${color} 
      ${disabled ? `button-disabled` : ``}
  `}
      disabled={disabled}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      aria-disabled={ariaDisabled}
      {...props}
    >
      <div
        className={`${iconRight ? `button-icon-right` : `button-icon-left`}
        icons-${size}`}
      >
        {icon && <Icon>{icon ? icon : ""}</Icon>}
      </div>
      {label && (
        <span
          className={`${
            iconRight ? `button-label-right` : `button-label-left`
          }`}
        >
          {label ? label : ""}
        </span>
      )}
    </button>
  );
};

export default Button;