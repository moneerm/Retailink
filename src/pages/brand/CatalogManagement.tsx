import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

const CatalogManagement: React.FC = () => {
  // Mock data (replace with actual API call in a real application)
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Summer Dress', category: 'Dresses', price: 89.99, stock: 50 },
    { id: 2, name: 'Denim Jacket', category: 'Outerwear', price: 129.99, stock: 30 },
    { id: 3, name: 'Floral Blouse', category: 'Tops', price: 59.99, stock: 40 },
  ]);

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Catalog Management</h1>
        <Link
          to="/brand/product"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Product
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600 truncate">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Category: {product.category} | Price: ${product.price.toFixed(2)} | Stock: {product.stock}
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0 flex space-x-2">
                  <Link
                    to={`/brand/product/${product.id}`}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogManagement;