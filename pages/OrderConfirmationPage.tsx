import React from 'react';
import { View } from '../types';

interface OrderConfirmationPageProps {
  navigateTo: (view: View) => void;
}

const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ navigateTo }) => {
  return (
    <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">Thank you for your order!</h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Your order has been placed successfully.</p>
        <p className="mt-1 text-base text-gray-600 dark:text-gray-300">An email confirmation with your order details has been sent to you.</p>
        <div className="mt-10">
            <button 
                onClick={() => navigateTo({ page: 'home' })}
                className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium"
            >
                Continue Shopping
            </button>
        </div>
    </div>
  );
};

export default OrderConfirmationPage;
