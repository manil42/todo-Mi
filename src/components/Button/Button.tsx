import React from "react";

type ButtonProps = {
  label: string;
  isError?: boolean;
  isSuccess?: boolean;
  handleClick?: () => void;
};

const Button = ({ label, isError, isSuccess, handleClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`button-contaner 
    ${isError === true ? "button-error-color" : "false"}
    ${isSuccess === true ? "button-success-color" : "false"}
     `}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};
export default Button;
