import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusCircle, Edit, Trash2, Search, Filter } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
};

const ProductCatalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Summer Dress', category: 'Dresses', price: 89.99, stock: 50, image: 'https://source.unsplash.com/random/300x300?summer,dress' },
    { id: 2, name: 'Denim Jacket', category: 'Outerwear', price: 129.99, stock: 30, image: 'https://source.unsplash.com/random/300x300?denim,jacket' },
    { id: 3, name: 'Floral Blouse', category: 'Tops', price: 59.99, stock: 40, image: 'https://source.unsplash.com/random/300x300?floral,blouse' },
  ]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === 'All' || product.category === categoryFilter)
    );
  }, [products, searchTerm, categoryFilter]);

  const handleEditProduct = (id: number) => {
    navigate(`/brand/product/edit/${id}`);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const categories = ['All', 'Dresses', 'Outerwear', 'Tops'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <Link
          to="/brand/product/add"
          className="btn-primary flex items-center py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Product
        </Link>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="relative w-64">
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
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
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
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Price: ${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleEditProduct(product.id)}
                  className="btn-secondary flex items-center text-sm py-1 px-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  <Edit className="mr-1 h-4 w-4" />
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn-danger flex items-center text-sm py-1 px-2 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  <Trash2 className="mr-1 h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;