import React from "react";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";

const OurResault = ({ data }) => {
  return (
    <div className="w-full">
      <Title variant="section-name" className="text-center">
        Наши результаты в цифрах
      </Title>
      <div className="grid grid-cols-3 grid-rows-[260px_260px_260px] w-full justify-between gap-[30px] mt-[50px]">
        {data &&
          data?.map(({ id, title, result }) => {
            return (
              <DataCard
                key={id}
                type={"res"}
                res={String(result) + "+"}
                resText={title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OurResault;
