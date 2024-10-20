import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const StorePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder data (replace with actual API call)
  const storeData = {
    name: 'Chic Boutique',
    description: 'A curated selection of high-end fashion for the discerning shopper',
    logo: 'https://source.unsplash.com/random/100x100?boutique',
    coverImage: 'https://source.unsplash.com/random/1200x400?store',
    address: '123 Fashion Ave, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@chicboutique.com',
    website: 'www.chicboutique.com',
    featuredBrands: [
      { id: 1, name: 'Luxe Label', logo: 'https://source.unsplash.com/random/80x80?logo' },
      { id: 2, name: 'Urban Edge', logo: 'https://source.unsplash.com/random/80x80?logo' },
      { id: 3, name: 'Eco Chic', logo: 'https://source.unsplash.com/random/80x80?logo' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${storeData.coverImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <img src={storeData.logo} alt={storeData.name} className="w-24 h-24 rounded-full border-4 border-white" />
          <h1 className="text-3xl font-bold text-white mt-2">{storeData.name}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-xl mb-8">{storeData.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2" /> {storeData.address}
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> {storeData.phone}
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" /> {storeData.email}
              </li>
              <li className="flex items-center">
                <Globe className="mr-2" /> {storeData.website}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Featured Brands</h2>
            <div className="grid grid-cols-3 gap-4">
              {storeData.featuredBrands.map((brand) => (
                <div key={brand.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src={brand.logo} alt={brand.name} className="w-16 h-16 mx-auto rounded-full" />
                  <p className="mt-2 font-semibold">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;