import React from 'react';

const PolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Refund & Return Policy</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        <p>Last updated: October 26, 2024</p>
        
        <h2>Returns</h2>
        <p>We have a 14-day return policy, which means you have 14 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
        <p>To start a return, you can contact us at <a href="mailto:yaqubuwaliyu@gmail.com">yaqubuwaliyu@gmail.com</a>. If your return is accepted, we’ll send you instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>
        
        <h2>Damages and Issues</h2>
        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

        <h2>Exceptions / Non-returnable items</h2>
        <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
        <p>Unfortunately, we cannot accept returns on sale items or gift cards.</p>

        <h2>Refunds</h2>
        <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
      </div>
    </div>
  );
};

export default PolicyPage;
