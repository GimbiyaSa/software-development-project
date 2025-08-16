export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Learning Time */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Learning Time</h2>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">2h 35m</div>
          <p className="text-gray-500">Today</p>
        </div>
      </div>

      {/* My Activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">My Activity</h2>
        <div className="h-24 flex items-center justify-center text-gray-400">
          [Graph Placeholder]
        </div>
      </div>
    </div>
  );
}
