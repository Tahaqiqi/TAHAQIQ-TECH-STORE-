import React, { useState } from 'react';
import { Product, Category, View } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import StarRating from '../components/StarRating';
import { categories } from '../data/mockData';

interface ProductDetailPageProps {
  product: Product;
  navigateTo: (view: View) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, navigateTo }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.variants.color?.[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.variants.storage?.[0]);
  
  const isWishlisted = isInWishlist(product.id);
  const category = categories.find(c => c.id === product.category);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigateTo({ page: 'checkout' });
  };
  
  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol role="list" className="flex items-center space-x-2 text-sm">
          <li>
            <div className="flex items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo({ page: 'home' }); }} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Home</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300 dark:text-gray-600">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          {category && (
            <li>
              <div className="flex items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo({ page: 'category', category }); }} className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">{category.name}</a>
              </div>
            </li>
          )}
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Image gallery */}
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" loading="lazy" />
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900 dark:text-white">GH₵{product.price.toFixed(2)}</p>
          </div>

          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <StarRating rating={product.rating} />
              <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{product.reviewCount} reviews</a>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 space-y-6">{product.longDescription}</p>
          </div>

          <form className="mt-6">
            {product.variants.color && (
              <div>
                <h3 className="text-sm text-gray-900 dark:text-gray-200 font-medium">Color</h3>
                <div className="flex items-center space-x-3 mt-2">
                  {product.variants.color.map(color => (
                    <label key={color} className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value={color} className="sr-only" checked={selectedColor === color} onChange={() => setSelectedColor(color)} />
                      <span aria-hidden="true" className={`h-8 w-8 bg-${color.toLowerCase()}-500 border border-black border-opacity-10 rounded-full ${selectedColor === color ? 'ring ring-offset-1' : ''}`}></span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            
            {product.variants.storage && (
               <div className="mt-4">
                <h3 className="text-sm text-gray-900 dark:text-gray-200 font-medium">Storage</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {product.variants.storage.map(storage => (
                     <label key={storage} className={`border rounded-md py-3 px-4 text-sm font-medium uppercase cursor-pointer ${selectedStorage === storage ? 'bg-indigo-600 border-transparent text-white' : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-200'}`}>
                       <input type="radio" name="storage-choice" value={storage} className="sr-only" checked={selectedStorage === storage} onChange={() => setSelectedStorage(storage)} />
                       <span>{storage}</span>
                     </label>
                  ))}
                </div>
              </div>
            )}


            <div className="mt-10 flex gap-x-3">
              <button type="button" onClick={handleAddToCart} className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full transition-colors">
                Add to cart
              </button>
              <button type="button" onClick={handleBuyNow} className="max-w-xs flex-1 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:w-full transition-colors">
                Buy Now
              </button>
               <button type="button" onClick={handleWishlistToggle} className="ml-3 p-3 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500">
                  <svg className={`h-6 w-6 flex-shrink-0 ${isWishlisted ? 'text-red-500' : ''}`} fill={isWishlisted ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span className="sr-only">Add to wishlist</span>
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Key Specs</h3>
            <div className="mt-4 prose prose-sm text-gray-500 dark:text-gray-300">
              <ul role="list">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;