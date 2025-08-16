import { Clock } from "lucide-react";

export default function CalendarWidget() {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col">
      {/* Calendar placeholder */}
      <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-6">
        Calendar
      </div>

      {/* Tasks */}
      <h2 className="font-semibold mb-4">Upcoming Tasks</h2>
      <ul className="space-y-3">
        <li className="p-3 border rounded-lg flex justify-between items-center">
          <div>
            <p className="font-medium">Discussion Algorithm</p>
            <p className="text-sm text-gray-500">08:00 AM - 15:00 PM</p>
          </div>
          <Clock className="w-5 h-5 text-gray-400" />
        </li>
        <li className="p-3 border rounded-lg flex justify-between items-center">
          <div>
            <p className="font-medium">Simple Home Page Design</p>
            <p className="text-sm text-gray-500">08:00 AM - 15:00 PM</p>
          </div>
          <Clock className="w-5 h-5 text-gray-400" />
        </li>
      </ul>

      {/* Payment history */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Payment History</h3>
        <p className="flex justify-between text-sm">
          <span>Wireframe & Prototype</span>
          <span className="font-medium">$120</span>
        </p>
        <p className="flex justify-between text-sm">
          <span>MSc in Machine Learning</span>
          <span className="font-medium">$140</span>
        </p>
      </div>
    </div>
  );
}
