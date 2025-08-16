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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="lg:col-span-2 space-y-6">
            <Stats />
            <Courses />
          </div>

          {/* Right section */}
          <div className="space-y-6">
            <Calendar />
          </div>
        </main>
      </div>
    </div>
  );
}
