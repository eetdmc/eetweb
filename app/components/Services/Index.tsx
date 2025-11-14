import React from "react";
import Main from "./sections/Main";
import ServicesList from "./sections/ServicesList";
import { servicesData } from "./data";

const Index = () => {
  return (
    <>
      <Main />
      <ServicesList servicesData={servicesData} />
    </>
  );
};

export default Index;
