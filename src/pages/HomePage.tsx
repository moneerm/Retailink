import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to FabricLink</h1>
        <p className="text-xl mb-8">Connect fashion brands with retail stores</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/store-dashboard"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-600 transition duration-300"
          >
            <Store className="mr-2" />
            Sign in as Store
          </Link>
          <Link
            to="/brand-dashboard"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-purple-600 transition duration-300"
          >
            <ShoppingBag className="mr-2" />
            Sign in as Brand
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;