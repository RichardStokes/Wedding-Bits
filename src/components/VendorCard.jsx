import React from 'react';
import { Star, MapPin, Tag } from 'lucide-react';

const VendorCard = ({ vendor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{vendor.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{vendor.category} - {vendor.price}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
        <span>{vendor.rating}</span>
        <MapPin className="w-4 h-4 text-gray-400 ml-3 mr-1" />
        <span>{vendor.location}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {vendor.tags.map((tag, index) => (
          <span key={index} className="bg-champagne text-gray-700 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        <button className="flex-1 bg-rose-gold text-white py-2 px-3 rounded-lg text-sm hover:bg-rose-600 transition-colors">
          Contact
        </button>
        <button className="flex-1 border border-sage-green text-sage-green py-2 px-3 rounded-lg text-sm hover:bg-sage-green hover:text-white transition-colors">
          View
        </button>
      </div>
    </div>
  );
};

export default VendorCard;