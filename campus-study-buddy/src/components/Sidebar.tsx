export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 font-bold text-xl">Campus Study Buddy</div>
      <nav className="flex-1 px-4 space-y-4">
        <a href="#" className="block text-green-600 font-semibold">Dashboard</a>
        <a href="#" className="block">Study Groups</a>
        <a href="#" className="block">Sessions</a>
        <a href="#" className="block">Progress</a>
        <a href="#" className="block">Settings</a>
      </nav>
      <div className="p-4">
        <button className="w-full py-2 bg-green-500 text-white rounded-lg">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}
