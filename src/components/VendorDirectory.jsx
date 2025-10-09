import React from 'react';
import VendorCard from './VendorCard';
import { Search, MapPin, Tag, Filter } from 'lucide-react';

const VendorDirectory = () => {
  const allVendors = [
    { id: 1, name: 'Elegant Moments Photography', category: 'Photography', price: '€2,500', rating: 4.9, location: 'Dublin', tags: ['Wedding', 'Portrait', 'Irish'] },
    { id: 2, name: 'Garden Party Catering', category: 'Catering', price: '€85/person', rating: 4.8, location: 'Cork', tags: ['Farm-to-table', 'Vegan Options', 'Irish'] },
    { id: 3, name: 'Harmony Wedding Band', category: 'Entertainment', price: '€1,200', rating: 4.7, location: 'Galway', tags: ['Live Music', 'DJ Services', 'Irish'] },
    { id: 4, name: 'Floral Dreams', category: 'Florist', price: '€1,000', rating: 4.9, location: 'Limerick', tags: ['Bouquets', 'Centerpieces', 'Irish'] },
    { id: 5, name: 'The Bridal Boutique', category: 'Attire', price: '€2,000', rating: 4.6, location: 'Belfast', tags: ['Dresses', 'Suits', 'Irish'] },
    { id: 6, name: 'Celtic Cakes', category: 'Bakery', price: '€700', rating: 4.9, location: 'Kerry', tags: ['Wedding Cakes', 'Custom Designs', 'Irish'] },
  ];

  return (
    <div className="min-h-screen bg-champagne p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-rose-gold">Vendor Directory</h1>
        <button className="bg-sage-green text-white py-2 px-4 rounded-lg hover:bg-deep-sage transition-colors flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </header>

      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search vendors by name, category, or location..."
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-rose-gold focus:border-rose-gold"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allVendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorDirectory;


