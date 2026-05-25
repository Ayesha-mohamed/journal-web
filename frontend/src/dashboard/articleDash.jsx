import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How To Learn React Faster",
    author: "Admin",
    category: "Programming",
    date: "25 May 2026",
    views: 1200,
    status: "Published",
    image: "https://source.unsplash.com/400x250/?react,code",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Tips",
    author: "Admin",
    category: "JavaScript",
    date: "24 May 2026",
    views: 850,
    status: "Draft",
    image: "https://source.unsplash.com/400x250/?javascript,code",
  },
  {
    id: 3,
    title: "Understanding MongoDB",
    author: "Admin",
    category: "Database",
    date: "20 May 2026",
    views: 640,
    status: "Published",
    image: "https://source.unsplash.com/400x250/?mongodb,database",
  },
];

function Adminarticle() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen p-6">

      {/* top */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Articles
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all blog articles
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-md">
          <Plus size={20} />
          Add Article
        </button>
      </div>

      {/* search */}
      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
        <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>
      </div>

      {/* cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {articles.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition"
          >

            {/* image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* content */}
            <div className="p-5">

              {/* category + status */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {item.category}
                </span>

                <span className={`text-xs px-3 py-1 rounded-full ${
                  item.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-600"
                }`}>
                  {item.status}
                </span>
              </div>

              {/* title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* meta */}
              <p className="text-sm text-gray-500 mb-4">
                {item.date} • {item.views} views
              </p>

              {/* actions */}
              <div className="flex items-center justify-between">

                <button className="bg-blue-100 text-blue-600 p-2 rounded-xl hover:scale-105 transition">
                  <Eye size={18} />
                </button>

                <button className="bg-green-100 text-green-600 p-2 rounded-xl hover:scale-105 transition">
                  <Pencil size={18} />
                </button>

                <button className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition">
                  <Trash2 size={18} />
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Adminarticle;