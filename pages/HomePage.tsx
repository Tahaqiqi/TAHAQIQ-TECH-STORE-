import React from 'react';
import { Product, Category, View } from '../types';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';

interface HomePageProps {
  navigateTo: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const featuredProducts = products.slice(0, 6);
  const dealOfTheDay = products[3]; // Example product for deal

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://picsum.photos/seed/tech/1600/800" alt="Modern tech devices" loading="lazy" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Latest in Tech</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">Discover our curated selection of top-tier laptops, smartphones, and accessories. Unbeatable quality, unbeatable prices.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo({ page: 'category', category: categories[0] }); }} className="mt-8 inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 transition-colors">Shop Laptops</a>
        </div>
      </div>
      
      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category.id} onClick={() => navigateTo({ page: 'category', category })} className="group relative cursor-pointer">
              <div className="w-full h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-64 transition-opacity">
                <img src={category.image} alt={category.name} className="w-full h-full object-center object-cover" loading="lazy" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Deal of the Day Section */}
      {dealOfTheDay && (
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Deal of the Day</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="relative w-full h-64 lg:h-full">
            <img className="w-full h-full object-cover" src={dealOfTheDay.image} alt={dealOfTheDay.name} loading="lazy" />
          </div>
          <div className="p-8">
            <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{dealOfTheDay.brand}</h3>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">{dealOfTheDay.name}</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{dealOfTheDay.description}</p>
            <div className="mt-4 flex items-center">
              <StarRating rating={dealOfTheDay.rating} />
              <p className="ml-2 text-sm text-gray-500">{dealOfTheDay.reviewCount} reviews</p>
            </div>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">GH₵{(dealOfTheDay.price * 0.8).toFixed(2)}</span>
              <span className="text-xl font-semibold text-gray-500 line-through">GH₵{dealOfTheDay.price.toFixed(2)}</span>
              <span className="ml-2 inline-block bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-md">20% OFF</span>
            </div>
            <button
              onClick={() => navigateTo({ page: 'product', product: dealOfTheDay })}
              className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700"
            >
              View Deal
            </button>
          </div>
        </div>
      </div>
      )}


      {/* Featured Products Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => navigateTo({ page: 'product', product })} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;