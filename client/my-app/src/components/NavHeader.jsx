
import { FaBowlFood } from "react-icons/fa6";

function NavHeader() {
  return (
<div className=" w-full flex flex-row justify-content-start align-items-center sticky " style={{background:'#3D4A3E'}}>
    <span className="mx-2 flex align-items-baseline ">
      <FaBowlFood color="white" className="mx-1"></FaBowlFood>
    <h1 className="text-s" style={{fontFamily:'Bebas Neue', color:'black', fontSize:'x-large'}}>FOOD VIEWS</h1>
    <FaBowlFood color="white" className="mx-1"></FaBowlFood>
    </span>
     
</div>
  );
}

export default NavHeader;