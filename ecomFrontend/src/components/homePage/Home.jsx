import React from "react";

import Images from "../homePage/slide/Images";
import Card from "./pages/Card";
import Ap from "../FourRules/Ap";
import SideBarMenu from "./pages/SideBarMenu";
import DealsCard from "./pages/DealsCard";
import DealsCard2 from "./pages/DealsCard2";

import Banner from "./pages/Banner";
import Card2 from "./pages/Card2";
import TopBrand from "./pages/TopBrand";

export default function Home() {
  return (
    <>
      <div className="lg:mt-6">
        <div>
          <Images />
        </div>
        <div>
          <DealsCard />
        </div>
      </div>

      <div>
        <div>
          <DealsCard2 />
        </div>
        <div>
          <TopBrand />
        </div>
      </div>

      <dvi></dvi>

   
    </>
  );
}
