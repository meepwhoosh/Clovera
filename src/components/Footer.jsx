import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cocoa text-light-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-butler font-bold mb-4">Clovera</h3>
            <p className="text-dusty-rose mb-6 max-w-md">
              Curated fashion for the modern individual. Discover timeless
              pieces that blend contemporary style with classic elegance.
            </p>
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="#"
                className="text-dusty-rose hover:text-terra-cotta transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="#"
                className="text-dusty-rose hover:text-terra-cotta transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.354 2 11.75c0 3.717 2.374 6.9 5.738 8.13-.08-.691-.15-1.75.032-2.505.165-.705 1.06-4.493 1.06-4.493s-.27-.543-.27-1.344c0-1.259.73-2.2 1.638-2.2.773 0 1.147.581 1.147 1.277 0 .779-.497 1.944-.753 3.025-.215.905.455 1.643 1.35 1.643 1.62 0 2.866-1.712 2.866-4.184 0-2.188-1.573-3.722-3.822-3.722-2.604 0-4.135 1.951-4.135 3.97 0 .782.301 1.62.678 2.074a.273.273 0 0 1 .063.26c-.07.286-.226.905-.257 1.03-.04.17-.13.207-.3.126-1.118-.521-1.82-2.158-1.82-3.475 0-2.828 2.058-5.43 5.938-5.43 3.116 0 5.536 2.22 5.536 5.187 0 3.096-1.951 5.592-4.662 5.592-.91 0-1.768-.472-2.06-1.032l-.56 2.135c-.2.779-.74 1.751-1.104 2.345.83.257 1.705.396 2.617.396 5.523 0 10-4.354 10-9.75S17.523 2 12 2Z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-dusty-rose hover:text-terra-cotta transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.162 5.656c-.793.352-1.644.59-2.538.698a4.456 4.456 0 0 0 1.958-2.46 9.019 9.019 0 0 1-2.828 1.078 4.496 4.496 0 0 0-7.66 4.1 12.752 12.752 0 0 1-9.29-4.71 4.5 4.5 0 0 0 1.39 6.015A4.464 4.464 0 0 1 2.8 9.057v.057a4.5 4.5 0 0 0 3.605 4.415 4.495 4.495 0 0 1-2.015.077 4.5 4.5 0 0 0 4.2 3.125A9.022 9.022 0 0 1 2 18.078a12.733 12.733 0 0 0 6.92 2.027c8.306 0 12.85-6.874 12.85-12.83 0-.196-.005-.392-.013-.587A9.15 9.15 0 0 0 22.162 5.656Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
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
                <a
                  href="/home"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="/home"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="/home"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="/home"
                  className="text-dusty-rose hover:text-white transition-colors"
                >
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
              Subscribe to receive updates on new collections and exclusive
              offers.
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
            © 2024 Clovera. All rights reserved. Designed with love for fashion
            enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
