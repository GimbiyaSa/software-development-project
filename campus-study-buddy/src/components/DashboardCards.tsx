import React from 'react';

const DashboardCards: React.FC = () => {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded p-4 shadow">
        <h2 className="font-semibold mb-2">Learning Time</h2>
        <p>Today: 2h 35m</p>
      </div>
      <div className="bg-white rounded p-4 shadow">
        <h2 className="font-semibold mb-2">My Activity</h2>
        <p>Weekly overview graph here</p>
      </div>
    </div>
  );
};

export default DashboardCards;
