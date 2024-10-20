import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FileText, Download, Plus, Minus, Upload } from 'lucide-react';

type LineSheetFormData = {
  name: string;
  includePrice: boolean;
  includeDescription: boolean;
  includeImages: boolean;
  selectedProducts: string[];
  customFields: { name: string; include: boolean }[];
  layout: 'grid' | 'list';
  imagesPerRow: number;
  brandLogo: FileList;
  headerText: string;
  footerText: string;
  colorScheme: string;
};

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  description: string;
  image: string;
};

const LineSheetGenerator: React.FC = () => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<LineSheetFormData>({
    defaultValues: {
      includePrice: true,
      includeDescription: true,
      includeImages: true,
      customFields: [{ name: 'SKU', include: true }],
      layout: 'grid',
      imagesPerRow: 3,
      colorScheme: '#4F46E5',
    }
  });
  const [generatedLineSheet, setGeneratedLineSheet] = useState<string | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  // Mock product data
  const products: Product[] = [
    { id: '1', name: 'Summer Dress', sku: 'SD001', price: 89.99, description: 'Light and breezy summer dress', image: 'https://source.unsplash.com/random/300x300?dress' },
    { id: '2', name: 'Denim Jacket', sku: 'DJ001', price: 129.99, description: 'Classic denim jacket', image: 'https://source.unsplash.com/random/300x300?jacket' },
    { id: '3', name: 'Floral Blouse', sku: 'FB001', price: 59.99, description: 'Elegant floral print blouse', image: 'https://source.unsplash.com/random/300x300?blouse' },
  ];

  const onSubmit = (data: LineSheetFormData) => {
    console.log(data);
    // TODO: Implement actual line sheet generation logic
    setGeneratedLineSheet('line_sheet_2024.pdf');
  };

  const addCustomField = () => {
    const { customFields } = watch();
    const updatedFields = [...customFields, { name: '', include: true }];
    control.setValue('customFields', updatedFields);
  };

  const removeCustomField = (index: number) => {
    const { customFields } = watch();
    const updatedFields = customFields.filter((_, i) => i !== index);
    control.setValue('customFields', updatedFields);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Line Sheet Generator</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div>
          <label htmlFor="name" className="label">
            Line Sheet Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Line sheet name is required' })}
            className="input"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="brandLogo" className="label">
            Brand Logo
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="brandLogo"
              accept="image/*"
              {...register('brandLogo')}
              onChange={handleLogoChange}
              className="sr-only"
            />
            <label
              htmlFor="brandLogo"
              className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload Logo
            </label>
            {previewLogo && (
              <img src={previewLogo} alt="Brand logo preview" className="ml-4 h-12 w-12 object-contain" />
            )}
          </div>
        </div>

        <div>
          <label htmlFor="headerText" className="label">
            Header Text
          </label>
          <input
            type="text"
            id="headerText"
            {...register('headerText')}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="footerText" className="label">
            Footer Text
          </label>
          <input
            type="text"
            id="footerText"
            {...register('footerText')}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="colorScheme" className="label">
            Color Scheme
          </label>
          <input
            type="color"
            id="colorScheme"
            {...register('colorScheme')}
            className="input h-10"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includePrice"
                {...register('includePrice')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="includePrice" className="ml-2 block text-sm text-gray-900">
                Include Prices
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeDescription"
                {...register('includeDescription')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="includeDescription" className="ml-2 block text-sm text-gray-900">
                Include Descriptions
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeImages"
                {...register('includeImages')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="includeImages" className="ml-2 block text-sm text-gray-900">
                Include Images
              </label>
            </div>
          </div>

          <div>
            <label className="label">
              Custom Fields
            </label>
            <Controller
              name="customFields"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  {field.value.map((customField, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={customField.name}
                        onChange={(e) => {
                          const updatedFields = [...field.value];
                          updatedFields[index].name = e.target.value;
                          field.onChange(updatedFields);
                        }}
                        className="input flex-grow"
                        placeholder="Field name"
                      />
                      <input
                        type="checkbox"
                        checked={customField.include}
                        onChange={(e) => {
                          const updatedFields = [...field.value];
                          updatedFields[index].include = e.target.checked;
                          field.onChange(updatedFields);
                        }}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <button type="button" onClick={() => removeCustomField(index)} className="text-red-600 hover:text-red-800">
                        <Minus className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addCustomField} className="btn-secondary flex items-center">
                    <Plus className="mr-2 h-5 w-5" />
                    Add Custom Field
                  </button>
                </div>
              )}
            />
          </div>

          <div>
            <label className="label">
              Layout
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="layoutGrid"
                  value="grid"
                  {...register('layout')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="layoutGrid" className="ml-2 block text-sm text-gray-900">
                  Grid
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="layoutList"
                  value="list"
                  {...register('layout')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="layoutList" className="ml-2 block text-sm text-gray-900">
                  List
                </label>
              </div>
            </div>
          </div>

          {watch('layout') === 'grid' && (
            <div>
              <label htmlFor="imagesPerRow" className="label">
                Images per row
              </label>
              <input
                type="number"
                id="imagesPerRow"
                {...register('imagesPerRow', { min: 1, max: 6 })}
                className="input"
              />
            </div>
          )}
        </div>

        <div>
          <label className="label">
            Select Products
          </label>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {products.map((product) => (
              <div key={product.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`product-${product.id}`}
                  value={product.id}
                  {...register('selectedProducts')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`product-${product.id}`} className="ml-2 block text-sm text-gray-900">
                  {product.name} ({product.sku})
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary flex items-center"
          >
            <FileText className="mr-2 h-5 w-5" />
            Generate Line Sheet
          </button>
        </div>
      </form>

      {generatedLineSheet && (
        <div className="mt-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your line sheet has been generated.</span>
          <a
            href={`/download/${generatedLineSheet}`}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            download
          >
            <Download className="h-5 w-5" />
          </a>
        </div>
      )}
    </div>
  );
};

export default LineSheetGenerator;