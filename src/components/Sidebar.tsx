import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Package, ShoppingBag, Users, FileText, Settings } from 'lucide-react';
import ShowroomSelector from './ShowroomSelector';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const isBrand = user.role.startsWith('brand');
  const isStore = user.role.startsWith('store');
  const isAdmin = user.role === 'admin';

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: isBrand ? '/brand' : isStore ? '/store' : '/admin' },
    ...(isBrand ? [
      { icon: <Package size={20} />, label: 'Catalog', path: '/brand/catalog' },
      { icon: <ShoppingBag size={20} />, label: 'Showroom', path: '/brand/showroom' },
      { icon: <FileText size={20} />, label: 'Orders', path: '/brand/orders' },
      { icon: <Users size={20} />, label: 'Partnerships', path: '/brand/partnerships' },
    ] : []),
    ...(isStore ? [
      { icon: <ShoppingBag size={20} />, label: 'Discover Brands', path: '/store/discover' },
      { icon: <FileText size={20} />, label: 'Orders', path: '/store/orders' },
      { icon: <Users size={20} />, label: 'Partnerships', path: '/store/partnerships' },
    ] : []),
    ...(isAdmin ? [
      { icon: <Users size={20} />, label: 'User Management', path: '/admin/users' },
    ] : []),
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  const handleLogoClick = () => {
    if (isBrand) navigate('/brand');
    else if (isStore) navigate('/store');
    else if (isAdmin) navigate('/admin');
  };

  const getAvatarUrl = () => {
    if (user.email === 'brand@example.com') {
      return 'https://source.unsplash.com/100x100/?logo,brand';
    }
    return 'https://source.unsplash.com/100x100/?portrait';
  };

  return (
    <aside className="flex">
      <div className="flex flex-col w-64 h-screen py-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="px-4 mb-6 cursor-pointer" onClick={handleLogoClick}>
          <img className="w-auto h-6" src="/logo.svg" alt="Retailink" />
        </div>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <div className="w-24 h-24 mb-3 rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={getAvatarUrl()} alt="avatar" />
          </div>
          <h4 className="mx-2 mt-2 font-medium text-white">{user.name || user.email.split('@')[0]}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-indigo-200">{user.email}</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:bg-opacity-25 ${
                  location.pathname === item.path ? 'bg-indigo-500 bg-opacity-25' : ''
                }`}
              >
                {item.icon}
                <span className="mx-4 font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {isBrand && location.pathname.includes('/brand/showroom') && (
        <ShowroomSelector />
      )}
    </aside>
  );
};

export default Sidebar;