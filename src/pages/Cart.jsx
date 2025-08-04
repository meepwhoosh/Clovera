import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-light-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-butler font-bold text-cocoa mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-butler font-bold text-cocoa mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-butler font-semibold text-cocoa">
                          <Link 
                            to={`/product/${item.id}`}
                            className="hover:text-terra-cotta transition-colors"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        {/* Color */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Color:</span>
                          <span className="text-sm font-medium">{item.selectedColor}</span>
                        </div>
                        
                        {/* Size */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Size:</span>
                          <span className="text-sm font-medium">{item.selectedSize}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="font-butler font-semibold text-cocoa">
                            Rp {(item.price * item.quantity).toFixed(3)}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-gray-600">
                              Rp {item.price} 000 each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-between items-center pt-6 border-t">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/shop"
                className="btn-secondary"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-butler font-semibold text-cocoa mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rp {getCartTotal().toFixed(3)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">
                    {getCartTotal() >= 250000 ? 'Free' : 'Rp 10.000'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Rp {(getCartTotal() * 0.08).toFixed(3)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-cocoa">Total</span>
                    <span className="text-lg font-butler font-bold text-cocoa">
                      Rp {(getCartTotal() + (getCartTotal() >= 100 ? 0 : 10) + (getCartTotal() * 0.08)).toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>

              {getCartTotal() < 100 && (
                <div className="bg-soft-lime p-4 rounded-md mb-6">
                  <p className="text-sm text-gray-700">
                    Add <span className="font-semibold">Rp {(100 - getCartTotal()).toFixed(3)}</span> more to get free shipping!
                  </p>
                </div>
              )}

              <Link
                to="/checkout"
                className="w-full btn-primary block text-center mb-4"
              >
                Proceed to Checkout
              </Link>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span>✓ Secure checkout</span>
                  <span>✓ 30-day returns</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">We accept:</p>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">VISA</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">MC</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">AMEX</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">PP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;