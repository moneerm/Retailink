import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductFormData = {
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: FileList;
};

const AddProduct: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: ProductFormData) => {
    // In a real application, you would send this data to your backend
    console.log(data);
    // Navigate back to the product catalog after submission
    navigate('/catalog');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Product name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select a category</option>
            <option value="Dresses">Dresses</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Accessories">Accessories</option>
          </select>
          {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category.message}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="price"
              {...register('price', { required: 'Price is required', min: 0 })}
              className="mt-1 block w-full pl-7 pr-12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="0.00"
              step="0.01"
            />
          </div>
          {errors.price && <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>}
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            {...register('stock', { required: 'Stock is required', min: 0 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.stock && <p className="mt-2 text-sm text-red-600">{errors.stock.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            {...register('description')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image', { required: 'Product image is required' })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/catalog')}
            className="btn-secondary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;