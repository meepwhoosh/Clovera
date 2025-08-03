import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-dusty-rose to-soft-blue">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1563310791-ae647a16498b?q=80&w=1084&auto=format&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-butler font-bold mb-6 leading-tight">
            Clovera
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Curated fashion for the modern individual. 
            Discover timeless pieces that define your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Explore Collection
            </Link>
            <Link 
              to="/#about" 
              className="btn-secondary text-lg px-8 py-4 inline-block bg-white/10 border-white text-white hover:bg-white hover:text-cocoa"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-light-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-butler font-bold text-cocoa mb-4">
              Most Popular
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved pieces, carefully selected for their exceptional quality and timeless appeal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/shop" 
              className="btn-primary"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer - Scarf as Gift */}
      <section className="py-16 bg-soft-lime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-butler font-bold text-cocoa mb-6">
                Scarf as Gift
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                The perfect accessory for any season. Our luxurious scarves make thoughtful gifts 
                that combine style with comfort. Each piece is crafted from premium materials 
                and designed to complement any wardrobe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-terra-cotta rounded-full mr-3"></span>
                  Premium cashmere and silk materials
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-terra-cotta rounded-full mr-3"></span>
                  Versatile designs for any occasion
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-terra-cotta rounded-full mr-3"></span>
                  Beautiful gift packaging included
                </li>
              </ul>
              <Link 
                to="/shop?category=accessories" 
                className="btn-primary"
              >
                Shop Scarves
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596433904747-e8b061219a71?w=600&auto=format&fit=crop"
                alt="Luxury Scarves"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-terra-cotta text-white p-4 rounded-lg shadow-lg">
                <p className="font-butler font-semibold">From $69</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=1934&auto=format&fit=crop"
                alt="About Clovera"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-butler font-bold text-cocoa mb-6">
                About Clovera
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Born from a passion for timeless elegance, Clovera curates fashion pieces 
                that transcend seasons and trends. We believe in the power of quality craftsmanship 
                and sustainable design to create clothing that not only looks beautiful but feels 
                exceptional to wear.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Each piece in our collection is carefully selected for its attention to detail, 
                premium materials, and versatile design. From luxurious knitwear to elegant outerwear, 
                we offer a curated selection that celebrates individuality while maintaining 
                a cohesive aesthetic.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-butler font-bold text-terra-cotta mb-2">500+</div>
                  <div className="text-gray-600">Curated Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-butler font-bold text-terra-cotta mb-2">50+</div>
                  <div className="text-gray-600">Premium Brands</div>
                </div>
              </div>
              <Link 
                to="/shop" 
                className="btn-secondary"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-soft-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-butler font-bold text-cocoa mb-4">
            Stay in Style
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Subscribe to receive updates on new collections, styling tips, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-terra-cotta focus:border-transparent"
            />
            <button className="bg-terra-cotta text-white px-6 py-3 rounded-r-md hover:bg-opacity-90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            No spam, just style. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;