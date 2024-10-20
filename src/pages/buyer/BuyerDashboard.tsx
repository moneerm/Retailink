import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, MessageSquare, TrendingUp } from 'lucide-react';

const BuyerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Buyer Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard icon={<ShoppingBag className="h-6 w-6" />} title="Connected Brands" value="15" />
        <DashboardCard icon={<Package className="h-6 w-6" />} title="Orders This Month" value="7" />
        <DashboardCard icon={<MessageSquare className="h-6 w-6" />} title="Unread Messages" value="3" />
        <DashboardCard icon={<TrendingUp className="h-6 w-6" />} title="Total Spent" value="$5,678" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((order) => (
              <li key={order} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-8 w-8 rounded-full bg-gray-200"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Order #{order}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Brand Name
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/buyer/orders" className="text-indigo-600 hover:text-indigo-900">View all orders</Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Products</h2>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((product) => (
              <li key={product} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-12 w-12 rounded-lg bg-gray-200"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Product Name
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Brand Name
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      $99.99
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/buyer/browse" className="text-indigo-600 hover:text-indigo-900">Browse all products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="rounded-md bg-indigo-500 p-3">
              {icon}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;