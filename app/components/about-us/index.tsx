import Main from "./Main";
import MIVI from "./MIVI";
import CoreValues from "./CoreValues";
import { AboutData } from "./type";
const Index = ({ data }: { data: AboutData["data"] }) => {
  return (
    <>
      <Main data={data.firstSection} legacy={data.secondSection} />
      <MIVI data={data.thirdSection} />
      <CoreValues data={data.fourthSection} />
    </>
  );
};

export default Index;
