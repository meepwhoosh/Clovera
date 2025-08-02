import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cocoa text-light-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-butler font-bold mb-4">Clovera</h3>
            <p className="text-dusty-rose mb-6 max-w-md">
              Curated fashion for the modern individual. Discover timeless pieces 
              that blend contemporary style with classic elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dusty-rose hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-dusty-rose hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-dusty-rose hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dusty-rose hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-dusty-rose hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-dusty-rose mt-8 pt-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-dusty-rose mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-light-stone text-cocoa rounded-l-md focus:outline-none focus:ring-2 focus:ring-terra-cotta"
              />
              <button className="bg-terra-cotta text-white px-6 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dusty-rose mt-8 pt-8 text-center">
          <p className="text-dusty-rose">
            © 2024 Clovera. All rights reserved. Designed with love for fashion enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;