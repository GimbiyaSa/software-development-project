export default function Calendar() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Upcoming Task</h2>
      <ul className="space-y-4">
        <li className="p-3 border rounded-lg">
          <p className="font-medium">Discussion Algorithm</p>
          <p className="text-sm text-gray-500">08:00 AM - 15:00 PM</p>
        </li>
        <li className="p-3 border rounded-lg">
          <p className="font-medium">Simple Home Page Design</p>
          <p className="text-sm text-gray-500">08:00 AM - 15:00 PM</p>
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Payment History</h3>
        <p className="flex justify-between">
          <span>Wireframe & Prototype</span>
          <span className="font-medium">$120</span>
        </p>
        <p className="flex justify-between">
          <span>MSc in Machine Learning</span>
          <span className="font-medium">$140</span>
        </p>
      </div>
    </div>
  );
}
