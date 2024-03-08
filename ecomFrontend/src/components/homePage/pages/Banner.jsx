import React from "react";

export default function Banner() {
  return (
    <>
      <div className="p-6 py-12 dark:bg-blue-600 dark:text-white lg:flex">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to 
              <br className="sm:hidden" />
              &nbsp;
              30% Off for First Time Shopper
            </h2>
            <div className="space-x-2 text-center lg:mr-12 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">GULSHAN</span>
            </div>
            {/* <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
