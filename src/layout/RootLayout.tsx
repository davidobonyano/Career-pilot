import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF9E7] via-[#C0E6BA] to-[#EAF9E7] text-[#013237] flex flex-col">
      {/* Header */}
      <header className="bg-[#4CA771] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">CareerPilot</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/board"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : "hover:underline"
            }
          >
            Board
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : "hover:underline"
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : "hover:underline"
            }
          >
            Tasks
          </NavLink>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet /> {/* ErrorElement or page content renders here */}
      </main>

      {/* Footer */}
      <footer className="bg-[#C0E6BA] text-[#013237] text-center py-3">
        © {new Date().getFullYear()} CareerPilot
      </footer>
    </div>
  );
};

export default RootLayout;
