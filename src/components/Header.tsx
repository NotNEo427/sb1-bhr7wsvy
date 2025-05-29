import React from 'react';
import { Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { authState, logout } = useAuth();
  
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Trophy className="text-yellow-500 mr-2" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ACD Tierlist
          </h1>
        </div>
        
        <div className="flex items-center">
          {authState.isAuthenticated && (
            <button 
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout Admin
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;