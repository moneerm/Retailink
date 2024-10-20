import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';

type ProfileFormData = {
  storeName: string;
  description: string;
  website: string;
  address: string;
  phone: string;
  email: string;
  logo: FileList;
};

const StoreProfileEditPage: React.FC = () => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ProfileFormData>();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Fetch current store data from API
    // For now, we'll use mock data
    const mockStoreData = {
      storeName: 'Chic Boutique',
      description: 'A curated selection of high-end fashion for the discerning shopper',
      website: 'www.chicboutique.com',
      address: '123 Fashion Ave, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'info@chicboutique.com',
    };

    Object.entries(mockStoreData).forEach(([key, value]) => {
      setValue(key as keyof ProfileFormData, value);
    });
  }, [setValue]);

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // TODO: Implement profile update logic
    // This would typically involve sending the data to your backend API
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
      <h1 className="text-3xl font-bold mb-6">Edit Store Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div>
          <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
            Store Name
          </label>
          <input
            type="text"
            id="storeName"
            {...register('storeName', { required: 'Store name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.storeName && <p className="mt-2 text-sm text-red-600">{errors.storeName.message}</p>}
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
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

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

export default StoreProfileEditPage;