import React from "react";

import Images from "../slide/images";
import Card from "../product/card";
import Ap from "../FourRules/Ap";

export default function Home() {
  return (
    <>
      <div className=" grid grid-cols-1 gap-2, lg:grid-cols-2 lg:ml-52 lg:mt-7">
        <div className="">
        <Images />
        </div>
        <div>
        <Card />
        </div>
        
      </div>
      {/* <Ap/> */}
    </>
  );
}
