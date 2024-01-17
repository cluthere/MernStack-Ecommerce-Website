import React from "react";

import Images from "../homePage/slide/Images";
import Card from "../product/card";
import Ap from "../FourRules/Ap";
import SideBarMenu from "./SideBarMenu";

export default function Home() {
  return (
    <>
      <div className=" grid grid-cols-1  lg:grid-flow-col lg:auto-cols-3 lg:mt-6">
      <div className="lg:mt-12">
        <SideBarMenu/>
      </div>
        <div className="">
        <Images />
        </div>
        <div className="">
        <Card />
        </div>    
      </div>
      
      {/* <Ap/> */}
    </>
  );
}
