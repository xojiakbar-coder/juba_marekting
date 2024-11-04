import React from "react";
import rightIcon from "../../../assets/icons/right-arrow.svg";

const DataCard = ({ title, text, href }) => {
  return (
    <div className="flex flex-col bg-dark rounded-[20px] pb-[50px] w-full px-[20px] pt-[30px] font-body-font hover:bg-hover-card-bg transition duration-[180] ease-in">
      <div className="text-[24px] font-[700] leading-[100%] text-yellow font-body-font">
        {title}
      </div>
      <p className="my-[20px] text-light font-[400] font-body-font leading-[20px]">
        {text}
      </p>
      {href && (
        <div className="flex flex-row items-center">
          <a href={href} className="text-gray-color font-body-font">
            Подробнее
          </a>
          <img
            src={rightIcon}
            alt="right arrow icon not found"
            className="w-[23px] h-[23px] min-h-[20px] mt-[1px] mx-[8px]"
          />
        </div>
      )}
    </div>
  );
};

export default DataCard;
