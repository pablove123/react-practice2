import Pillow from "./Pillow";
import Blanket from "./Blanket";
const Bed = (props) => {
  return ( 
    <>
    <h1>Bed</h1>
    <div><Pillow pNum={1}/></div>
    <div><Pillow pNum={2}/></div>
    <div><Blanket/></div>
    </>
   );
}
 
export default Bed;