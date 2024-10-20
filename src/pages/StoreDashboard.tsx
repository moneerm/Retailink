import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, MessageSquare, Bell, ShoppingCart } from 'lucide-react';

const data = [
  { name: 'Brand A', orders: 40 },
  { name: 'Brand B', orders: 30 },
  { name: 'Brand C', orders: 20 },
  { name: 'Brand D', orders: 27 },
  { name: 'Brand E', orders: 18 },
];

const StoreDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Store Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard icon={<Package />} title="Partnered Brands" value="15" />
        <DashboardCard icon={<MessageSquare />} title="Messages" value="5" />
        <DashboardCard icon={<Bell />} title="Notifications" value="3" />
        <DashboardCard icon={<ShoppingCart />} title="Orders" value="27" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Orders by Brand</h2>
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

export default StoreDashboard;