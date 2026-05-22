import React from "react";
import { Search, BookOpen, TrendingUp, Clock } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
   <Header />
    

      {/* Hero Section */}
      <section className="px-8 md:px-20 py-16 text-white bg-[url('https://i.pinimg.com/1200x/35/d6/89/35d6894b50e38ea69d6cac0d36efc7d0.jpg')] w-full bg-cover bg-center h-[550px]">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Discover Amazing Stories & Research Articles
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Read modern journals, trending articles, and insightful content
            from writers around the world.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 flex items-center max-w-xl shadow-lg">
            <Search className="text-gray-500 ml-3" size={22} />

            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 outline-none text-gray-700 rounded-2xl"
            />

            <button className="bg-slate-700 hover:bg-slate-800 transition text-white px-6 py-3 rounded-xl">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose JournalHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <BookOpen className="text-blue-600" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Quality Articles
            </h3>

            <p className="text-gray-600">
              Read high-quality journals and articles written by professional
              writers and researchers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <TrendingUp className="text-green-600" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Trending Topics
            </h3>

            <p className="text-gray-600">
              Stay updated with the latest news, trending stories, and modern
              discussions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <Clock className="text-purple-600" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Daily Updates
            </h3>

            <p className="text-gray-600">
              Fresh content uploaded every day to keep readers informed and
              inspired.
            </p>
          </div>

        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-8 md:px-20 py-16 bg-white">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold"> Latest Articles </h2>
        <Link to="/articles" className="text-blue-600 font-semibold hover:underline">
            View All </Link>
             </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
              <img src={`https://picsum.photos/500/300?random=${item}`} alt="article"  className="w-full h-52 object-cover"/>

              <div className="p-6">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  Technology
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Modern Web Development Trends
                </h3>

                <p className="text-gray-600 mb-4">
                  Explore the latest technologies shaping the future of web
                  applications and digital experiences.
                </p>

                <button className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
