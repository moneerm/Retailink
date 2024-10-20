import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type ProfileFormData = {
  brandName: string;
  description: string;
  website: string;
  email: string;
  phone: string;
};

const BrandProfileManagement: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();

  // Mock data (replace with actual API call in a real application)
  const initialData = {
    brandName: 'Fashion Forward',
    description: 'Trendsetting styles for the modern fashionista',
    website: 'www.fashionforward.com',
    email: 'contact@fashionforward.com',
    phone: '+1 (555) 123-4567',
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Brand Profile Management</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  {...register('brandName', { required: 'Brand name is required' })}
                  defaultValue={initialData.brandName}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.brandName && <p className="mt-2 text-sm text-red-600">{errors.brandName.message}</p>}
              </div>
              <div className="col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  {...register('description', { required: 'Description is required' })}
                  defaultValue={initialData.description}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                <input
                  type="text"
                  id="website"
                  {...register('website')}
                  defaultValue={initialData.website}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  defaultValue={initialData.email}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  defaultValue={initialData.phone}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Brand Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initialData.brandName}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initialData.description}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initialData.website}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initialData.email}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initialData.phone}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProfileManagement;