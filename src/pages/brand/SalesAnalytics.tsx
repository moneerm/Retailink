import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const SalesAnalytics: React.FC = () => {
  const monthlySalesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
  ];

  const topProductsData = [
    { name: 'Summer Dress', sales: 1200 },
    { name: 'Denim Jacket', sales: 980 },
    { name: 'Floral Blouse', sales: 850 },
    { name: 'Leather Boots', sales: 750 },
    { name: 'Silk Scarf', sales: 600 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Sales Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProductsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-900">$28,000</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">Average Order Value</h3>
            <p className="text-2xl font-bold text-green-900">$250</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-800">Total Orders</h3>
            <p className="text-2xl font-bold text-purple-900">112</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;