// import React, { useEffect, useState } from "react";
// import { Calendar, User, ArrowRight } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import axios from 'axios'
// import { Link } from "react-router-dom";


// function Articles() {
 
//   return (
//     <>
//     <Header />
   
//     <div className="min-h-screen bg-gray-100">
      
//       {/* Hero Section */}
//       <section className="bg-[url('https://i.pinimg.com/1200x/66/96/57/669657b77fd005d9ae48bdba113365f4.jpg')] from-blue-600 to-indigo-700 text-white py-20 px-8 md:px-20">
//         <div className="max-w-3xl">
//           <h1 className="text-5xl font-bold mb-6">
//             Latest Articles
//           </h1>

//           <p className="text-lg text-gray-200">
//             Explore trending stories, modern technology, 
//             design ideas, and insightful articles.
//           </p>
//         </div>
//       </section>


    


//       {/* Articles Grid */}
//       <section className="px-8 md:px-20 py-16">
//         <div className="grid md:grid-cols-3 gap-8">

//           {news.map((article, key) => (
//             <div
//               key={key}
//               className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
//             >
              
//               {/* Image */}
//               <img
//                 src={`http://localhost:9000/allimage/${article.image}`}
               
//                 className="w-full h-56 object-cover"
//               />

//               {/* Content */}
//               <div className="p-6">

//                 <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
//                   {article.type}
//                 </span>

//                 <h2 className="text-2xl font-bold mt-4 mb-4">
//                   {article.title}
//                 </h2>

//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-gray-500 text-sm mb-5">

//                   {/* <div className="flex items-center gap-1">
//                     <User size={16} />
//                     {article.author}
//                   </div> */}

//                   {/* <div className="flex items-center gap-1">
//                     <Calendar size={16} />
//                     {article.description}
//                   </div> */}

//                 </div>

//                 {/* <p className="text-gray-600 mb-6">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Voluptatem, doloremque.
//                 </p> */}

//              <Link to={`/readmore/${article._id}`}>  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
//                   Read More
//                   <ArrowRight size={18} />

//                 </button>
//                 </Link> 

//               </div>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* Newsletter */}
//       {/* <section className="px-8 md:px-20 py-16 bg-white">
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-10 text-center text-white">
          
//           <h2 className="text-4xl font-bold mb-4">
//             Subscribe to Our Newsletter
//           </h2>

//           <p className="text-gray-200 mb-8">
//             Get the latest articles and updates directly in your inbox.
//           </p>

//           <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-5 py-4 rounded-xl outline-none text-gray-700"
//             />

//             <button className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-xl font-semibold">
//               Subscribe
//             </button>
//           </div>

//         </div>
//       </section> */}

//       {/* Footer */}
//       <Footer />

//     </div>
//      </>
//   );
// }

// export default Articles;


import React, { useEffect, useState } from "react";
import {
  Calendar,
  ArrowRight,
  Search,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import axios from "axios";
import { Link } from "react-router-dom";

function Articles() {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  // get all articles
  const handleData = async () => {

    try {

      const res = await axios.get(
        "http://localhost:9000/api/get"
      );

      setNews(res.data);

    } catch (error) {

      console.log(
        "Read API Error",
        error
      );
    }
  };

  // search articles
  const handleSearch = async (key) => {

    try {

      // haddii search maran yahay
      if (key === "") {
        handleData();
        return;
      }

      const res = await axios.get(
        `http://localhost:9000/search/journal/${key}`
      );

      setNews(res.data);

    } catch (error) {

      console.log(
        "Search API Error",
        error
      );
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100">

        {/* Hero Section */}
        <section className="bg-[url('https://i.pinimg.com/1200x/66/96/57/669657b77fd005d9ae48bdba113365f4.jpg')] bg-cover bg-center text-white py-20 px-8 md:px-20 relative">

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="max-w-3xl relative z-10">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Articles
            </h1>

            <p className="text-lg text-gray-200">
              Explore trending stories, modern technology,
              design ideas, and insightful articles.
            </p>

          </div>
        </section>

        {/* Search */}
        <section className="px-6 md:px-20 mt-10">

          <div className="bg-white shadow-md rounded-2xl p-4 max-w-2xl mx-auto">

            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">

              <Search
                className="text-gray-500"
                size={20}
              />

              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch(e.target.value);
                }}
                className="bg-transparent outline-none ml-3 w-full"
              />

            </div>

          </div>

        </section>

        {/* Articles Grid */}
        <section className="px-6 md:px-20 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {news.map((article, key) => (

              <div
                key={key}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                {/* Image */}
                <img
                  src={`http://localhost:9000/allimage/${article.image}`}
                  alt=""
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />

                {/* Content */}
                <div className="p-6">

                  {/* category */}
                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                    {article.type}
                  </span>

                  {/* title */}
                  <h2 className="text-2xl font-bold mt-4 mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  {/* description */}
                  <p className="text-gray-600 mb-5 line-clamp-3">
                    {article.description}
                  </p>

                  {/* date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">

                    <Calendar size={16} />

                    <span>
                      {new Date(article.createdAt).toDateString()}
                    </span>

                  </div>

                  {/* button */}
                  <Link to={`/readmore/${article._id}`}>

                    <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={18} />
                    </button>

                  </Link>

                </div>
              </div>

            ))}

          </div>

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Articles;