import React from "react";

const Title = ({ children, variant, className = "" }) => {
  const outerStyle = `font-body-font`;

  const getTitleStyle = () => {
    switch (variant) {
      case "primary":
        return "text-yellow text-[56px] font-[900]";
      case "secondary":
        return "text-light xl:text-[56px] font-[900] md:text-[46px] sm:text-[40px] text-[38px]";
      case "title":
        return "text-[36px] font-[700] text-light text-center";
      case "section-name":
        return "text-[36px] font-[700] font-body-font text-center";
      default:
        return "text-light";
    }
  };

  return (
    <div className={`${outerStyle} ${getTitleStyle()} ${className}`}>
      {children}
    </div>
  );
};

export default Title;
