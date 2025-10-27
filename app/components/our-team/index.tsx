import Main from "./Main";
// import TeamSlider from "./TeamSlider";
import BehindTheScene from "./BehindTheScene";
import { TeamData } from "./type";
import MeetOurTeam from "./MeetOurTeam";

const Index = ({ data }: { data: TeamData["data"] }) => {
  return (
    <>
      <Main data={data.firstSection} />
      <MeetOurTeam />
      {/* <TeamSlider data={data.secondSection} /> */}
      <BehindTheScene data={data.thirdSection} />
    </>
  );
};

export default Index;
