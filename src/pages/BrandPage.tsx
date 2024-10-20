import React from 'react';
import { useParams } from 'react-router-dom';

const BrandPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder data (replace with actual API call)
  const brandData = {
    name: 'Fashion Forward',
    description: 'Trendsetting styles for the modern fashionista',
    logo: 'https://source.unsplash.com/random/100x100?logo',
    coverImage: 'https://source.unsplash.com/random/1200x400?fashion',
    collections: [
      { id: 1, name: 'Summer 2024', image: 'https://source.unsplash.com/random/300x200?summer,fashion' },
      { id: 2, name: 'Autumn Vibes', image: 'https://source.unsplash.com/random/300x200?autumn,fashion' },
      { id: 3, name: 'Winter Wonderland', image: 'https://source.unsplash.com/random/300x200?winter,fashion' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${brandData.coverImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <img src={brandData.logo} alt={brandData.name} className="w-24 h-24 rounded-full border-4 border-white" />
          <h1 className="text-3xl font-bold text-white mt-2">{brandData.name}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-xl mb-8">{brandData.description}</p>
        <h2 className="text-2xl font-bold mb-4">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandData.collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={collection.image} alt={collection.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{collection.name}</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;