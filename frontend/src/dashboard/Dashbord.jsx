import React, { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-800 text-white flex items-center justify-between px-4 py-4 z-50 shadow-lg">
        <h1 className="text-xl font-bold">JournalHub</h1>

        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-72 bg-slate-800 text-white shadow-xl
          flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-8 border-b border-slate-700">
          <h1 className="text-3xl font-bold">
            JournalHub
          </h1>
        </div>

        <nav className="flex-1 p-6 space-y-4">

          <Link
            to="/admin/dashboard"
            onClick={() => setSidebarOpen(false)}
          >
            <button className="flex items-center gap-3 w-full hover:bg-slate-700 px-5 py-4 rounded-2xl transition">
              <LayoutDashboard size={22} />
              Dashboard
            </button>
          </Link>

          <Link
            to="/admin/article"
            onClick={() => setSidebarOpen(false)}
          >
            <button className="flex items-center gap-3 w-full hover:bg-slate-700 px-5 py-4 rounded-2xl transition">
              <FileText size={22} />
              Articles
            </button>
          </Link>

          <Link
            to="/admin/register"
            onClick={() => setSidebarOpen(false)}
          >
            <button className="flex items-center gap-3 w-full hover:bg-slate-700 px-5 py-4 rounded-2xl transition">
              <Users size={22} />
              Create Admin
            </button>
          </Link>

          <Link
            to="/admin/messages"
            onClick={() => setSidebarOpen(false)}
          >
            <button className="flex items-center gap-3 w-full hover:bg-slate-700 px-5 py-4 rounded-2xl transition">
              <MessageSquare size={22} />
              Messages
            </button>
          </Link>

        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full bg-red-600 hover:bg-red-700 px-5 py-4 rounded-2xl transition"
          >
            <LogOut size={22} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className="flex-1 pt-16 md:pt-0">
        {/* Page Content */}
      </div>
    </div>
  );
}

export default Dashboard;