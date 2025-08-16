// Header.tsx
import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, User } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl m-6 space-y-4 md:space-y-0">
      <div>
        <h1 className="text-2xl font-bold">Hi Martin!</h1>
        <p className="mt-1 text-sm">
          You have completed 5 lessons in the last day. Start your learning today.
        </p>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <button
          aria-label="View notifications"
          className="relative p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 p-1 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
              <li>
                <a href="#profile" className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                  Profile
                </a>
              </li>
              <li>
                <a href="#settings" className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                  Settings
                </a>
              </li>
              <li>
                <a href="#logout" className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
