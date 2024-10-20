import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';

type Showroom = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  totalOrders: number;
  totalStores: number;
  lastUpdated: string;
  status: 'draft' | 'published';
};

const DigitalShowroom: React.FC = () => {
  const navigate = useNavigate();
  const [showrooms, setShowrooms] = useState<Showroom[]>([
    {
      id: '1',
      name: 'Summer Collection 2024',
      description: 'Vibrant and breezy styles for the upcoming summer season',
      coverImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      totalOrders: 150,
      totalStores: 25,
      lastUpdated: '2024-03-15',
      status: 'published',
    },
    {
      id: '2',
      name: 'Autumn Essentials',
      description: 'Cozy and stylish pieces for the fall season',
      coverImage: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      totalOrders: 80,
      totalStores: 18,
      lastUpdated: '2024-03-10',
      status: 'draft',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateShowroom = () => {
    navigate('/brand/showroom/create');
  };

  const handleEditShowroom = (id: string) => {
    navigate(`/brand/showroom/edit/${id}`);
  };

  const handleViewShowroom = (id: string) => {
    navigate(`/brand/showroom/${id}`);
  };

  const handleDeleteShowroom = (id: string) => {
    setShowrooms(showrooms.filter(showroom => showroom.id !== id));
  };

  const filteredShowrooms = showrooms.filter(showroom =>
    showroom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Digital Showrooms</h1>
        <button
          onClick={handleCreateShowroom}
          className="btn-primary flex items-center py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <Plus className="mr-2 h-5 w-5" />
          Create New Showroom
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search showrooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Showroom</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Stores</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredShowrooms.map((showroom) => (
              <tr key={showroom.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={showroom.coverImage} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{showroom.name}</div>
                      <div className="text-sm text-gray-500">{showroom.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{showroom.totalOrders}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{showroom.totalStores}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    showroom.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {showroom.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleViewShowroom(showroom.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleEditShowroom(showroom.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteShowroom(showroom.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
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

export default DigitalShowroom;