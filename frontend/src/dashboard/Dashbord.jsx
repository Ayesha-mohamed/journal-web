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

function Dashboard() {
  const articles = [
    {
      id: 1,
      title: "Modern Web Development Trends",
      category: "Technology",
      status: "Published",
    },
    {
      id: 2,
      title: "AI in Digital Journalism",
      category: "Artificial Intelligence",
      status: "Draft",
    },
    {
      id: 3,
      title: "Creative UI/UX Design Ideas",
      category: "Design",
      status: "Published",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl hidden md:flex flex-col">
        
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-blue-600">
            JournalHub
          </h1>
        </div>

        <nav className="flex-1 p-6 space-y-4">

          <button className="flex items-center gap-3 w-full bg-blue-600 text-white px-5 py-4 rounded-2xl">
            <LayoutDashboard size={22} />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full hover:bg-gray-100 px-5 py-4 rounded-2xl transition">
            <FileText size={22} />
            Articles
          </button>

          <button className="flex items-center gap-3 w-full hover:bg-gray-100 px-5 py-4 rounded-2xl transition">
            <Users size={22} />
            Users
          </button>

          <button className="flex items-center gap-3 w-full hover:bg-gray-100 px-5 py-4 rounded-2xl transition">
            <MessageSquare size={22} />
            Comments
          </button>

          <button className="flex items-center gap-3 w-full hover:bg-gray-100 px-5 py-4 rounded-2xl transition">
            <Bell size={22} />
            Notifications
          </button>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back, Admin 👋
            </p>
          </div>

          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="bg-white px-4 py-3 rounded-2xl shadow-md flex items-center gap-3 w-72">
              <Search className="text-gray-500" size={20} />

              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full"
              />
            </div>

            {/* Add Button */}
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl flex items-center gap-2">
              <Plus size={20} />
              New Article
            </button>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-gray-500 text-lg">
              Total Articles
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              120
            </h1>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-gray-500 text-lg">
              Total Users
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              3.2K
            </h1>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-gray-500 text-lg">
              Comments
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              890
            </h1>
          </div>

        </div>

        {/* Articles Table */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-8 border-b flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Recent Articles
            </h2>

            <button className="text-blue-600 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-8 py-5">
                    Title
                  </th>

                  <th className="text-left px-8 py-5">
                    Category
                  </th>

                  <th className="text-left px-8 py-5">
                    Status
                  </th>

                  <th className="text-left px-8 py-5">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-8 py-6 font-medium">
                      {article.title}
                    </td>

                    <td className="px-8 py-6 text-gray-600">
                      {article.category}
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-medium ${
                          article.status === "Published"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>

                    <td className="px-8 py-6">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;