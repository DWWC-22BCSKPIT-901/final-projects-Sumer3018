import { useState } from 'react';

const challenges = [
  {
    id: 1,
    title: '30-Day Running Challenge',
    description: 'Run for at least 30 minutes every day for 30 days.',
    difficulty: 'medium',
    points: 1000,
    category: 'cardio',
  },
  {
    id: 2,
    title: 'Strength Training Basics',
    description: 'Complete 3 strength training sessions per week.',
    difficulty: 'easy',
    points: 500,
    category: 'strength',
  },
  {
    id: 3,
    title: 'Flexibility Master',
    description: 'Daily stretching routine for improved flexibility.',
    difficulty: 'easy',
    points: 300,
    category: 'flexibility',
  },
];

const Challenges = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Fitness Challenges</h1>
          <div className="flex space-x-2">
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
              <option value="flexibility">Flexibility</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {challenge.points} points
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Join Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;