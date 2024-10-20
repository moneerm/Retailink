import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

type User = {
  id: string;
  email: string;
  role: 'brand_admin' | 'brand_user' | 'store_admin' | 'store_user';
  organizationId: string;
  avatar: string;
};

type UserFormData = {
  email: string;
  role: 'brand_admin' | 'brand_user' | 'store_admin' | 'store_user';
};

const UserManagementPage: React.FC = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>();

  useEffect(() => {
    // Simulating API call to fetch users
    const fetchUsers = () => {
      const mockUsers: User[] = [
        { id: '1', email: 'user1@example.com', role: 'brand_user', organizationId: '1', avatar: 'https://i.pravatar.cc/100?img=1' },
        { id: '2', email: 'user2@example.com', role: 'brand_user', organizationId: '1', avatar: 'https://i.pravatar.cc/100?img=2' },
        { id: '3', email: 'user3@example.com', role: 'store_user', organizationId: '2', avatar: 'https://i.pravatar.cc/100?img=3' },
      ];

      // Filter users based on the current user's role and organization
      const filteredUsers = mockUsers.filter(u => 
        u.organizationId === user?.organizationId &&
        (user?.role === 'brand_admin' ? u.role.startsWith('brand_') : u.role.startsWith('store_'))
      );

      setUsers(filteredUsers);
    };

    fetchUsers();
  }, [user]);

  const handleAddUser = (data: UserFormData) => {
    // Simulating API call to add a new user
    const newUser: User = {
      id: (users.length + 1).toString(),
      email: data.email,
      role: data.role,
      organizationId: user?.organizationId || '',
      avatar: `https://i.pravatar.cc/100?img=${users.length + 4}`,
    };

    setUsers([...users, newUser]);
    setIsAddingUser(false);
    reset();
  };

  const handleEditUser = (id: string) => {
    // TODO: Implement edit user functionality
    console.log('Edit user', id);
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const getRoleOptions = () => {
    if (user?.role === 'brand_admin') {
      return ['brand_admin', 'brand_user'];
    } else if (user?.role === 'store_admin') {
      return ['store_admin', 'store_user'];
    }
    return [];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <button
          onClick={() => setIsAddingUser(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add User
        </button>
      </div>

      {isAddingUser && (
        <div className="mb-6 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Add New User</h3>
            <form onSubmit={handleSubmit(handleAddUser)} className="mt-5 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  id="role"
                  {...register('role', { required: 'Role is required' })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {getRoleOptions().map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {errors.role && <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddingUser(false)}
                  className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {users.map((u) => (
            <li key={u.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <img className="h-12 w-12 rounded-full" src={u.avatar} alt={u.email} />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-600 truncate">{u.email}</p>
                      <p className="mt-1 text-sm text-gray-500">Role: {u.role}</p>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0 flex space-x-2">
                  <button
                    onClick={() => handleEditUser(u.id)}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(u.id)}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagementPage;