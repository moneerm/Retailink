import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type ProductFormData = {
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
};

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ProductFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the product data from an API
    // For this demo, we'll use mock data
    const mockProduct = {
      name: 'Summer Dress',
      category: 'Dresses',
      price: 89.99,
      stock: 50,
      description: 'A beautiful summer dress made from lightweight, breathable fabric.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    };

    // Set form values
    setValue('name', mockProduct.name);
    setValue('category', mockProduct.category);
    setValue('price', mockProduct.price);
    setValue('stock', mockProduct.stock);
    setValue('description', mockProduct.description);

    // Set image preview
    setImagePreview(mockProduct.image);
  }, [id, setValue]);

  const onSubmit = (data: ProductFormData) => {
    // In a real application, you would send this data to your backend
    console.log(data);
    // Navigate back to the product catalog after submission
    navigate('/brand/catalog');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
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
            onChange={handleImageChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Product preview" className="mt-4 h-32 w-32 object-cover rounded-md" />
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/brand/catalog')}
            className="btn-secondary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;