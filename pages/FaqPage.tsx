import React from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b border-gray-200 dark:border-gray-700 py-4">
    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
      <span className="text-lg text-gray-800 dark:text-gray-200">{question}</span>
      <span className="transition-transform transform group-open:rotate-180">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </summary>
    <div className="text-gray-600 dark:text-gray-400 mt-3 group-open:animate-fadeIn">
      {children}
    </div>
  </details>
);

const FaqPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>
      <div className="space-y-4">
        <FaqItem question="What payment methods do you accept?">
          <p>We accept a wide range of payment methods including Visa, MasterCard, PayPal, and mobile money services like MTN Mobile Money and AirtelTigo Money for our customers in Ghana.</p>
        </FaqItem>
        <FaqItem question="What are your shipping options?">
          <p>We offer standard and express shipping options. Standard shipping within Ghana typically takes 3-5 business days, while express shipping takes 1-2 business days. International shipping times vary by destination.</p>
        </FaqItem>
        <FaqItem question="What is your return policy?">
          <p>We offer a 14-day return policy for most items. The product must be in its original condition with all accessories included. Please visit our Returns page or contact support to initiate a return.</p>
        </FaqItem>
        <FaqItem question="How can I track my order?">
          <p>Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can use this to monitor your package's journey to your doorstep.</p>
        </FaqItem>
        <FaqItem question="Do you offer a warranty on your products?">
          <p>Yes, all new products come with a standard manufacturer's warranty. The duration and terms of the warranty vary by product and manufacturer. Refurbished or open-box items may have a limited warranty period, which will be clearly stated on the product page.</p>
        </FaqItem>
      </div>
    </div>
  );
};

export default FaqPage;