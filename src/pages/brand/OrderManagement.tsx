import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Order = {
  id: number;
  storeName: string;
  date: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
};

const OrderManagement: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, storeName: "Fashion Boutique", date: "2024-03-15", total: 1250.00, status: "Pending" },
    { id: 2, storeName: "Trendy Threads", date: "2024-03-14", total: 980.50, status: "Processing" },
    { id: 3, storeName: "Style Haven", date: "2024-03-13", total: 1750.75, status: "Shipped" },
    { id: 4, storeName: "Chic Emporium", date: "2024-03-12", total: 2100.00, status: "Delivered" },
  ]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof Order; direction: 'ascending' | 'descending' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const sortedOrders = useMemo(() => {
    let sortableOrders = [...orders];
    if (sortConfig !== null) {
      sortableOrders.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableOrders;
  }, [orders, sortConfig]);

  const filteredOrders = sortedOrders.filter(order => 
    order.storeName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'All' || order.status === statusFilter)
  );

  const requestSort = (key: keyof Order) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleViewDetails = (orderId: number) => {
    navigate(`/brand/order/${orderId}`);
  };

  const chartData = useMemo(() => {
    const statusCounts = filteredOrders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(statusCounts).map(([status, count]) => ({ status, count }));
  }, [filteredOrders]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['id', 'storeName', 'date', 'total', 'status'].map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort(key as keyof Order)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortConfig?.key === key && (
                    sortConfig.direction === 'ascending' ? <ChevronUp className="inline ml-1" /> : <ChevronDown className="inline ml-1" />
                  )}
                </th>
              ))}
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.storeName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                      order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleViewDetails(order.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;