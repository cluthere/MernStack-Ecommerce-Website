import React from "react";

import Images from "../homePage/slide/Images";
import Card from "./Card";
import Ap from "../FourRules/Ap";
import SideBarMenu from "./SideBarMenu";
import DealsCard from "./DealsCard";
import DealsCard2 from "./DealsCard2";

import Banner from "./Banner";
import Card2 from "./Card2";
import TopBrand from "./TopBrand";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-flow-col lg:auto-cols-3 lg:mt-6">
        <div className="mt-12"><SideBarMenu/></div>
        <div ><Images/></div>
        <div ><Card/></div>
        </div>
        <div><Banner/></div>
        <div>
          <div><DealsCard/></div>

          <div><DealsCard2/></div>
          <div><TopBrand/></div>
          
         
    
          
        </div>
               
       
        <div></div>
      
    </>
  );
}
