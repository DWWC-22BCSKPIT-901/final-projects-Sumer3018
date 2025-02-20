import { Link } from 'react-router-dom';
import { HomeIcon, TrophyIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wide">YouthFit</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <HomeIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link to="/challenges" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <TrophyIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Challenges</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <UserGroupIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Leaderboard</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;