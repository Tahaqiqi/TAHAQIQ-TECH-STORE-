import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
    >
       <button onClick={handleWishlistToggle} className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-colors">
          <svg className={`w-6 h-6 ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`} fill={isWishlisted ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-center object-cover group-hover:opacity-80 transition-opacity duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{product.description}</p>
        <div className="mt-2 flex items-center">
          <StarRating rating={product.rating} />
          <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">{product.reviewCount} reviews</p>
        </div>
        <div className="flex-grow"></div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">GH₵{product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;