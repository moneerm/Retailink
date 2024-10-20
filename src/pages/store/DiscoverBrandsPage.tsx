import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star } from 'lucide-react';

type Brand = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  productCount: number;
};

const DiscoverBrandsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock brand data with demo pictures
  const brands: Brand[] = [
    { id: 1, name: 'Fashion Forward', category: 'Women\'s Wear', description: 'Trendsetting styles for the modern woman', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.5, productCount: 120 },
    { id: 2, name: 'Urban Edge', category: 'Streetwear', description: 'Bold and edgy street fashion', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.2, productCount: 85 },
    { id: 3, name: 'Eco Chic', category: 'Sustainable', description: 'Stylish and eco-friendly fashion', image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.8, productCount: 95 },
    { id: 4, name: 'Luxe Label', category: 'Luxury', description: 'Premium fashion for the discerning customer', image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.7, productCount: 150 },
    { id: 5, name: 'Active Life', category: 'Activewear', description: 'Performance wear for active lifestyles', image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.4, productCount: 110 },
    { id: 6, name: 'Classic Couture', category: 'Men\'s Wear', description: 'Timeless styles for the modern gentleman', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', rating: 4.6, productCount: 130 },
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
          <Link key={brand.id} to={`/store/brand/${brand.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
              <p className="text-gray-600 mb-2">{brand.category}</p>
              <p className="text-gray-500 mb-2">{brand.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-gray-700">{brand.rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-600">{brand.productCount} products</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverBrandsPage;