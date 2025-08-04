import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-light-stone flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-butler font-bold text-cocoa mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
  };

  const getColorStyle = (color) => ({
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
                                     color.toLowerCase() === 'red' ? '#ff0000' :
                                     color.toLowerCase() === 'light blue' ? '#add8e6' :
                                     color.toLowerCase() === 'olive' ? '#808000' :
                                     color.toLowerCase() === 'lavender' ? '#e6e6fa' :
                                     color.toLowerCase() === 'lilac' ? '#c8a2c8' :
                                     color.toLowerCase() === 'yellow' ? '#ffff00' :
                                     color.toLowerCase() === 'mint green' ? '#98ff98' :
                                     color.toLowerCase() === 'khaki' ? '#c3b091' :
                                     color.toLowerCase() === 'mustard' ? '#ffdb58' :
                                     color.toLowerCase() === 'orange' ? '#ffa500' :
                                     color.toLowerCase() === 'dusty rose' ? '#d6a5a1' :
                                     color.toLowerCase() === 'hot pink' ? '#ff69b4' :
                                     color.toLowerCase() === 'nude' ? '#f2d6d0' :
                                     color.toLowerCase() === 'purple' ? '#800080' :
                                     color.toLowerCase() === 'pastel green' ? '#77dd77' :
                                     color.toLowerCase() === 'mauve' ? '#e0b0ff' :
                                     color.toLowerCase() === 'camel' ? '#c19a6b' :
                                     color.toLowerCase() === 'champagne' ? '#f7e7ce' :
                                     color.toLowerCase() === 'electric blue' ? '#7df9ff' :
                                     color.toLowerCase() === 'metallic silver' ? '#c0c0c0' :
                                     color.toLowerCase() === 'dusty pink' ? '#d8a5a1' :
                                     color.toLowerCase() === 'peach' ? '#ffcc99' :
                                     color.toLowerCase() === 'sage' ? '#9caf88' :
                                     color.toLowerCase() === 'coral' ? '#ff7f50' :
                                     color.toLowerCase() === 'ivory' ? '#fffff0' :
                                     color.toLowerCase() === 'sky blue' ? '#87ceeb' :
                                     color.toLowerCase() === 'gold' ? '#ffd700' :
                                     color.toLowerCase() === 'clear' ? '#ffffff' :
                                     color.toLowerCase() === 'leopard print' ? '#d09800' :
                                     color.toLowerCase() === 'forest green' ? '#228b22' :
                                     color.toLowerCase() === 'maroon' ? '#800000' :
                                     '#d1d5db'
  });

  return (
    <div className="min-h-screen bg-light-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-terra-cotta">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-terra-cotta">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-terra-cotta capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Additional images placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image}
                    alt={`${product.name} view ${index}`}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-butler font-bold text-cocoa">
                  {product.name}
                </h1>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {isInWishlist(product.id) ? (
                    <HeartSolidIcon className="h-6 w-6 text-terra-cotta" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>
              </div>
              
              <p className="text-gray-600 capitalize mb-4">{product.category}</p>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(24 reviews)</span>
              </div>
              
              <div className="text-3xl font-butler font-bold text-cocoa mb-6">
                Rp {product.price}.000
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="font-semibold text-cocoa mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                This {product.name.toLowerCase()} is crafted from premium materials and designed 
                for both comfort and style. Perfect for any occasion, it features timeless 
                details that make it a versatile addition to your wardrobe. Each piece is 
                carefully constructed to ensure lasting quality and exceptional fit.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-cocoa mb-3">
                Color: <span className="font-normal">{selectedColor}</span>
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      w-8 h-8 rounded-full border-2 transition-all
                      ${selectedColor === color 
                        ? 'border-terra-cotta ring-2 ring-terra-cotta ring-offset-2' 
                        : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                    style={getColorStyle(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-cocoa mb-3">
                Size: <span className="font-normal">{selectedSize}</span>
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-2 px-3 border rounded-md text-sm font-medium transition-all
                      ${selectedSize === size
                        ? 'border-terra-cotta bg-terra-cotta text-white'
                        : 'border-gray-300 text-gray-700 hover:border-terra-cotta'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <a href="#" className="hover:text-terra-cotta">Size Guide</a>
              </p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-cocoa mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Add to Cart - Rp {(product.price * quantity).toFixed(3)}</span>
              </button>
              
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Free shipping on orders over Rp 250.000</p>
                <p>✓ 30-day returns</p>
                <p>✓ Secure checkout</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-cocoa mb-3">
                  Product Details
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="text-gray-700 space-y-2">
                  <p>• Premium quality materials</p>
                  <p>• Professional dry clean recommended</p>
                  <p>• Made with sustainable practices</p>
                  <p>• Model is 5'8" wearing size S</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-butler font-bold text-cocoa mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;