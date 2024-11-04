import React from "react";

const Button = ({
  children,
  variant,
  type = "button",
  className = "",
  hover = false,
  ...args
}) => {
  const outerStyle = `min-h-[60px] h-[60px] rounded-[15px] font-[700] px-[33px] py-[19px] cursor-pointer ${
    hover && "hover:bg-hover-card-bg transition duration-[180] ease-in"
  }`;

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-yellow text-dark-text";
      case "outline":
        return "border-[1px] border-yellow text-yellow bg-transparent";
      case "secondary":
        return "bg-light text-dark-text";
      default:
        return "border-[1px] border-yellow text-yellow bg-transparent";
    }
  };

  return (
    <button
      className={`${outerStyle} ${getButtonStyle()} ${className}`}
      type={type}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
