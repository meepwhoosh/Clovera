import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user , logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const { wishlistItems } = useWishlist();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/#about' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="bg-light-stone border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-butler font-bold text-cocoa">
              Clovera
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-terra-cotta border-b-2 border-terra-cotta pb-1'
                    : 'text-cocoa hover:text-terra-cotta'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-cocoa hover:text-terra-cotta transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            <Link 
              to="/wishlist" 
              className="text-cocoa hover:text-terra-cotta transition-colors relative"
            >
              <HeartIcon className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-terra-cotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/cart" 
              className="text-cocoa hover:text-terra-cotta transition-colors relative"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-terra-cotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="text-cocoa hover:text-terra-cotta transition-colors">
                  <UserIcon className="h-6 w-6" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {currentUser.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-cocoa hover:text-terra-cotta transition-colors"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cocoa hover:text-terra-cotta transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-terra-cotta'
                      : 'text-cocoa hover:text-terra-cotta'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Link 
                  to="/wishlist" 
                  className="text-cocoa hover:text-terra-cotta transition-colors relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HeartIcon className="h-6 w-6" />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-terra-cotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                
                <Link 
                  to="/cart" 
                  className="text-cocoa hover:text-terra-cotta transition-colors relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-terra-cotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Link>

                {currentUser ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-gray-600">{currentUser.email}</span>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-cocoa hover:text-terra-cotta transition-colors text-left"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className="text-cocoa hover:text-terra-cotta transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserIcon className="h-6 w-6" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;