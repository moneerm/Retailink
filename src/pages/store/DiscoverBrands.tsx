import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

type Brand = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

const DiscoverBrands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock brand data
  const brands: Brand[] = [
    { id: 1, name: 'Fashion Forward', category: 'Women\'s Wear', description: 'Trendsetting styles for the modern woman', image: 'https://source.unsplash.com/random/300x200?fashion' },
    { id: 2, name: 'Urban Edge', category: 'Streetwear', description: 'Bold and edgy street fashion', image: 'https://source.unsplash.com/random/300x200?streetwear' },
    { id: 3, name: 'Eco Chic', category: 'Sustainable', description: 'Stylish and eco-friendly fashion', image: 'https://source.unsplash.com/random/300x200?sustainable' },
    { id: 4, name: 'Luxe Label', category: 'Luxury', description: 'Premium fashion for the discerning customer', image: 'https://source.unsplash.com/random/300x200?luxury' },
    { id: 5, name: 'Active Life', category: 'Activewear', description: 'Performance wear for active lifestyles', image: 'https://source.unsplash.com/random/300x200?activewear' },
    { id: 6, name: 'Classic Couture', category: 'Men\'s Wear', description: 'Timeless styles for the modern gentleman', image: 'https://source.unsplash.com/random/300x200?menswear' },
  ];

  const categories = ['All', 'Women\'s Wear', 'Men\'s Wear', 'Streetwear', 'Sustainable', 'Luxury', 'Activewear'];

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || brand.category === selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Discover Brands</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="relative mb-4 md:mb-0 md:w-1/3">
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <Link key={brand.id} to={`/brand/${brand.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
              <p className="text-gray-600 mb-2">{brand.category}</p>
              <p className="text-gray-500">{brand.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverBrands;