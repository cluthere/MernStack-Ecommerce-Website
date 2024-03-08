import React from "react";
import p2 from "../../assets/p2.jpg"

export default function Card() {
  return (
    <>
      <div className="max-w lg:mt-12  sm:max-w-md rounded-md dark:bg-white dark:text-black mb-2">
        <img
          src={p2}
          alt=""
          className="object-cover object-center w-full rounded-t-md lg:h-64 dark:bg-gray-500"
        />
        {/* space and padding for card size change  */}
        <div className="flex flex-col justify-between lg:space-y-0 lg:p-1 lg:pb-56 p-6 space-y-5">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">Latest Iphone</h2>
            <p className="dark:text-gray-800 lg:pb-2">
              Find latest Iphones with great price
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-blue-600 dark:text-white hover:bg-blue-700"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
