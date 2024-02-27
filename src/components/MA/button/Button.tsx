import React from "react"

type ButtonProps={
    label:string
    isError?: boolean
    handleClick?: () => void
}

const Button=({label, isError, handleClick}:ButtonProps) =>{

return(
    <>
    <button className={`button-contaner 
    ${isError === true?'button-error-color':'false'} `}
    onClick={handleClick}
    >
        {label}</button>
    </>
)
}
export default Button