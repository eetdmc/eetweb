import Main from "./Main";
import AwardsList from "./AwardsList";
import { AwardData } from "./type";

const Index = ({ data }: { data: AwardData["data"] }) => {
  return (
    <>
      <Main data={data.firstSection} />
      <AwardsList data={data.firstSection.items} />
    </>
  );
};

export default Index;
