import React from "react";

export default function About(){
    return(
        <>
         <section class="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-white-800 ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="relative">
                        <img src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg" alt=""
                            class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                        <div
                            class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                        </div>
                        <div
                            class="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                                </path>
                            </svg> */}
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div class="relative">
                        <h1
                            class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                            About Us
                        </h1>
                        <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-black">
                            Welcome to Harsun Enterprises
                        </h1>
                    </div>
                    <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    We are a company that sells toys online, but we are more than just a toy store. We are a team of passionate toy lovers who want to share our joy and excitement with children and adults alike. We believe that toys are not only fun, but also educational, creative, and inspiring. That’s why we offer a wide range of toys for all ages, interests, and budgets. Whether you are looking for a classic toy, a trendy toy, or a unique toy, you will find it on our website.
                    </p>
                    {/* <a href="#"
                        class="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                        Learn more
                    </a> */}
                </div>
            </div>
        </div>
    </section>
        </>
    )
}