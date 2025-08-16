import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Dashboard", href: "#" },
    { label: "Study Groups", href: "#" },
    { label: "Sessions", href: "#" },
    { label: "Progress", href: "#" },
    { label: "Settings", href: "#" },
  ];

  // Focus trap for mobile drawer
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = drawerRef.current?.querySelectorAll<
      HTMLButtonElement | HTMLAnchorElement
    >("a, button");
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

  // Reusable sidebar content
  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <header className="p-6 border-b relative">
        <h1 className="font-bold text-xl">Campus Study Buddy</h1>
        {isMobile && (
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </header>

      <nav className="flex-1 px-4 py-4 space-y-4">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-green-600 font-semibold"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <footer className="p-4">
        <button
          type="button"
          className="w-full py-2 bg-green-500 text-white rounded-lg"
        >
          Upgrade Now
        </button>
      </footer>
    </>
  );

  return (
    <>
      {/* Mobile header fixed at top */}
      <header className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b px-4 py-3 z-50">
        <h1 className="font-bold text-lg">Campus Study Buddy</h1>
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="text-gray-700"
          type="button"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Desktop sidebar */}
      <aside
        className="w-64 bg-white border-r hidden md:flex flex-col"
        aria-label="Sidebar navigation"
      >
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile sidebar"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Drawer anchored at top */}
          <aside
            ref={drawerRef}
            className="relative w-64 bg-white border-r flex flex-col z-50 top-0"
            aria-label="Mobile sidebar navigation"
          >
            <SidebarContent isMobile />
          </aside>
        </div>
      )}

      {/* Spacer for fixed mobile header */}
      <div className="md:hidden h-14" /> {/* Adjust height to match header */}
    </>
  );
}
