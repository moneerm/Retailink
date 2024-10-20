import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Upload, Box } from 'lucide-react';

type ShowroomFormData = {
  name: string;
  description: string;
  coverImage: FileList;
  products: string[];
  is3D: boolean;
};

const CreateShowroom: React.FC = () => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<ShowroomFormData>();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const onSubmit = (data: ShowroomFormData) => {
    console.log(data);
    // TODO: Implement showroom creation logic
    navigate('/brand/showroom');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Mock product data
  const products = [
    { id: '1', name: 'Summer Dress' },
    { id: '2', name: 'Denim Jacket' },
    { id: '3', name: 'Floral Blouse' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Showroom</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Showroom Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Showroom name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
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
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            accept="image/*"
            {...register('coverImage', { required: 'Cover image is required' })}
            onChange={handleImageChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.coverImage && <p className="mt-2 text-sm text-red-600">{errors.coverImage.message}</p>}
          {previewImage && (
            <img src={previewImage} alt="Cover preview" className="mt-4 h-32 w-full object-cover rounded-md" />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Products
          </label>
          {products.map((product) => (
            <div key={product.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`product-${product.id}`}
                value={product.id}
                {...register('products')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`product-${product.id}`} className="ml-2 block text-sm text-gray-900">
                {product.name}
              </label>
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="is3D" className="flex items-center">
            <input
              type="checkbox"
              id="is3D"
              {...register('is3D')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 block text-sm text-gray-900">Enable 3D Showroom</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/brand/showroom')}
            className="btn-secondary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Create Showroom
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateShowroom;