import { useState, useRef, useEffect, type ComponentType } from "react";
import {
  Menu, X, LayoutDashboard, UserPlus, GraduationCap,
  LineChart, CalendarClock, Settings
} from "lucide-react";
import logo from "../assets/logo.jpg";

type NavLink = { label: string; href: string; icon: ComponentType<{ className?: string }> };

function CampusBuildingArt() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-56 mx-auto"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4CCF93" />
          <stop offset="1" stopColor="#7BD9AC" />
        </linearGradient>
        <linearGradient id="pillars" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFF1DE" />
          <stop offset="1" stopColor="#A7E4C4" />
        </linearGradient>
        <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E6F7ED" />
          <stop offset="1" stopColor="#CFF1DE" />
        </linearGradient>
      </defs>

      {/* background blob */}
      <path
        d="M20,120 C10,70 80,20 140,25 C200,30 240,90 210,130 C180,160 100,165 60,150 C40,140 30,140 20,120 Z"
        fill="#E6F7ED"
      />

      {/* roof */}
      <polygon points="60,60 120,25 180,60" fill="url(#roof)" stroke="#4CCF93" strokeWidth="2" />

      {/* base */}
      <rect x="55" y="110" width="130" height="20" rx="3" fill="url(#base)" stroke="#CFF1DE" />

      {/* pillars */}
      <rect x="70" y="60" width="15" height="50" fill="url(#pillars)" stroke="#A7E4C4" />
      <rect x="100" y="60" width="15" height="50" fill="url(#pillars)" stroke="#A7E4C4" />
      <rect x="130" y="60" width="15" height="50" fill="url(#pillars)" stroke="#A7E4C4" />
      <rect x="160" y="60" width="15" height="50" fill="url(#pillars)" stroke="#A7E4C4" />

      {/* steps */}
      <rect x="50" y="130" width="140" height="8" fill="#DDEFE6" />
      <rect x="45" y="138" width="150" height="6" fill="#CFE7DC" />
    </svg>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { label: "Dashboard",           href: "#/dashboard", icon: LayoutDashboard },
    { label: "Find study partners", href: "#/partners",  icon: UserPlus },
    { label: "My courses",          href: "#/courses",   icon: GraduationCap },
    { label: "Track my progress",   href: "#/progress",  icon: LineChart },
    { label: "Plan study sessions", href: "#/sessions",  icon: CalendarClock },
    { label: "Settings",            href: "#/settings",  icon: Settings },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>("a, button");
    const first = focusable?.[0], last = focusable?.[focusable.length - 1];
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && first && last) {
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    first?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const LinkItem = ({ link }: { link: NavLink }) => {
    const Icon = link.icon;
    const active = activeItem === link.label;
    return (
      <a
        href={link.href}
        onClick={() => setActiveItem(link.label)}
        className={[
          "group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition",
          active
            ? "bg-brand-50 text-brand-700 ring-1 ring-brand-200"
            : "text-gray-600 hover:bg-gray-50"
        ].join(" ")}
        aria-current={active ? "page" : undefined}
      >
        <Icon className={`w-5 h-5 ${active ? "text-brand-600" : "text-gray-400 group-hover:text-gray-500"}`} />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex w-64 bg-white/90 backdrop-blur border-r border-gray-100 flex-col">
        <div className="px-6 pt-6 pb-4 flex items-center gap-3">
          <img src={logo} alt="Campus Study Buddy" className="w-10 h-10 rounded-lg shadow-soft" />
          <div>
            <h2 className="font-bold">Campus Study Buddy</h2>
            <p className="text-xs text-gray-500">Learn from home</p>
          </div>
        </div>

        <div className="px-6">
          <div className="h-px bg-gray-100 my-3" />
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
          {navLinks.map((l) => <LinkItem key={l.label} link={l} />)}
        </nav>

        {/* Campus building art */}
        <footer className="p-4">
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-brand-50 p-4 flex flex-col items-center">
            <CampusBuildingArt />
          </div>
        </footer>
      </aside>

      {/* Mobile top bar (fixed) */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-40
                   flex items-center justify-between
                   bg-white/90 backdrop-blur border-b px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 h-8 rounded-md" alt="Campus Study Buddy" />
          <h1 className="font-semibold">Campus Study Buddy</h1>
        </div>
        <button aria-label="Open menu" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Spacer so content doesn’t hide under fixed bar */}
      <div className="md:hidden h-[56px]" />

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <aside
            ref={drawerRef}
            className="relative w-72 bg-white border-r flex flex-col z-50"
            aria-label="Mobile navigation"
          >
            <div className="p-6 flex items-center gap-3">
              <img src={logo} className="w-10 h-10 rounded-lg" alt="Campus Study Buddy" />
              <h2 className="font-bold text-lg">Campus Study Buddy</h2>
              <button onClick={() => setIsOpen(false)} className="ml-auto" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 space-y-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => { setActiveItem(l.label); setIsOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium ${
                    activeItem === l.label
                      ? "bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  aria-current={activeItem === l.label ? "page" : undefined}
                >
                  <l.icon className="w-5 h-5 text-gray-400" />
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Mobile campus art */}
            <footer className="p-4">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-brand-50 p-4 flex flex-col items-center">
                <CampusBuildingArt />
              </div>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
