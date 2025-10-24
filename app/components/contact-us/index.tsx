import Main from "./Main";
import LetsConnect from "./LetsConnect";
import GMap from "./GMap";
import { ContactData } from "./type";

const Index = ({ data }: { data: ContactData["data"] }) => {
  return (
    <>
      <Main data={data.firstSection} />
      <LetsConnect />
      <GMap />
    </>
  );
};

export default Index;
