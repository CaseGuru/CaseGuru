
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import ProductCard from './ProductCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function TrendingProducts() {
  

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto lg:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="font-sans font-semibold tracking-tight text-3xl text-gray-900">Trending Products</h2>
          <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div >

        </div>
        <ProductCard/>
        </div>
    </div>
  );
}

