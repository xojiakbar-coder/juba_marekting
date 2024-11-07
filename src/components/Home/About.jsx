import React from "react";
import OurResault from "./Resault";
import Title from "../Generic/Title/Title";
import aboutUS from "../../assets/images/home/about-us.svg";

const About = ({ data }) => {
  const dataOfAbout = data.soloMain?.[0];
  const ourResault = data.ourResault;

  return (
    <div className="mt-[150px] w-full bg-light py-[100px] px-[5%] h-max">
      <div className="flex flex-col justify-center items-center w-full h-max">
        <Title variant="section-name">
          JUBA - маркетинговое агентство в Ташкенте
        </Title>
        <div className="grid grid-cols-2 gap-[50px] mt-[50px]">
          <div className="w-full">
            <img
              src={dataOfAbout.photo ? dataOfAbout.photo : aboutUS}
              alt="about icon not found"
              className="w-full rounded-lg h-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between py-[2px] h-full w-full">
            <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
              {dataOfAbout?.description}
            </p>
          </div>
        </div>
        <div className="w-full mt-[100px] h-max">
          <OurResault data={ourResault} />
        </div>
      </div>
    </div>
  );
};

export default About;
