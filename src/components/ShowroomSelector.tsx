import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type Showroom = {
  id: string;
  name: string;
  image: string;
  followers: string;
};

const ShowroomSelector: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [showrooms, setShowrooms] = useState<Showroom[]>([
    { id: '1', name: 'Summer Collection', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100', followers: '11.2K' },
    { id: '2', name: 'Autumn Vibes', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80', followers: '1.2K' },
    { id: '3', name: 'Winter Wonderland', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100', followers: '15.6K' },
  ]);

  const handleShowroomSelect = (selectedId: string) => {
    navigate(`/brand/showroom/${selectedId}`);
  };

  return (
    <div className="h-screen py-8 overflow-y-auto bg-[#4F46E5] border-l border-r sm:w-64 w-60">
      <h2 className="px-5 text-lg font-medium text-white">Showrooms</h2>

      <div className="mt-8 space-y-4">
        {showrooms.map((showroom) => (
          <button
            key={showroom.id}
            onClick={() => handleShowroomSelect(showroom.id)}
            className={`flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2 hover:bg-indigo-700 focus:outline-none ${
              id === showroom.id ? 'bg-indigo-700' : ''
            }`}
          >
            <img className="object-cover w-8 h-8 rounded-full" src={showroom.image} alt={showroom.name} />
            
            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-white capitalize">{showroom.name}</h1>
              <p className="text-xs text-indigo-200">{showroom.followers} Followers</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowroomSelector;