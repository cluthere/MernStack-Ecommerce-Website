import React from "react";

import Images from "../homePage/slide/Images";
import Card from "./Card";
import Ap from "../FourRules/Ap";
import SideBarMenu from "./SideBarMenu";
import DealsCard from "./DealsCard";
import Banner from "./Banner";

export default function Home() {
  return (
    <>
      <div className=" grid grid-cols-1  lg:grid-flow-col lg:auto-cols-3 lg:mt-6">
        <div className="lg:mt-12">
          <SideBarMenu />
        </div>
        <div>
          <Images />
        </div>
        <div>
          <Card />
        </div>
        
      </div>
      <Banner/>
      <div>
        <DealsCard />
      </div>
      

      {/* <Ap/> */}
    </>
  );
}
