import React from "react";
import Main from "./sections/Main";
import ServicesList from "./sections/ServicesList";
import { ServiceProps } from "./type";

const Index = ({data}: {data: ServiceProps}) => {
  return (
    <>
      <Main data={data.firstSection}/>
      <ServicesList servicesData={data.secondSection} />
    </>
  );
};

export default Index;
