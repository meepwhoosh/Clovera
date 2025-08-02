import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart with default selections (first color and size)
    addToCart(product, product.colors[0], product.sizes[0]);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="card overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                <button
                  onClick={handleQuickAdd}
                  className="bg-white text-cocoa p-2 rounded-full hover:bg-terra-cotta hover:text-white transition-all duration-200 shadow-lg"
                  title="Quick Add to Cart"
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlistClick}
              className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200"
              title={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              {isInWishlist(product.id) ? (
                <HeartSolidIcon className="h-5 w-5 text-terra-cotta" />
              ) : (
                <HeartIcon className="h-5 w-5 text-cocoa" />
              )}
            </button>

            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 left-3 bg-terra-cotta text-white px-2 py-1 text-xs font-medium rounded">
                Featured
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-butler text-lg font-medium text-cocoa mb-2 group-hover:text-terra-cotta transition-colors">
              {product.name}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 capitalize">
              {product.category}
            </p>

            {/* Colors */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs text-gray-500">Colors:</span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{
                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                     color.toLowerCase() === 'black' ? '#000000' :
                                     color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#6b7280' :
                                     color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                     color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                     color.toLowerCase() === 'brown' ? '#8b4513' :
                                     color.toLowerCase() === 'cream' ? '#fffdd0' :
                                     color.toLowerCase() === 'pink' ? '#ffc0cb' :
                                     color.toLowerCase() === 'blue' ? '#3b82f6' :
                                     color.toLowerCase() === 'green' ? '#10b981' :
                                     color.toLowerCase() === 'dusty rose' ? '#E5CBCC' :
                                     color.toLowerCase() === 'camel' ? '#c19a6b' :
                                     color.toLowerCase() === 'olive' ? '#808000' :
                                     color.toLowerCase() === 'sage' ? '#9caf88' :
                                     color.toLowerCase() === 'champagne' ? '#f7e7ce' :
                                     color.toLowerCase() === 'burgundy' ? '#800020' :
                                     color.toLowerCase() === 'khaki' ? '#c3b091' :
                                     color.toLowerCase() === 'tan' ? '#d2b48c' :
                                     '#d1d5db'
                    }}
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-butler font-semibold text-cocoa">
                ${product.price}
              </span>
              
              {/* Sizes */}
              <div className="text-xs text-gray-500">
                {product.sizes.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;