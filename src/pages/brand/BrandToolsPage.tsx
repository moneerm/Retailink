import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, PlusCircle } from 'lucide-react';

type BrandProfileData = {
  name: string;
  description: string;
  website: string;
  icon: string;
  coverImage: string;
};

type Collection = {
  id: number;
  name: string;
  description: string;
};

const BrandToolsPage: React.FC = () => {
  const [profileData, setProfileData] = useState<BrandProfileData>({
    name: '',
    description: '',
    website: '',
    icon: '',
    coverImage: '',
  });
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingCollection, setIsAddingCollection] = useState(false);
  const { register, handleSubmit, reset } = useForm<BrandProfileData>();

  useEffect(() => {
    // Fetch brand profile data and collections
    // This is a mock implementation. Replace with actual API calls in a real application.
    setProfileData({
      name: 'Fashion Forward',
      description: 'Trendsetting styles for the modern fashionista',
      website: 'www.fashionforward.com',
      icon: 'https://via.placeholder.com/100x100.png?text=FF',
      coverImage: 'https://via.placeholder.com/1200x400.png?text=Fashion+Forward',
    });

    setCollections([
      { id: 1, name: 'Summer 2024', description: 'Light and breezy summer styles' },
      { id: 2, name: 'Autumn Vibes', description: 'Cozy and stylish autumn collection' },
    ]);
  }, []);

  const onProfileSubmit = (data: BrandProfileData) => {
    // Update profile data
    // This is a mock implementation. Replace with actual API call in a real application.
    setProfileData(data);
    setIsEditingProfile(false);
  };

  const handleAddCollection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const descriptionInput = form.elements.namedItem('description') as HTMLTextAreaElement;

    const newCollection: Collection = {
      id: collections.length + 1,
      name: nameInput.value,
      description: descriptionInput.value,
    };

    setCollections([...collections, newCollection]);
    setIsAddingCollection(false);
    form.reset();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: 'icon' | 'coverImage') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Brand Tools</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Brand Profile</h2>
        {isEditingProfile ? (
          <form onSubmit={handleSubmit(onProfileSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Brand Name</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                defaultValue={profileData.name}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                {...register('description')}
                defaultValue={profileData.description}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="text"
                id="website"
                {...register('website')}
                defaultValue={profileData.website}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Brand Icon</label>
              <input
                type="file"
                id="icon"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'icon')}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">Cover Image</label>
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'coverImage')}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save Changes
              </button>
              <button type="button" onClick={() => setIsEditingProfile(false)} className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <img src={profileData.coverImage} alt="Cover" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="flex items-center mb-4">
              <img src={profileData.icon} alt="Icon" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">{profileData.name}</h3>
                <p className="text-gray-600">{profileData.website}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{profileData.description}</p>
            <button
              onClick={() => setIsEditingProfile(true)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Profile
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {collections.map((collection) => (
            <div key={collection.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{collection.name}</h3>
              <p className="text-gray-600">{collection.description}</p>
            </div>
          ))}
        </div>
        {isAddingCollection ? (
          <form onSubmit={handleAddCollection} className="border rounded-lg p-4">
            <div className="mb-4">
              <label htmlFor="collectionName" className="block text-sm font-medium text-gray-700">Collection Name</label>
              <input
                type="text"
                id="collectionName"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="collectionDescription" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="collectionDescription"
                name="description"
                rows={3}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Collection
              </button>
              <button type="button" onClick={() => setIsAddingCollection(false)} className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setIsAddingCollection(true)}
            className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Add New Collection
          </button>
        )}
      </section>
    </div>
  );
};

export default BrandToolsPage;