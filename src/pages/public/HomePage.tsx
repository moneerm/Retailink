import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Briefcase, FileText, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to Retailink
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your wholesale process. Connect brands with retailers effortlessly.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <Link
              to="/login"
              className="btn-primary flex items-center bg-white text-indigo-600 hover:bg-indigo-50"
            >
              <Briefcase className="mr-2" />
              Brand Login
            </Link>
            <Link
              to="/login"
              className="btn-secondary flex items-center bg-indigo-500 text-white hover:bg-indigo-400"
            >
              <ShoppingBag className="mr-2" />
              Retailer Login
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8 text-indigo-400" />}
              title="Digital Showroom"
              description="Create stunning digital showrooms to showcase your products."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-indigo-400" />}
              title="Line Sheets"
              description="Generate professional line sheets with a single click."
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-indigo-400" />}
              title="Order Management"
              description="Streamline your order process from inquiry to fulfillment."
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 text-indigo-400" />}
              title="Retailer Network"
              description="Connect with a vast network of retailers worldwide."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-indigo-100">{description}</p>
    </div>
  );
};

export default HomePage;