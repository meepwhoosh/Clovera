import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import { products, getProductsByPage } from '../data/products';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    priceRange: null
  });
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    colors: true,
    sizes: true,
    price: true
  });

  const itemsPerPage = 12;
  const totalPages = 3;

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        categories: [category]
      }));
    }
  }, [searchParams]);

  // Filter products based on current filters
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Apply price filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    return filtered;
  };

  // Sort products
  const getSortedProducts = (productsToSort) => {
    const sorted = [...productsToSort];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'featured':
      default:
        return sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
  };

  const filteredProducts = getFilteredProducts();
  const sortedProducts = getSortedProducts(filteredProducts);
  
  // Paginate results
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  const totalFilteredPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: [],
      priceRange: null
    });
    setCurrentPage(1);
    setSearchParams({});
  };

  const handleToggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-light-stone">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-dusty-rose to-soft-blue">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-butler font-bold mb-4">
              Shop Collection
            </h1>
            <p className="text-lg md:text-xl font-light">
              Discover your perfect style from our curated selection
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters
              {(filters.categories.length > 0 || filters.colors.length > 0 || filters.sizes.length > 0 || filters.priceRange) && (
                <span className="ml-2 bg-terra-cotta text-white text-xs rounded-full px-2 py-1">
                  Active
                </span>
              )}
            </button>
          </div>

          {/* Filter Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-1/4`}>
            {showFilters && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-butler font-semibold text-cocoa">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    expandedSections={expandedSections}
                    onToggleSection={handleToggleSection}
                  />
                </div>
              </div>
            )}
            <div className="hidden lg:block">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                expandedSections={expandedSections}
                onToggleSection={handleToggleSection}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} products
              </p>
              
              <div className="flex items-center space-x-4">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-terra-cotta focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalFilteredPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalFilteredPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;