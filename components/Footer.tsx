import React from 'react';
import { View } from '../types';
import { useAuth } from '../context/AuthContext';

interface FooterProps {
  navigateTo: (view: View) => void;
}

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-gray-500">
    <span className="sr-only">{href}</span>
    {children}
  </a>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { authStatus } = useAuth();
  const handleNav = (e: React.MouseEvent, view: View) => {
    e.preventDefault();
    navigateTo(view);
  };
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Tahaqiq Tech</h2>
            <p className="text-gray-500 dark:text-gray-300 text-base">Your trusted source for the latest in tech, from laptops to smartphones and accessories.</p>
            <div className="flex space-x-6">
              <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.714.01 3.668.053 1.054.048 1.771.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.656.417 1.373.465 2.427C21.99 9.59 22 9.875 22 12.315s-.01 2.714-.053 3.668c-.048 1.054-.218 1.771-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.656.247-1.373.417-2.427.465C15.03 21.99 14.744 22 12.315 22s-2.714-.01-3.668-.053c-1.054-.048-1.771-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.656-.417-1.373-.465-2.427C2.01 15.03 2 14.744 2 12.315s.01-2.714.053-3.668c.048-1.054.218-1.771.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.228 2.52c.656-.247 1.373-.417 2.427-.465C8.69 2.01 8.974 2 11.315 2h1zm-1.803 2.872c-2.43 0-2.714.01-3.668.053-1.054.048-1.771.218-2.427.465a4.902 4.902 0 01-1.772 1.153 4.902 4.902 0 01-1.153 1.772c-.247.656-.417 1.373-.465 2.427C2.01 9.59 2 9.875 2 12.315s.01 2.714.053 3.668c.048 1.054.218 1.771.465 2.427a4.902 4.902 0 011.153 1.772 4.902 4.902 0 011.772 1.153c.656.247 1.373.417 2.427.465C9.59 21.99 9.875 22 12.315 22s2.714-.01 3.668-.053c1.054-.048 1.771-.218 2.427-.465a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.656.417-1.373-.465-2.427C21.99 15.03 22 14.744 22 12.315s-.01-2.714-.053-3.668c-.048-1.054-.218-1.771-.465-2.427a4.902 4.902 0 01-1.153-1.772A4.902 4.902 0 0117.772 5.228c-.656-.247-1.373-.417-2.427-.465C14.41 4.88 14.126 4.872 11.685 4.872h-2.17zM12 8.167a4.148 4.148 0 100 8.296 4.148 4.148 0 000-8.296zM12 15a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm4.94-7.833a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg></SocialIcon>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" onClick={(e) => handleNav(e, { page: 'faq' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">FAQ</a></li>
                  <li><a href="#" onClick={(e) => handleNav(e, { page: 'contact' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Order Tracking</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" onClick={(e) => handleNav(e, { page: 'about' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a></li>
                  {authStatus === 'guest' ? (
                    <>
                      <li><a href="#" onClick={(e) => handleNav(e, { page: 'login' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Login</a></li>
                      <li><a href="#" onClick={(e) => handleNav(e, { page: 'signup' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign Up</a></li>
                    </>
                  ) : authStatus === 'admin' && (
                     <li><a href="#" onClick={(e) => handleNav(e, { page: 'admin' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Admin Dashboard</a></li>
                   )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" onClick={(e) => handleNav(e, { page: 'policy' })} className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Refund Policy</a></li>
                  <li><a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Stay Updated</h3>
                 <p className="text-base text-gray-500 dark:text-gray-300 mt-4">Subscribe to our newsletter to get the latest deals.</p>
                 <form className="mt-4 sm:flex sm:max-w-md">
                   <label htmlFor="email-address" className="sr-only">Email address</label>
                   <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" />
                   <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                     <button type="submit" className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       Subscribe
                     </button>
                   </div>
                 </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-base text-gray-400">&copy; 2024 Tahaqiq Tech Store. All rights reserved.</p>
           <div className="flex space-x-6">
              <p className="text-sm text-gray-500">
                Contact: <a href="mailto:yaqubuwaliyu@gmail.com" className="hover:text-indigo-500">yaqubuwaliyu@gmail.com</a> | 0556367358
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;