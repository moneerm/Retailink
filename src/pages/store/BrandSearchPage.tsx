import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

type Brand = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const BrandSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [brands, setBrands] = useState<Brand[]>([
    { id: 1, name: 'Fashion Forward', description: 'Trendsetting styles for the modern fashionista', image: 'https://source.unsplash.com/random/400x300?fashion' },
    { id: 2, name: 'Urban Edge', description: 'Streetwear with attitude', image: 'https://source.unsplash.com/random/400x300?streetwear' },
    { id: 3, name: 'Eco Chic', description: 'Sustainable fashion for a better world', image: 'https://source.unsplash.com/random/400x300?sustainable' },
  ]);

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Discover Brands</h1>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <Link
                to={`/brand/${brand.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSearchPage;