import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, MessageSquare, Bell } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      if (user.role.startsWith('brand')) navigate('/brand');
      else if (user.role.startsWith('store')) navigate('/store');
      else if (user.role === 'admin') navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-[#4F46E5]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Retailink"
              />
              <span className="ml-2 text-xl font-bold text-white">Retailink</span>
            </Link>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            {user ? (
              <>
                <Link to="/profile" className="text-white hover:text-indigo-100">
                  <User className="h-6 w-6" />
                </Link>
                <Link to="/messages" className="text-white hover:text-indigo-100">
                  <MessageSquare className="h-6 w-6" />
                </Link>
                <Link to="/notifications" className="text-white hover:text-indigo-100">
                  <Bell className="h-6 w-6" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                  Sign in
                </Link>
                <Link to="/register/brand" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-400">
                  Register as Brand
                </Link>
                <Link to="/register/store" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-400">
                  Register as Store
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;