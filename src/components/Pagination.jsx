import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
          ${currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-cocoa hover:text-terra-cotta hover:bg-light-stone'
          }
        `}
      >
        <ChevronLeftIcon className="h-4 w-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${currentPage === page
                ? 'bg-terra-cotta text-white'
                : 'text-cocoa hover:text-terra-cotta hover:bg-light-stone'
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
          ${currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-cocoa hover:text-terra-cotta hover:bg-light-stone'
          }
        `}
      >
        Next
        <ChevronRightIcon className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

export default Pagination;