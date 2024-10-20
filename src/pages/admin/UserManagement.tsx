import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'brand_admin' | 'brand_user' | 'store_admin' | 'store_user' | 'admin';
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'brand_admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'store_admin' },
    { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  ]);

  const handleEditUser = (id: string) => {
    // Implement edit user functionality
    console.log(`Edit user with id: ${id}`);
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEditUser(user.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">
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

export default UserManagement;