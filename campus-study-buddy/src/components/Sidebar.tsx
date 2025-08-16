// Sidebar.tsx
import { useState, useRef, useEffect } from "react";
import { Menu, X, Home, Users, Calendar, BarChart2, Settings } from "lucide-react";

// Import the logo from src/assets
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navLinks = [
    { label: "Dashboard", href: "#", icon: <Home className="w-5 h-5" /> },
    { label: "Study Groups", href: "#", icon: <Users className="w-5 h-5" /> },
    { label: "Sessions", href: "#", icon: <Calendar className="w-5 h-5" /> },
    { label: "Progress", href: "#", icon: <BarChart2 className="w-5 h-5" /> },
    { label: "Settings", href: "#", icon: <Settings className="w-5 h-5" /> },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const focusableElements = drawerRef.current?.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>(
      "a, button"
    );
    const firstEl = focusableElements?.[0];
    const lastEl = focusableElements?.[focusableElements.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && firstEl && lastEl) {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r flex-col">
        <div className="p-6 flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="font-bold text-xl">Campus Study Buddy</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveItem(link.label)}
              className={`flex items-center px-3 py-2 rounded-lg font-medium hover:bg-green-100 ${
                activeItem === link.label ? "bg-green-200 text-green-700" : "text-gray-700"
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <footer className="p-4">
          <button className="w-full py-2 bg-green-500 text-white rounded-lg">Upgrade Now</button>
        </footer>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden flex items-center justify-between bg-white border-b px-4 py-3">
        <h1 className="font-bold text-lg">Campus Study Buddy</h1>
        <button aria-label="Open menu" onClick={() => setIsOpen(true)} className="text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>

          <aside
            ref={drawerRef}
            className="relative w-64 bg-white border-r flex flex-col z-50"
            aria-label="Mobile sidebar navigation"
          >
            <div className="p-6 flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
              <h2 className="font-bold text-xl">Campus Study Buddy</h2>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveItem(link.label);
                    setIsOpen(false);
                  }}
                  className={`flex items-center px-3 py-2 rounded-lg font-medium hover:bg-green-100 ${
                    activeItem === link.label ? "bg-green-200 text-green-700" : "text-gray-700"
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </nav>
            <footer className="p-4">
              <button className="w-full py-2 bg-green-500 text-white rounded-lg">Upgrade Now</button>
            </footer>
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
