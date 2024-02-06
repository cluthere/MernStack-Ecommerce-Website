import React from "react";
import { Star, ChevronDown } from "lucide-react";

export const ProductOverview = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Nike Air Max 21A"
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                Nike
              </h2>
              <h1 className="my-4 text-3xl font-semibold text-black">
                Nike Air Max 21A
              </h1>
              <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                  <span className="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur rem amet repudiandae neque adipisci eum enim, natus illo
                inventore totam?
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-sm font-semibold">Color</span>
                  <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="mr-3 text-sm font-semibold">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <ChevronDown size={16} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="title-font text-xl font-bold text-gray-900">
                  ₹47,199
                </span>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* // product details */}
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Products Details</h1>
      </div>

      <div class="relative overflow-x-auto sm:rounded-lg pr-28 pl-28">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-blue-600">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-blue-600">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-blue-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-600"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-blue-600">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-blue-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-600"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-blue-600">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-blue-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-600"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-blue-600">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-blue-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-600"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-blue-600">Phone</td>
              <td class="px-6 py-4">$799</td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-600"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-blue-600">Wearables</td>
              <td class="px-6 py-4">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
