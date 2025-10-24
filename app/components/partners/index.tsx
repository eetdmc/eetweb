import Main from "./Main";
import PartnerList from "./PartnerList";
import { PartnerData } from "./type";

const Index = ({ data }: { data: PartnerData["data"] }) => {
  return (
    <>
      <Main
        mainTitle={data.firstSection.mainTitle}
        subTitle={data.firstSection.subTitle}
        description={data.firstSection.description}
      />
      <PartnerList data={data.firstSection.items} />
    </>
  );
};

export default Index;
