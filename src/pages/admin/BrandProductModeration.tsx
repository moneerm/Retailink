import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  status: 'pending' | 'approved' | 'rejected';
};

const BrandProductModeration: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Summer Dress', brand: 'Fashion Forward', category: 'Dresses', price: 89.99, status: 'pending' },
    { id: 2, name: 'Denim Jacket', brand: 'Urban Edge', category: 'Outerwear', price: 129.99, status: 'pending' },
    { id: 3, name: 'Floral Blouse', brand: 'Eco Chic', category: 'Tops', price: 59.99, status: 'pending' },
  ]);

  const handleApprove = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, status: 'approved' } : product
    ));
  };

  const handleReject = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, status: 'rejected' } : product
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Brand Product Moderation</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600 truncate">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Brand: {product.brand} | Category: {product.category} | Price: ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex space-x-2">
                      {product.status === 'pending' ? (
                        <>
                          <button
                            onClick={() => handleApprove(product.id)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(product.id)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          product.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandProductModeration;