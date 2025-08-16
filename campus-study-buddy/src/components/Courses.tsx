export default function Courses() {
  const courses = [
    { title: "History of Graphic Design", teacher: "William Joe", progress: 25 },
    { title: "App Design Course", teacher: "William Joe", progress: 25 },
    { title: "Digital Painting", teacher: "William Joe", progress: 25 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">My Courses</h2>
      <ul className="space-y-4">
        {courses.map((c, i) => (
          <li key={i} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-500">By {c.teacher}</p>
              <div className="w-40 h-2 bg-gray-200 rounded mt-1">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
            <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg">
              View Course
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
