import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Hi Martin!</h1>
      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="p-2 rounded hover:bg-gray-200">🔔</button>
        <div className="flex items-center gap-2">
          <img src="https://via.placeholder.com/32" alt="Profile" className="rounded-full w-8 h-8" />
          <span>Martin Nel ▾</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
