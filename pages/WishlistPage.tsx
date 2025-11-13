import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { View } from '../types';
import ProductCard from '../components/ProductCard';

interface WishlistPageProps {
  navigateTo: (view: View) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ navigateTo }) => {
  const { wishlistItems } = useWishlist();

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Wishlist</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {wishlistItems.length > 0
            ? `You have ${wishlistItems.length} item(s) saved.`
            : 'Your wishlist is empty. Start browsing to add items!'}
        </p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => navigateTo({ page: 'product', product })} />
          ))}
        </div>
      ) : (
         <div className="text-center py-20">
            <button 
                onClick={() => navigateTo({ page: 'home' })}
                className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
                Browse Products
            </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;