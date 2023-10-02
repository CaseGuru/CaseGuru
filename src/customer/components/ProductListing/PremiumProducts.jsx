
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import products from './SingleProductDetails';
import ProductCard from './ProductCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function TrendingProducts() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('Hard');
  const materialOptions = ['Hard', 'Soft', 'Glass'];
  const [selectedBrand, setSelectedBrand] = useState('');
  const brandOptions = ['Apple', 'Samsung', 'Xiaomi'];

  const modelOptions = {
    Apple: ['iPhone 12', 'iPhone 11', 'iPhone SE'],
    Samsung: ['Galaxy S21', 'Galaxy Note 20', 'Galaxy A51'],
    Xiaomi: ['Mi 11', 'Redmi Note 10', 'Poco X3'],
  };
  const [selectedModel, setSelectedModel] = useState(modelOptions['Apple']);


  const openQuickView = (product) => {
    setSelectedProduct(product);

    setOpen(true);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto lg:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="font-sans font-semibold tracking-tight text-3xl text-gray-900">Premium Products</h2>
          <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <ProductCard/>

        </div>
    </div>
  );
}

