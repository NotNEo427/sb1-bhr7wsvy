import React from 'react';
import Header from '../components/Header';
import TierList from '../components/TierList';
import { KITS } from '../constants';
import KitIcon from '../components/KitIcon';
import { Kit } from '../types';
import { Trophy } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <Trophy className="text-yellow-500 mr-2" size={28} />
            ACD Tierlist
          </h1>
          <p className="text-gray-400">
            View and manage player rankings across different kit types. This tierlist uses a system from HT1 (highest) to LT5 (lowest).
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
          {KITS.map((kit) => (
            <div key={kit.id} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <KitIcon kit={kit.id as Kit} size={32} />
              <h3 className="mt-2 font-medium text-center">{kit.name}</h3>
            </div>
          ))}
        </div>
        
        <TierList />
      </main>
      
      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            ACD Tierlist &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;