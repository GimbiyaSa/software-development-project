export default function Courses() {
  const courses = [
    { title: "History of Graphic Design", teacher: "William Joe" },
    { title: "App Design Course", teacher: "William Joe" },
    { title: "Digital Painting", teacher: "William Joe" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">My Courses</h2>
      <ul className="space-y-4">
        {courses.map((c, i) => (
          <li key={i} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-500">By {c.teacher}</p>
            </div>
            <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg">
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
