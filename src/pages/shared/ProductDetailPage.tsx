import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data (replace with actual API call in a real application)
  const product = {
    id: parseInt(id || '0'),
    name: 'Summer Dress',
    brand: 'Fashion Forward',
    price: 89.99,
    description: 'A beautiful summer dress made from lightweight, breathable fabric. Perfect for warm days and outdoor events.',
    image: 'https://source.unsplash.com/random/800x600?summer,dress',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Pink'],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
          <p className="text-2xl font-bold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Sizes</h2>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button key={size} className="px-3 py-1 border border-gray-300 rounded-md hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Colors</h2>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button key={color} className="px-3 py-1 border border-gray-300 rounded-md hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
            <ShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;