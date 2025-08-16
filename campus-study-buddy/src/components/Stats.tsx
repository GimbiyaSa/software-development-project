export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Learning Time */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Learning Time</h2>
        <div className="flex flex-col items-center">
          {/* Replace with chart later */}
          <div className="w-32 h-32 rounded-full border-8 border-green-400 flex items-center justify-center text-xl font-bold text-green-600">
            2h 35m
          </div>
          <p className="text-gray-500 mt-2">Today</p>
        </div>
      </div>

      {/* My Activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">My Activity</h2>
        <div className="h-32 flex items-center justify-center bg-gray-50 text-gray-400 rounded">
          [Graph Placeholder]
        </div>
      </div>
    </div>
  );
}
