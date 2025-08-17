import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Calendar from "./components/Calendar";

const card = "bg-white rounded-2xl shadow-card p-6";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* soft page gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_0%,#E9FAF1_0%,transparent_50%),radial-gradient(1200px_600px_at_100%_0%,#F6F9FF_0%,transparent_40%)]" />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <section className={card}>Learning Time Card</section>
              <section className={card}>My Activity Card</section>
              <section className={card}><Calendar /></section>
            </div>

            <div className="mt-6 grid grid-cols-1">
              <section className={card}><Courses /></section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
