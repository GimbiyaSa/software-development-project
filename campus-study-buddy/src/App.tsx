import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Calendar from "./components/Calendar";


export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-6 flex-1">
          {/* Replace with your dashboard cards/components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">Learning Time Card</div>
            <div className="bg-white p-4 rounded-xl shadow">My Activity Card</div>
            <div className="bg-white p-4 rounded-xl shadow">Calendar / Stats Card</div>
          </div>
        </main>
      </div>
    </div>
  );
}
