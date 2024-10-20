import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';

type ProfileFormData = {
  brandName: string;
  description: string;
  website: string;
  logo: FileList;
};

const BrandProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // TODO: Implement profile update logic
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Brand Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div>
          <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
            Brand Name
          </label>
          <input
            type="text"
            id="brandName"
            {...register('brandName', { required: 'Brand name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.brandName && <p className="mt-2 text-sm text-red-600">{errors.brandName.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            id="website"
            {...register('website')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
            Logo
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            {...register('logo')}
            onChange={handleLogoChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {previewImage && (
            <img src={previewImage} alt="Logo preview" className="mt-4 h-32 w-32 object-cover rounded-full" />
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandProfilePage;