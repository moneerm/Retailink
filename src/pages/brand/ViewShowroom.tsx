import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Showroom = {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  products: Product[];
};

const ViewShowroom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showroom, setShowroom] = useState<Showroom | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the showroom data from an API
    // For this demo, we'll use mock data
    const mockShowrooms: Record<string, Showroom> = {
      '1': {
        id: 1,
        name: 'Summer Collection 2024',
        description: 'Explore our latest summer styles, perfect for beach days and warm evenings.',
        coverImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        products: [
          { id: 1, name: 'Floral Sundress', price: 89.99, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 2, name: 'Linen Shorts', price: 59.99, image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 3, name: 'Straw Hat', price: 29.99, image: 'https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        ]
      },
      '2': {
        id: 2,
        name: 'Autumn Vibes',
        description: 'Cozy and stylish pieces for the fall season.',
        coverImage: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        products: [
          { id: 4, name: 'Knit Sweater', price: 79.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 5, name: 'Leather Boots', price: 129.99, image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 6, name: 'Plaid Scarf', price: 34.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        ]
      },
      '3': {
        id: 3,
        name: 'Winter Wonderland',
        description: 'Stay warm and fashionable with our winter collection.',
        coverImage: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        products: [
          { id: 7, name: 'Puffer Jacket', price: 149.99, image: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 8, name: 'Wool Beanie', price: 24.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
          { id: 9, name: 'Thermal Gloves', price: 39.99, image: 'https://images.unsplash.com/photo-1545170120-fb4a2e1d4d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        ]
      }
    };

    setShowroom(mockShowrooms[id || '1']);
  }, [id]);

  if (!showroom) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/brand/showroom" className="text-indigo-600 hover:text-indigo-900">
          &larr; Back to Digital Showrooms
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="relative h-64">
          <img src={showroom.coverImage} alt={showroom.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{showroom.name}</h1>
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{showroom.description}</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroom.products.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="px-4 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewShowroom;