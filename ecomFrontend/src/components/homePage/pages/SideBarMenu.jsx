import React from "react";

export default function SideBarMenu() {
  return (
    <>
      <aside className="w-full p-4 sm:w-60 dark:bg-gray-200 shadow dark:text-gray-700">
        <nav className="space-y-4 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-blue-600">
              Apple
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Iphones
              </a>
              <a rel="noopener noreferrer" href="#">
                MacBook
              </a>
              <a rel="noopener noreferrer" href="#">
                Ipad
              </a>
              <a rel="noopener noreferrer" href="#">
                Mac
              </a>
              <a rel="noopener noreferrer" href="#">
                Apple Watch
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-blue-600">
              Samsung
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Galaxy Phone
              </a>
              <a rel="noopener noreferrer" href="#">
                Galaxy Watch
              </a>
              <a rel="noopener noreferrer" href="#">
                Galaxy Tab
              </a>
              <a rel="noopener noreferrer" href="#">
              Galaxy Buds             </a>
              <a rel="noopener noreferrer" href="#">
                Laptop
              </a>
              <a rel="noopener noreferrer" href="#">
                Moniter
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-blue-600">
              Google Pixel
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Pixel Phone
              </a>
              <a rel="noopener noreferrer" href="#">
                Pixel Watch
              </a>
              <a rel="noopener noreferrer" href="#">
                Pixel Buds
              </a>
              <a rel="noopener noreferrer" href="#">
                ChromeBooks
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-blue-600">
              Others
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
              Phone Accessories
              </a>
              <a rel="noopener noreferrer" href="#">
              Other Phone Brands
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
