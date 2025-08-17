export default function Courses() {
  const courses = [
    { title: "History of graphic design", teacher: "William Joe", progress: 25 },
    { title: "App Design Course",        teacher: "William Joe", progress: 25 },
    { title: "Digital painting",         teacher: "William Joe", progress: 25 },
  ];

  return (
    <div>
      <h2 className="font-semibold mb-4 text-gray-900">My Courses</h2>
      <ul className="space-y-4">
        {courses.map((c, i) => (
          <li key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50/60 transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 grid place-items-center font-semibold shadow-soft">
                {String(c.title.match(/[A-Z]/g)?.slice(0,2).join("") ?? "C")}
              </div>
              <div>
                <p className="font-medium text-gray-900">{c.title}</p>
                <p className="text-xs text-gray-500">By {c.teacher}</p>
                <div className="mt-2 w-44 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-full text-sm bg-white border border-gray-200 hover:bg-gray-50 shadow-soft">
              View Course
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
