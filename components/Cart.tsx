import React from 'react';
import { useCart } from '../context/CartContext';
import { View } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (view: View) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, navigateTo }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo({ page: 'checkout' });
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
              <span className="sr-only">Close panel</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">Your cart is empty.</p>
            ) : (
              <ul role="list" className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                          <h3>{item.name}</h3>
                          <p className="ml-4">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                           <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1">-</button>
                           <p className="w-8 text-center">{item.quantity}</p>
                           <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">+</button>
                        </div>
                        <div className="flex">
                          <button onClick={() => removeFromCart(item.id)} type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Subtotal</p>
                <p>GH₵{totalPrice.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" onClick={handleCheckout} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
                  Checkout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;