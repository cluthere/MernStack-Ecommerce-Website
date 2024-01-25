import React from "react";

export default function DealsCard2() {
    const items = [
        {
            name:"laptop",
            image:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
        },
        {
            name:"Earbuds",
            image:"https://m.media-amazon.com/images/I/61FwbxlXSfL.jpg"
        },
        {
            name:"Smartphones",
            image:"https://5.imimg.com/data5/SELLER/Default/2022/6/KC/VD/BZ/149172128/google-pixel-6-pro-5g-android-phone-unlocked-smartphone.jpg"
        },
        {
            name:"Smartwatch",
            image:"https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg"
        }
    ]
  return (
    <>
      <section className="dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* product card  start */}
            {items.map((item)=>(
              <div className="max-w-lg shadow-md hover:cursor-pointer dark:bg-gray-100 dark:text-gray-100">
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="block object-cover    object-center w-full h-72 rounded-md dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
            ))}  
             {/* product card end */}
          </div>
        </div>
      </section>
    </>
  );
}
