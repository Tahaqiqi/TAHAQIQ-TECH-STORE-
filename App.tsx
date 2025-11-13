import React, { useState, useCallback } from 'react';
import { View } from './types';
import { products } from './data/mockData';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import FaqPage from './pages/FaqPage';
import WishlistPage from './pages/WishlistPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import PolicyPage from './pages/PolicyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const AppContent: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'home' });
  const [isCartOpen, setCartOpen] = useState(false);
  const { authStatus } = useAuth();

  const navigateTo = useCallback((newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (view.page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'category':
        return <CategoryPage category={view.category} products={products.filter(p => p.category === view.category.id)} navigateTo={navigateTo} />;
      case 'product':
        return <ProductDetailPage product={view.product} navigateTo={navigateTo} />;
      case 'checkout':
        return <CheckoutPage navigateTo={navigateTo} />;
      case 'order-confirmation':
        return <OrderConfirmationPage navigateTo={navigateTo} />;
      case 'faq':
        return <FaqPage />;
      case 'policy':
        return <PolicyPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'wishlist':
        return <WishlistPage navigateTo={navigateTo} />;
      case 'admin':
        return authStatus === 'admin' ? <AdminPage /> : <LoginPage navigateTo={navigateTo} />;
      case 'login':
        return <LoginPage navigateTo={navigateTo} />;
      case 'signup':
        return <SignUpPage navigateTo={navigateTo} />;
      case 'account':
        return <AccountPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header navigateTo={navigateTo} onCartClick={() => setCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} navigateTo={navigateTo} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}


const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;