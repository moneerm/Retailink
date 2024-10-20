import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

type ProfileData = {
  name: string;
  email: string;
  role: string;
  organizationName: string;
  logo: string;
  coverImage: string;
};

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    // For now, we'll use mock data
    const mockProfileData: ProfileData = {
      name: user?.role.startsWith('brand') ? 'Fashion Forward' : 'Trendy Boutique',
      email: user?.email || 'user@example.com',
      role: user?.role || 'Unknown',
      organizationName: user?.role.startsWith('brand') ? 'Fashion Forward Inc.' : 'Trendy Boutique LLC',
      logo: 'https://source.unsplash.com/random/100x100?logo',
      coverImage: 'https://source.unsplash.com/random/1200x400?fashion',
    };
    setProfileData(mockProfileData);
  }, [user]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${profileData.coverImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
        <div className="absolute bottom-0 left-0 p-6 flex items-end">
          <img src={profileData.logo} alt={profileData.name} className="w-24 h-24 rounded-full border-4 border-white mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
            <p className="text-white opacity-75">{profileData.organizationName}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-b-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.role}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Organization</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.organizationName}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;