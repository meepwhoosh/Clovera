import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlistItems, clearWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-light-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <HeartIcon className="mx-auto h-24 w-24" />
            </div>
            <h2 className="text-3xl font-butler font-bold text-cocoa mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">
              Save your favorite items to your wishlist so you can find them easily later.
            </p>
            <Link to="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-butler font-bold text-cocoa mb-2">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          
          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-sm text-gray-600 hover:text-red-500 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;