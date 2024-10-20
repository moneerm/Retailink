import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

type ProductFormData = {
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: FileList;
};

const AddEditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>();

  // Mock product data for editing (replace with API call in real implementation)
  const productData = isEditing
    ? {
        name: 'Summer Dress',
        description: 'A beautiful summer dress made from lightweight fabric.',
        category: 'Dresses',
        price: 89.99,
        stock: 50,
      }
    : null;

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
    // TODO: Implement product creation/update logic
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Product name is required' })}
            defaultValue={productData?.name}
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
            defaultValue={productData?.description}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            defaultValue={productData?.category}
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
              defaultValue={productData?.price}
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
            defaultValue={productData?.stock}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.stock && <p className="mt-2 text-sm text-red-600">{errors.stock.message}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            {...register('image', { required: isEditing ? false : 'Product image is required' })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditProduct;