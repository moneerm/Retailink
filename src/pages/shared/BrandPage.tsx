import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

type Brand = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

const BrandPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const [requestSent, setRequestSent] = useState(false);
  const [isPartner, setIsPartner] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for demonstration purposes
  const brands: Brand[] = [
    { id: 1, name: 'Fashion Forward', category: 'Women\'s Wear', description: 'Trendsetting styles for the modern woman', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Urban Edge', category: 'Streetwear', description: 'Bold and edgy street fashion', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ];

  const brand = brands.find(b => b.id === parseInt(id || '0'));

  useEffect(() => {
    const checkPartnership = async () => {
      setIsLoading(true);
      // Check if we have partnership info from the previous page
      const partnershipInfo = location.state?.isPartner;
      if (partnershipInfo !== undefined) {
        setIsPartner(partnershipInfo);
        setIsLoading(false);
      } else {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsPartner(Math.random() > 0.5);
        setIsLoading(false);
      }
    };

    checkPartnership();
  }, [id, location.state]);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  const handleSendRequest = () => {
    console.log(`Sending partnership request to brand ${brand.id}`);
    setRequestSent(true);
  };

  const isStore = user?.role === 'store_admin' || user?.role === 'store_user';
  const isBrandOwner = user?.role.startsWith('brand_') && user?.organizationId === brand.id.toString();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{brand.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{brand.category}</p>
          </div>
          {isBrandOwner && (
            <Link
              to={`/brand/edit/${brand.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Edit Brand
            </Link>
          )}
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{brand.description}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Brand Image</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <img src={brand.image} alt={brand.name} className="w-full h-64 object-cover rounded-lg" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {isStore && (
        <div className="mt-6">
          {isLoading ? (
            <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Checking partnership status...</span>
            </div>
          ) : isPartner ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Partnered!</strong>
              <span className="block sm:inline"> You are already partnered with this brand.</span>
            </div>
          ) : requestSent ? (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Request Sent!</strong>
              <span className="block sm:inline"> Your partnership request has been sent to this brand.</span>
            </div>
          ) : (
            <button
              onClick={handleSendRequest}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Partnership Request
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandPage;