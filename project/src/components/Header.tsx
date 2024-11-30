import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'bg-blue-700 text-white' 
      : 'text-blue-100 hover:bg-blue-700 hover:text-white';
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-white p-2 rounded-full transform group-hover:scale-110 transition-transform">
              <Flame className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">GasConnect</h1>
          </Link>
          <nav className="hidden md:flex space-x-2">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/')}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/service-request" 
              className={`px-4 py-2 rounded-md transition-all duration-200 ${isActive('/service-request')}`}
            >
              Service Requests
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}