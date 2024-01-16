import React from 'react'
import { DollarSign, Zap, Moon, Filter } from 'lucide-react'

export default function Ap() {
  return (
    <div className='pt-10'>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12  ">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            1000+ satisfied Customers
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-blue-600 sm:text-4xl lg:text-5xl">
        The ultimate online toy destination for kids of all ages.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
         No toy left behind. Find your perfect match here.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
          <p className="mt-4 text-sm text-gray-600">
            
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy Delivery</h3>
          <p className="mt-4 text-sm text-gray-600">
            
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Moon className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Anytime Anywhere</h3>
          <p className="mt-4 text-sm text-gray-600">
            
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Filter className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Best Quality</h3>
          <p className="mt-4 text-sm text-gray-600">
            
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
