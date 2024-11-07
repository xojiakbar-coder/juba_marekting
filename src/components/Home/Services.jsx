import React from "react";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";
// import useFetch from "../../hooks/useFetch";

const Services = ({ data }) => {
  return (
    <div className="flex flex-col mt-[150px] w-full">
      <div className="w-full">
        <Title variant="title">Маркетинговые услуги в Ташкенте</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-4 xxl:grid-cols-4 gap-[20px] mt-[50px]">
          {data && data.length > 0 ? (
            data.map((item) => {
              const { id, title, short_description, href } = item;
              return (
                <DataCard
                  key={id}
                  title={title}
                  href={href}
                  text={short_description}
                />
              );
            })
          ) : (
            <p className="text-center">No services available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
