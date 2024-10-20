import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Store, MessageSquare, Bell, ShoppingCart, Package } from 'lucide-react';

const data = [
  { name: 'Store A', orders: 40 },
  { name: 'Store B', orders: 30 },
  { name: 'Store C', orders: 20 },
  { name: 'Store D', orders: 27 },
  { name: 'Store E', orders: 18 },
];

const BrandDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Brand Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <DashboardCard icon={<Store />} title="Partner Stores" value="25" />
        <DashboardCard icon={<Store />} title="Partnership Requests" value="5" />
        <DashboardCard icon={<Package />} title="Products" value="150" />
        <DashboardCard icon={<ShoppingCart />} title="Orders" value="42" />
        <DashboardCard icon={<MessageSquare />} title="Messages" value="8" />
      </div>
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
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-xl text-gray-600">{icon}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className="mt-2 text-sm text-gray-500">{title}</div>
    </div>
  );
};

export default BrandDashboard;