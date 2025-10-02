import AccordionStyleTwo from "../common/AccordionStyleTwo";
import Main from "./Main";
import MIVI from "./MIVI";
import { AboutData } from "./data";
import CoreValues from "./CoreValues";
const Index = () => {
  return ( 
    <>
    <Main />
    <MIVI />
    <CoreValues title={AboutData.coreValues.title} data={AboutData.coreValues.items} />
    </>
   );
}
 
export default Index;