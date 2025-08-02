import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { categories, colors, sizes } from '../data/products';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  expandedSections,
  onToggleSection 
}) => {
  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleColorChange = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const handlePriceChange = (priceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  const priceRanges = [
    { label: 'Under $50', value: [0, 50] },
    { label: '$50 - $100', value: [50, 100] },
    { label: '$100 - $200', value: [100, 200] },
    { label: '$200 - $300', value: [200, 300] },
    { label: 'Over $300', value: [300, 1000] }
  ];

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
                   '#d1d5db'
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-butler font-semibold text-cocoa">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-terra-cotta hover:text-cocoa transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => onToggleSection('categories')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-cocoa">Category</h4>
          {expandedSections.categories ? (
            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded border-gray-300 text-terra-cotta focus:ring-terra-cotta"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <button
          onClick={() => onToggleSection('colors')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-cocoa">Color</h4>
          {expandedSections.colors ? (
            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.colors && (
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className="rounded border-gray-300 text-terra-cotta focus:ring-terra-cotta"
                />
                <div
                  className="ml-2 w-4 h-4 rounded-full border border-gray-300"
                  style={getColorStyle(color)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  {color}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <button
          onClick={() => onToggleSection('sizes')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-cocoa">Size</h4>
          {expandedSections.sizes ? (
            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.sizes && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label key={size} className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className="sr-only"
                />
                <div className={`
                  w-10 h-10 border-2 rounded-md flex items-center justify-center text-sm cursor-pointer transition-all
                  ${filters.sizes.includes(size) 
                    ? 'border-terra-cotta bg-terra-cotta text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-terra-cotta'
                  }
                `}>
                  {size}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => onToggleSection('price')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-cocoa">Price</h4>
          {expandedSections.price ? (
            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange && 
                    filters.priceRange[0] === range.value[0] && 
                    filters.priceRange[1] === range.value[1]}
                  onChange={() => handlePriceChange(range.value)}
                  className="rounded-full border-gray-300 text-terra-cotta focus:ring-terra-cotta"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;