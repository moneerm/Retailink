import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, MessageSquare, Bell, ShoppingCart, DollarSign, Store } from 'lucide-react';

const data = [
  { name: 'Store A', orders: 40 },
  { name: 'Store B', orders: 30 },
  { name: 'Store C', orders: 20 },
  { name: 'Store D', orders: 27 },
  { name: 'Store E', orders: 18 },
];

const BrandDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Brand Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard icon={<DollarSign className="h-6 w-6" />} title="Total Revenue" value="$125,430" onClick={() => navigate('/brand/sales')} />
        <DashboardCard icon={<ShoppingCart className="h-6 w-6" />} title="Total Orders" value="1,234" onClick={() => navigate('/brand/orders')} />
        <DashboardCard icon={<Store className="h-6 w-6" />} title="Partner Stores" value="25" onClick={() => navigate('/brand/partnerships')} />
        <DashboardCard icon={<Package className="h-6 w-6" />} title="Products" value="150" onClick={() => navigate('/brand/catalog')} />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Orders by Store</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Partnership Requests</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-medium">Fashion Boutique</h3>
                  <p className="text-sm text-gray-500">Requested on 2024-03-20</p>
                </div>
                <Link to="/brand/partnerships" className="text-indigo-600 hover:text-indigo-900">
                  View
                </Link>
              </div>
            </li>
            <li className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-medium">Trendy Store</h3>
                  <p className="text-sm text-gray-500">Requested on 2024-03-19</p>
                </div>
                <Link to="/brand/partnerships" className="text-indigo-600 hover:text-indigo-900">
                  View
                </Link>
              </div>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/brand/partnerships" className="text-indigo-600 hover:text-indigo-900">View all requests</Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/brand/showroom/create" className="btn-primary text-center py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700">Create Showroom</Link>
          <Link to="/brand/line-sheet/generate" className="btn-secondary text-center py-2 px-4 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">Generate Line Sheet</Link>
          <Link to="/brand/product/add" className="btn-primary text-center py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700">Add New Product</Link>
          <Link to="/brand/orders" className="btn-secondary text-center py-2 px-4 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">Manage Orders</Link>
        </div>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string; onClick: () => void }> = ({ icon, title, value, onClick }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300" onClick={onClick}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="rounded-md bg-indigo-500 p-3 text-white">
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

export default BrandDashboard;