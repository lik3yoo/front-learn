import React from "react";
interface ButtonProps {
    label: string;
    onClick?: () => {};
    loading?: boolean;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
