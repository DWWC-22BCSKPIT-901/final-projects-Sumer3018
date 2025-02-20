import React from 'react';
import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockUserData = {
    username: 'FitnessEnthusiast',
    email: 'user@example.com',
    level: 5,
    points: 2450,
    joinedDate: '2025-01-15',
    completedChallenges: 12,
    achievements: [
      { id: 1, title: 'Early Bird', description: 'Complete 5 morning workouts' },
      { id: 2, title: 'Challenge Master', description: 'Complete 10 challenges' },
      { id: 3, title: 'Social Butterfly', description: 'Join 3 group challenges' },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
            {mockUserData.username.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{mockUserData.username}</h1>
            <p className="text-gray-600">Level {mockUserData.level} Athlete</p>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              className={`pb-4 ${
                activeTab === 'overview'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`pb-4 ${
                activeTab === 'achievements'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </button>
          </nav>
        </div>

        {activeTab === 'overview' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Total Points</h3>
                <p className="text-2xl font-bold text-gray-900">{mockUserData.points}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Completed Challenges</h3>
                <p className="text-2xl font-bold text-gray-900">{mockUserData.completedChallenges}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {new Date(mockUserData.joinedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {mockUserData.achievements.map((achievement) => (
              <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;