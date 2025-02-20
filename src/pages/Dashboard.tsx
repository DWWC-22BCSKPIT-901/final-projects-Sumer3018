import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Activity Minutes',
        data: [30, 45, 60, 35, 50, 70, 40],
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome back, Athlete!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-800">Current Level</h3>
            <p className="text-3xl font-bold text-indigo-600">5</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">Total Points</h3>
            <p className="text-3xl font-bold text-green-600">2,450</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800">Active Challenges</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
          <div className="h-64">
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
          <div className="space-y-4">
            {[
              { title: '30-Day Running Challenge', progress: 60 },
              { title: 'Strength Training Basics', progress: 40 },
              { title: 'Flexibility Master', progress: 25 },
            ].map((challenge) => (
              <div key={challenge.title} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{challenge.title}</span>
                  <span className="text-indigo-600">{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;