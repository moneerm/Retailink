import React from 'react';
import { useParams } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const StorePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder data (replace with actual API call)
  const storeData = {
    name: 'Chic Boutique',
    description: 'A curated selection of high-end fashion for the discerning shopper',
    logo: 'https://via.placeholder.com/200x200.png?text=CB+Logo',
    coverImage: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '123 Fashion Ave, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@chicboutique.com',
    website: 'www.chicboutique.com',
    featuredBrands: [
      { id: 1, name: 'Luxe Label', logo: 'https://via.placeholder.com/100x100.png?text=LL' },
      { id: 2, name: 'Urban Edge', logo: 'https://via.placeholder.com/100x100.png?text=UE' },
      { id: 3, name: 'Eco Chic', logo: 'https://via.placeholder.com/100x100.png?text=EC' },
    ],
    featuredProducts: [
      { id: 1, name: 'Designer Handbag', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 2, name: 'Statement Necklace', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 3, name: 'Elegant Watch', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 4, name: 'Stiletto Heels', image: 'https://images.pexels.com/photos/1446524/pexels-photo-1446524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
    stats: {
      brands: 15,
      products: 500,
      averageRating: 4.9,
    },
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <LucideIcons.ShoppingBag className="h-10 w-10 text-indigo-500 mr-4" />
            <div>
              <p className="text-2xl font-bold">{storeData.stats.brands}</p>
              <p className="text-gray-600">Brands</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <LucideIcons.Users className="h-10 w-10 text-indigo-500 mr-4" />
            <div>
              <p className="text-2xl font-bold">{storeData.stats.products}</p>
              <p className="text-gray-600">Products</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <LucideIcons.Star className="h-10 w-10 text-indigo-500 mr-4" />
            <div>
              <p className="text-2xl font-bold">{storeData.stats.averageRating}</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <LucideIcons.MapPin className="mr-2 text-indigo-500" /> {storeData.address}
              </li>
              <li className="flex items-center">
                <LucideIcons.Phone className="mr-2 text-indigo-500" /> {storeData.phone}
              </li>
              <li className="flex items-center">
                <LucideIcons.Mail className="mr-2 text-indigo-500" /> {storeData.email}
              </li>
              <li className="flex items-center">
                <LucideIcons.Globe className="mr-2 text-indigo-500" /> {storeData.website}
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

        <h2 className="text-2xl font-bold mt-12 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeData.featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <button className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;