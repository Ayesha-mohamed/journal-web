import React from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  Bell,
  Search,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {


  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-slate-800 text-white shadow-xl hidden md:flex flex-col">
        
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-white">
            JournalHub
          </h1>
        </div>

        <nav className="flex-1 p-6 space-y-4">

         <Link to='/admin/dashboard'> <button className="flex items-center gap-3 w-full hover:bg-gray-900   px-5 py-4 rounded-2xl">
            <LayoutDashboard size={22} />
            Dashboard
          </button>
         </Link>

         <Link to='/admin/article'> <button className="flex items-center gap-3 w-full hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
            <FileText size={22} />
            Articles
          </button>
          </Link>

        <Link to='/admin/register'>  <button className="flex items-center gap-3 w-full hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
            <Users size={22} />
            Create admin
          </button>
          </Link>

        <Link to='/admin/messages' ><button className="flex items-center gap-3 w-full hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
            <MessageSquare size={22} />
            messages
          </button>
        </Link>
        

        </nav>

      </aside>

      {/* Main Content */}
     
    </div>
  );
}

export default Dashboard;