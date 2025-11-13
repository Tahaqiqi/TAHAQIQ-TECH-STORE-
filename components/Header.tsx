import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { categories, products } from '../data/mockData';
import { View } from '../types';

interface HeaderProps {
  navigateTo: (view: View) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, onCartClick }) => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { authStatus, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);


  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5); // Limit results
    setSearchResults(filteredProducts);
  }, [searchTerm]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);


  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    navigateTo({ page: 'home' });
  };
  
  const handleSearchSelect = (product) => {
    setSearchTerm('');
    setSearchResults([]);
    navigateTo({ page: 'product', product });
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo({ page: 'home' }); }} className="flex-shrink-0 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Tahaqiq Tech
            </a>
            <nav className="hidden md:flex md:ml-10 md:space-x-8">
              {categories.map(category => (
                <a 
                  key={category.id} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigateTo({ page: 'category', category }); }}
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <div className="flex-1 max-w-xs lg:max-w-md hidden sm:block" ref={searchRef}>
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full bg-gray-100 dark:bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search products..."
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoComplete="off"
                />
                {searchResults.length > 0 && (
                  <div className="absolute mt-1 w-full rounded-md bg-white dark:bg-gray-700 shadow-lg z-10 border dark:border-gray-600">
                    <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {searchResults.map(product => (
                        <li key={product.id} onClick={() => handleSearchSelect(product)} className="text-gray-900 dark:text-gray-200 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white">
                          <span className="font-normal block truncate">{product.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-4 flex items-center space-x-2 md:space-x-4">
              {authStatus === 'guest' ? (
                <>
                  <button onClick={() => navigateTo({ page: 'login' })} className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Login</button>
                  <button onClick={() => navigateTo({ page: 'signup' })} className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">Sign Up</button>
                </>
              ) : (
                <>
                  <button onClick={() => navigateTo({ page: 'account' })} className="group -m-2 p-2 flex items-center relative">
                     <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                  </button>
                  <button onClick={handleLogout} className="group -m-2 p-2 flex items-center relative">
                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
                  </button>
                </>
              )}
               <button onClick={() => navigateTo({ page: 'wishlist'})} className="group -m-2 p-2 flex items-center relative">
                <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{wishlistCount}</span>
                )}
                <span className="sr-only">items in wishlist</span>
              </button>

              <button onClick={onCartClick} className="group -m-2 p-2 flex items-center relative">
                <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-6.918a1.5 1.5 0 00-1.087-1.745H5.25v-.081a.75.75 0 00-.75-.75H2.25M16.5 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.25 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartCount}</span>
                )}
                <span className="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;