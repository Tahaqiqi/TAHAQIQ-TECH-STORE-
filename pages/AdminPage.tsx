import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const AdminFeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

const AdminPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Admin Dashboard</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Manage your store's products, orders, customers, and more.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AdminFeatureCard
                    title="Product Management"
                    description="Add, edit, and organize all your products and categories. Manage inventory levels and pricing."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>}
                />
                <AdminFeatureCard
                    title="Order Management"
                    description="View and process incoming orders, update shipping statuses, and handle returns or refunds."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>}
                />
                 <AdminFeatureCard
                    title="Customer Management"
                    description="Access customer profiles, view order history, and manage communication."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                />
                <AdminFeatureCard
                    title="Analytics & Reports"
                    description="Track sales performance, monitor site traffic, and generate reports to gain business insights."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>}
                />
                 <AdminFeatureCard
                    title="Promotions & Discounts"
                    description="Create and manage coupon codes, schedule sales, and set up special offers."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>}
                />
                 <AdminFeatureCard
                    title="Content Management"
                    description="Update static pages like 'About Us' or 'Contact', and manage blog posts or news."
                    icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
                />
            </div>
        </div>
    );
};

export default AdminPage;