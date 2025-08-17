import { Plus, MessageCircle, Bell, Target } from "lucide-react";

export default function Courses() {
  const courses = [
    { title: "History of graphic design", teacher: "William Joe", progress: 25 },
    { title: "App Design Course", teacher: "William Joe", progress: 25 },
    { title: "Digital painting", teacher: "William Joe", progress: 25 },
  ];

  const avg =
    Math.round(
      (courses.reduce((s, c) => s + c.progress, 0) / Math.max(courses.length, 1)) * 10
    ) / 10;

  // donut sizes
  const size = 120;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - avg / 100);

  const actions = [
    { href: "#/courses/new", icon: Plus, label: "Add course" },
    { href: "#/partners", icon: MessageCircle, label: "Chat with study partner" },
    { href: "#/reminders", icon: Bell, label: "View reminders" },
    { href: "#/goals", icon: Target, label: "Set study goals" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900">My Courses</h2>
        <a
          href="#/courses"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          See all
        </a>
      </div>

      {/* Course list */}
      <ul className="space-y-4">
        {courses.map((c, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50/60 transition"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 grid place-items-center font-semibold shadow-soft shrink-0">
                {String(c.title.match(/[A-Z]/g)?.slice(0, 2).join("") ?? "C")}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{c.title}</p>
                <p className="text-xs text-gray-500">By {c.teacher}</p>
                <div className="mt-2 w-44 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-brand-500 rounded-full"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <button className="px-3 py-1.5 rounded-full text-sm bg-white border border-gray-200 hover:bg-gray-50 shadow-soft shrink-0">
              View Course
            </button>
          </li>
        ))}
      </ul>

      {/* Fill area: Summary + Quick Actions (chips) */}
      <div className="mt-6 flex-1">
        <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-brand-50/40 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Donut progress */}
           // Donut progress (responsive)
<div className="flex items-center justify-center">
  <figure className="relative" aria-label={`Average progress ${avg}%`}>
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
      <svg
        viewBox="0 0 120 120"
        width="100%"
        height="100%"
        role="img"
        aria-hidden="true"
      >
        {/* track */}
        <circle
          cx="60" cy="60" r="55"
          stroke="rgba(17,24,39,0.08)"
          strokeWidth="10"
          fill="none"
        />
        {/* value */}
        <circle
          cx="60" cy="60" r="55"
          stroke="currentColor"
          className="text-brand-500"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={2 * Math.PI * 55}
          strokeDashoffset={(2 * Math.PI * 55) * (1 - avg / 100)}
          transform="rotate(-90 60 60)"
        />
      </svg>
    </div>

    {/* Center label */}
    <figcaption className="absolute inset-0 grid place-items-center text-center pointer-events-none">
      <div className="leading-tight">
        <div className="text-xl sm:text-2xl font-semibold text-gray-900">{avg}%</div>
        <div className="text-[10px] sm:text-xs text-gray-500">
          Avg progress • {courses.length} active
        </div>
      </div>
    </figcaption>
  </figure>
</div>


            {/* Chips (responsive) */}
            <div className="flex flex-col justify-center">
              <p className="font-medium text-gray-900 mb-2">Quick actions</p>
              <div className="flex flex-wrap gap-2">
                {actions.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 transition"
                  >
                    {/* Icon only on small screens */}
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
