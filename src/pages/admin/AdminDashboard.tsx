import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard icon={<Users className="h-6 w-6" />} title="Total Users" value="5,678" />
        <DashboardCard icon={<ShoppingBag className="h-6 w-6" />} title="Active Brands" value="234" />
        <DashboardCard icon={<AlertTriangle className="h-6 w-6" />} title="Pending Disputes" value="12" />
        <DashboardCard icon={<TrendingUp className="h-6 w-6" />} title="Platform Revenue" value="$123,456" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent User Registrations</h2>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((user) => (
              <li key={user} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-8 w-8 rounded-full bg-gray-200"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      User Name
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      user@example.com
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/admin/users" className="text-indigo-600 hover:text-indigo-900">Manage users</Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Disputes</h2>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((dispute) => (
              <li key={dispute} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-8 w-8 rounded-full bg-gray-200"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Dispute #{dispute}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Brand vs Store
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/admin/disputes" className="text-indigo-600 hover:text-indigo-900">Manage disputes</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/admin/moderation" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Brand/Product Moderation</h3>
              <p className="mt-1 text-sm text-gray-500">Review and approve new brands and products</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/analytics" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Platform Analytics</h3>
              <p className="mt-1 text-sm text-gray-500">View detailed platform performance metrics</p>
            </div>
          </div>
        </Link>

        <Link to="/admin/content" className="bg-white shadow rounded-lg p-6 hover:bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FileText className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Content Management</h3>
              <p className="mt-1 text-sm text-gray-500">Update platform content and announcements</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="rounded-md bg-indigo-500 p-3">
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

export default AdminDashboard;