import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

const ProductBrowsing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock product data
  const products: Product[] = [
    { id: 1, name: 'Summer Dress', brand: 'Fashion Forward', price: 89.99, image: 'https://source.unsplash.com/random/300x400?summer,dress' },
    { id: 2, name: 'Denim Jacket', brand: 'Urban Edge', price: 129.99, image: 'https://source.unsplash.com/random/300x400?denim,jacket' },
    { id: 3, name: 'Floral Blouse', brand: 'Eco Chic', price: 59.99, image: 'https://source.unsplash.com/random/300x400?floral,blouse' },
    { id: 4, name: 'Leather Boots', brand: 'Urban Edge', price: 199.99, image: 'https://source.unsplash.com/random/300x400?leather,boots' },
    { id: 5, name: 'Silk Scarf', brand: 'Fashion Forward', price: 39.99, image: 'https://source.unsplash.com/random/300x400?silk,scarf' },
    { id: 6, name: 'Linen Pants', brand: 'Eco Chic', price: 79.99, image: 'https://source.unsplash.com/random/300x400?linen,pants' },
  ];

  const categories = ['All', 'Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.name.includes(selectedCategory))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Products</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="relative mb-4 md:mb-0 md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
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
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductBrowsing;