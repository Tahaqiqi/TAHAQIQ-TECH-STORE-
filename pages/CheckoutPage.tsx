import React from 'react';
import { useCart } from '../context/CartContext';
import { View } from '../types';

interface CheckoutPageProps {
  navigateTo: (view: View) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ navigateTo }) => {
  const { cartItems, totalPrice, cartCount, clearCart } = useCart();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment.
    clearCart();
    navigateTo({ page: 'order-confirmation' });
  };

  if (cartItems.length === 0) {
    return (
        <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">You have no items in your shopping cart to checkout.</p>
            <button 
                onClick={() => navigateTo({ page: 'home' })}
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
                Continue Shopping
            </button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Shipping & Payment Form */}
        <div className="lg:w-3/5">
          <form onSubmit={handleFormSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="text" placeholder="Last Name" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="email" placeholder="Email Address" className="sm:col-span-2 border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="text" placeholder="Address" className="sm:col-span-2 border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="text" placeholder="City" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="text" placeholder="State / Province" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                <input type="text" placeholder="Zip / Postal Code" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
            </div>
             <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Payment Information</h2>
              <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500">We accept:</span>
                  <div className="flex items-center gap-2">
                      <img src="https://js-cdn.s3.us-east-1.amazonaws.com/paystack.svg" alt="Paystack" className="h-6"/>
                      <img src="https://js-cdn.s3.us-east-1.amazonaws.com/stripe.svg" alt="Stripe" className="h-8"/>
                      <img src="https://js-cdn.s3.us-east-1.amazonaws.com/mtn.svg" alt="MTN Mobile Money" className="h-8"/>
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input type="text" placeholder="Card Number" className="sm:col-span-2 border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                 <input type="text" placeholder="Name on Card" className="sm:col-span-2 border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                 <input type="text" placeholder="Expiry (MM/YY)" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
                 <input type="text" placeholder="CVC" className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <span>Secure Checkout</span>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-semibold">
              Place Order GH₵{totalPrice.toFixed(2)}
            </button>
          </form>
        </div>
        {/* Order Summary */}
        <div className="lg:w-2/5">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Order Summary ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                    <div>
                      <h3 className="text-md font-medium text-gray-800 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-md font-semibold text-gray-800 dark:text-white">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <hr className="my-4 dark:border-gray-700" />
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>GH₵{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Taxes</span>
                <span>Calculated at next step</span>
              </div>
            </div>
            <hr className="my-4 dark:border-gray-700" />
            <div className="flex justify-between font-bold text-lg">
              <span className="text-gray-800 dark:text-white">Total</span>
              <span className="text-gray-800 dark:text-white">GH₵{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;