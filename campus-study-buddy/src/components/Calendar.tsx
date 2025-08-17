import { Clock } from "lucide-react";

export default function CalendarWidget() {
  return (
    <div className="space-y-6">
      {/* Calendar placeholder icon area */}
      <div className="bg-gradient-to-br from-gray-50 to-brand-50 h-32 rounded-xl border border-gray-100 grid place-items-center text-sm text-gray-500">
        Calendar
      </div>

      <div>
        <h2 className="font-semibold text-gray-900 mb-3">Upcoming Task</h2>
        <ul className="space-y-3">
          {[
            { name: "Discussion Algorithm", time: "08:00 AM - 15:00 PM" },
            { name: "Simple Home Page Design", time: "08:00 AM - 15:00 PM" },
          ].map((t) => (
            <li key={t.name} className="p-3 rounded-xl border border-gray-100 flex items-center justify-between bg-white">
              <div>
                <p className="font-medium text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.time}</p>
              </div>
              <Clock className="w-5 h-5 text-gray-400" />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Payment History</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Wireframe & Prototype</span>
            <span className="font-semibold text-gray-900">$120</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">MSc in Machine Learning</span>
            <span className="font-semibold text-gray-900">$140</span>
          </div>
        </div>
      </div>
    </div>
  );
}
