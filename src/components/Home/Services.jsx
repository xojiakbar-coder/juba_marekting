import React from "react";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";

const Services = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col mt-[150px] w-full">
      <div className="w-full">
        <Title variant="title" className="text-center">
          Маркетинговые услуги в Ташкенте
        </Title>
        {/* <div className="grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-4 xxl:grid-cols-4 gap-[20px] mt-[50px]">
          {data ? (
            data.map((item) => {
              const { id, title, text, href } = item;
              return (
                <DataCard key={id} title={title} text={text} href={href} />
              );
            })
          ) : (
            <p className="text-center">No services available</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Services;
