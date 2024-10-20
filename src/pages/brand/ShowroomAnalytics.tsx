import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ShowroomAnalytics: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data (replace with actual API calls in a real application)
  const viewsData = [
    { date: '2024-03-01', views: 120 },
    { date: '2024-03-02', views: 150 },
    { date: '2024-03-03', views: 200 },
    { date: '2024-03-04', views: 180 },
    { date: '2024-03-05', views: 250 },
  ];

  const productInteractionData = [
    { name: 'Product A', interactions: 50 },
    { name: 'Product B', interactions: 30 },
    { name: 'Product C', interactions: 70 },
    { name: 'Product D', interactions: 40 },
    { name: 'Product E', interactions: 60 },
  ];

  const visitorSourceData = [
    { name: 'Direct', value: 400 },
    { name: 'Social Media', value: 300 },
    { name: 'Email', value: 200 },
    { name: 'Referral', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Showroom Analytics: {id}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Views Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Product Interactions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productInteractionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="interactions" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Visitor Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={visitorSourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {visitorSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-indigo-800">Total Views</h3>
              <p className="text-2xl font-bold text-indigo-900">1,234</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">Avg. Time Spent</h3>
              <p className="text-2xl font-bold text-green-900">5m 23s</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-yellow-800">Engagement Rate</h3>
              <p className="text-2xl font-bold text-yellow-900">68%</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-red-800">Bounce Rate</h3>
              <p className="text-2xl font-bold text-red-900">32%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomAnalytics;