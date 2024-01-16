import React from "react";
import { useNavigate } from "react-router-dom";
import cube from "../assets/p1.jpg";
import gun from "../assets/p2.jpg"


const ProductItems = [
    {
        
        name: "Mouser Toy Gun for Kids",
        image: gun,
        price: "300 Pieces / Cartoon",
        stock: "Currently available",
        product_details: "1. Pack Incorporates: 1*Mouser Toy Gun",
    },
    {
     
        name: "Cocu Cube",
        image: cube,
        price: "288 Pieces / Cartoon",
        stock: "Currently available",
        product_details: "1. Pack Incorporates: 1* Cocu Cube",
    }
]



export default function ProductList(){

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/contact')
  }

    return(
        <>
        <div>
        {ProductItems.map((item) => (
              <div key={item.name} className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0 ">
              <div className="overflow-hidden">
                <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
                  <div className="items-start justify-between lg:flex lg:space-x-8">
                    <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                      <div className="w-full xl:flex xl:flex-row-reverse">
                        <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                          <div className="relative flex items-center justify-center">
                            <img
                              alt="Product gallery 1"
                              src={item.image}
                              width={650}
                              height={590}
                              className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                            />
                          </div>
                        </div>
                      
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                      <div className="pb-5">
                        <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{item.name}</h2>
                        <p className="mt-4 font-semibold">{item.price}</p>
                      </div>
                      <div className="mb-2 pt-0.5">
                      <h4 className="text-15px text-green-500 font-semibold mb-3 font-normal capitalize text-opacity-70">
                          {item.stock}
                        </h4>
                      </div>
                      <div className="pb-2" />
                      <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                          <button
                            onClick={handleClick}
                            type="submit"
                            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Ask for Details
                          </button>
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            <Heart size={16} className="mr-3" />
                            <span className="block">Wishlist</span>
                          </button> */}
                          <div className="relative">
                            {/* <button
                              type="button"
                              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                              <Share size={16} className="mr-3" />
                              <span className="block">Share</span>
                            </button> */}
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 xl:pt-8">
                        <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                          Product Details:
                        </h3>
                        <p className="text-sm">
                          {item.product_details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
            </div>
        </>
    )
}