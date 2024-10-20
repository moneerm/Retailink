import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const PlatformAnalytics: React.FC = () => {
  const monthlyRevenueData = [
    { name: 'Jan', revenue: 40000 },
    { name: 'Feb', revenue: 30000 },
    { name: 'Mar', revenue: 50000 },
    { name: 'Apr', revenue: 45000 },
    { name: 'May', revenue: 60000 },
    { name: 'Jun', revenue: 55000 },
  ];

  const userGrowthData = [
    { name: 'Jan', brands: 100, stores: 200 },
    { name: 'Feb', brands: 120, stores: 220 },
    { name: 'Mar', brands: 140, stores: 250 },
    { name: 'Apr', brands: 160, stores: 280 },
    { name: 'May', brands: 180, stores: 320 },
    { name: 'Jun', brands: 200, stores: 350 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Platform Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="brands" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="stores" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Platform Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">Total Users</h3>
            <p className="text-2xl font-bold text-blue-900">5,678</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">Total Transactions</h3>
            <p className="text-2xl font-bold text-green-900">12,345</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-800">Average Order Value</h3>
            <p className="text-2xl font-bold text-purple-900">$1,234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAnalytics;