import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type BrandFormData = {
  name: string;
  category: string;
  description: string;
  image: string;
};

const BrandEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BrandFormData>();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the brand data from an API
    // For this demo, we'll use mock data
    const mockBrand = {
      id: 1,
      name: 'Fashion Forward',
      category: 'Women\'s Wear',
      description: 'Trendsetting styles for the modern woman',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    };

    setValue('name', mockBrand.name);
    setValue('category', mockBrand.category);
    setValue('description', mockBrand.description);
    setValue('image', mockBrand.image);
    setPreviewImage(mockBrand.image);
  }, [id, setValue]);

  const onSubmit = (data: BrandFormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend API
    // For now, we'll just navigate back to the brand page
    navigate(`/brand/${id}`);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Brand Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Brand Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Brand name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category.message}</p>}
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
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Brand Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {previewImage && (
            <img src={previewImage} alt="Brand preview" className="mt-4 h-32 w-32 object-cover rounded-md" />
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate(`/brand/${id}`)}
            className="mr-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandEditPage;