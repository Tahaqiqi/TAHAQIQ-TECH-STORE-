import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { View } from '../types';

interface AccountPageProps {
  navigateTo: (view: View) => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ navigateTo }) => {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  const handleLogout = () => {
    logout();
    navigateTo({ page: 'home' });
  };

  if (!currentUser) {
    // This should ideally not happen if routing is correct
    return <p>Please log in to view your account.</p>;
  }
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'orders':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Order History</h2>
            <div className="text-center py-10 border-2 border-dashed rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">You have no recent orders.</p>
            </div>
          </div>
        );
      case 'addresses':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Manage Addresses</h2>
            <div className="text-center py-10 border-2 border-dashed rounded-lg">
                 <p className="text-gray-600 dark:text-gray-400">You have no saved addresses.</p>
                 <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-sm">Add New Address</button>
            </div>
          </div>
        );
      case 'profile':
         return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Profile Settings</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input type="text" defaultValue={currentUser.name || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input type="email" value={currentUser.email} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-900 dark:border-gray-600" />
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-500">Reset Password</button>
            </div>
             <div className="mt-6">
                 <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700">Save Changes</button>
             </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Account</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Welcome back, {currentUser.name || currentUser.email}!
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <nav className="flex flex-col space-y-2">
            <button onClick={() => setActiveTab('orders')} className={`text-left p-3 rounded-md text-sm font-medium ${activeTab === 'orders' ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Order History</button>
            <button onClick={() => setActiveTab('addresses')} className={`text-left p-3 rounded-md text-sm font-medium ${activeTab === 'addresses' ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Manage Addresses</button>
            <button onClick={() => setActiveTab('profile')} className={`text-left p-3 rounded-md text-sm font-medium ${activeTab === 'profile' ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Profile Settings</button>
            <button onClick={handleLogout} className="text-left p-3 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Logout</button>
          </nav>
        </aside>
        <main className="md:w-3/4 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default AccountPage;
