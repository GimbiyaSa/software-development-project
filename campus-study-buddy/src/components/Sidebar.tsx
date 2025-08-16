import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Course', icon: '📚' },
    { name: 'Resources', icon: '🔖' },
    { name: 'Chat', icon: '💬' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Profile', icon: '👤' },
    { name: 'Setting', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white p-4 border-r hidden md:block">
      <div className="mb-6 font-bold text-xl">Estudy</div>
      <nav>
        {menuItems.map((item) => (
          <div key={item.name} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
      <div className="mt-8 p-4 bg-gray-100 rounded text-center">
        <p className="mb-2 text-sm">Upgrade to PRO for more resources</p>
        <button className="bg-green-500 text-white px-3 py-1 rounded">Upgrade Now</button>
      </div>
    </aside>
  );
};

export default Sidebar;
