import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-6">About Tahaqiq Tech Store</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
        <p>
          Welcome to Tahaqiq Tech Store, your number one source for all things tech. We're dedicated to giving you the very best of laptops, smartphones, and accessories, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2024, Tahaqiq Tech Store has come a long way from its beginnings. When we first started out, our passion for providing top-tier, reliable technology at fair prices drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over Ghana and are thrilled to be a part of the fair-trade wing of the tech industry.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower our customers by making the latest technology accessible and affordable. We believe that everyone deserves access to the tools that can help them learn, create, and connect. We carefully curate our product selection to ensure that every item we sell meets our high standards of quality and performance.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Quality Guaranteed:</strong> We source our products from trusted manufacturers and suppliers to ensure you receive only the best.</li>
          <li><strong>Expert Support:</strong> Our knowledgeable team is always here to help you with any questions or concerns.</li>
          <li><strong>Fast & Secure Shipping:</strong> We partner with reliable carriers to get your order to you quickly and safely.</li>
        </ul>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
