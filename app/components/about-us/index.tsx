import Main from "./Main";
import MIVI from "./MIVI";
import CoreValues from "./CoreValues";
import { AboutData } from "./type";
import { AwardData } from "../awards-accreditations/type";
import AwardsandAccreditions from "./AwardsandAccreditions";
import Partners from "./Partners";
import { PartnerData } from "../partners/type";

const Index = ({
  data,
  awardsData,
  partnersData,
}: {
  data: AboutData["data"];
  awardsData: AwardData["data"];
  partnersData: PartnerData["data"];
}) => {
  return (
    <>
      <Main data={data.firstSection} legacy={data.secondSection} />
      <MIVI data={data.thirdSection} />
      <CoreValues data={data.fourthSection} />
      <AwardsandAccreditions awardsData={awardsData.firstSection} />
      <Partners partnersData={partnersData.firstSection} />
    </>
  );
};

export default Index;
