import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../navbar/Nav";

export default function DealsCard() {
  const items = [
    {
      name: "iphone",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/34b5bf180145769.6505ae7623131.jpg",
      offer: "Upto 30% off",
      href: "/products/productOverview"
    },
    {
      name:"oppo",
      image:"https://down-sg.img.susercontent.com/file/sg-11134207-7rblj-ll94bkj2dgocbc",
      offer:"Upto 35% off",
      href: "/products/productOverview"
    },
    {
      name:"lava",
      image:"https://suprememobiles.in/cdn/shop/files/1_17598b4a-c115-4ea0-a840-cde861a283e1_1024x1024.png?v=1698816102",
      offer:"Upto 40% off",
      href: "/products/productOverview"
    },
    {
      name:"realme",
      image:"https://dxtvlpbretzvp.cloudfront.net/media/brandhouse/RMX3771-BEI/RMX3771-BEI-2.jpg",
      offer:"Upto 45% off",
      href: "/products/productOverview"
    }
  ];
  return (
    <>
      <section className="">
        {/* <div className="justify-center flex lg:pt-5 font-semibold text-blue-600">
          <h2 className="text-2xl font-bold leadi sm:text-5xl">TOP DEALS</h2>
        </div> */}
        <div className="container flex flex-col justify-center lg:pt-5 lg:pb-5 lg:pl-5 lg:pr-5 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* product card  start */}
            {items.map((item) => (
              <NavLink to={item.href}>
              <div className="max-w-lg shadow-md hover:cursor-pointer p-4 dark:bg-white dark:text-gray-100 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl  duration-300 ">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="block object-cover object-center w-full h-72 rounded-md dark:bg-gray-500"
                    />
                    <button class="bg-red-600 disable text-white font-bold py-2 px-4">
                      {item.offer}
                    </button>
                    <button class="disable text-red-600 font-bold py-1 lg:pl-1">
                      Deal Of The Day
                    </button>
                  </div>
                </div>
              </div>
              </NavLink>
            ))}
            {/* product card end */}
          </div>
        </div>
      </section>
    </>
  );
}
