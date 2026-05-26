// pages/admin/Dashboard.jsx

import {
  FileText,
  Users,
  MessageSquare,
  Eye,
  Trash2,
  Pencil,
  Link,
} from "lucide-react";
import Dashboard from "./Dashbord";

const Report = () => {
  const stats = [
    {
      title: "Total Articles",
      value: 120,
      icon: <FileText size={28} />,
      color: "bg-blue-500",
    },
 
    {
      title: "Messages",
      value: 48,
      icon: <MessageSquare size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Admins",
      value: 3,
      icon: <Users size={28} />,
      color: "bg-orange-500",
    },
  ];

  const recentArticles = [
    {
      id: 1,
      title: "The Future of AI in Education",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      views: 1200,
      date: "May 24, 2026",
    },
    {
      id: 2,
      title: "Technology and Modern Business",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      views: 950,
      date: "May 22, 2026",
    },
    {
      id: 3,
      title: "How Developers Build Fast Websites",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      date: "May 20, 2026",
    },
  ];

  return (
       <div className="flex ">
    <Dashboard />
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Report
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to JournalHub Admin Dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-lg transition"
          >
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} text-white p-4 rounded-xl`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Articles Report */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Articles Report
          </h2>

        {/* <Link to='/admin/article'> <button className="bg-blue-600 text-black px-5 py-2 rounded-xl hover:bg-blue-700 transition">
            View All
          </button>
          </Link>  */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
                  <span>{article.date}</span>
                </div>

                {/* <div className="flex items-center justify-between pt-3">

               

                <button className="bg-green-100 text-green-600 p-2 rounded-xl hover:scale-105 transition">
                  <Pencil size={18} />
                </button>

                <button className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition">
                  <Trash2 size={18} />
                </button>

              </div> */}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Report;