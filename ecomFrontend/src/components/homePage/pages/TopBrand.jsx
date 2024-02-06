import React from "react";

export default function TopBrand() {
  const brands = [
    {
      name: "Apple",
      image: "https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg",
    },
    {
        name: "ReadMi",
        image: "https://1.bp.blogspot.com/-bkcUjzib7Fc/YED90uGP2dI/AAAAAAAAdJ0/lEvKObR6s4suD4vvyGU3NZAmdh1x6MobwCLcBGAsYHQ/s800/redmi-note-10-series%2B%25281%2529.png",
      },
      {
        name: "RealMe",
        image: "https://www.gigahertz.com.ph/cdn/shop/collections/brand_faceplate_da68f0c1-6af2-4be6-9c58-f86b4f256ee0.png?v=1674017168&width=600",
      },{
        name: "Samsung",
        image: "https://www.kapruka.com/cms_temp/temp/service_product/1611236640708_banner%20pre%20order.jpg",
      },{
        name: "Oppo",
        image: "https://assorted.downloads.oppo.com/static/archives/images/dd/Smartphones/A92/A92-white-top%20banner-PC.jpg",
      },{
        name: "Google",
        image: "https://arafatelecom.com/wp-content/uploads/2023/08/google-banner-final.jpg",
      },
  ];
  return (
    <>
      <section className="py-6 dark:bg-white dark:text-blue-600">
        <div className="container p-4 mx-auto  space-y-16 sm:p-10">
          <div className="space-y-4 flex justify-center">
            <h3 className="text-2xl font-bold leadi sm:text-5xl">Top Brands</h3>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {brands.map((item)=>(
                <div className="flex space-x-6 hover:cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl  duration-300">
                  <img
                    alt=""
                    className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                    src={item.image}
                  />
               
                </div>
            ))}      
          </div>
        </div>
      </section>
    </>
  );
}
