import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly!");
    // Here you would typically handle form submission, e.g., send an email or save to a database.
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          We'd love to hear from you! Whether you have a question about our products, an order, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" required className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" required className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Your Message" rows={5} required className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Address</h3>
            <p>Northern Region, Ghana, Tamale</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Email</h3>
            <a href="mailto:yaqubuwaliyu@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">yaqubuwaliyu@gmail.com</a>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Phone</h3>
            <p>0556367358 / 0549941427</p>
          </div>
           <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Business Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 3pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
