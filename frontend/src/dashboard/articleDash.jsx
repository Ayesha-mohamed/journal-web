// import {
//   Search,
//   Plus,
//   Eye,
//   Pencil,
//   Trash2,
// } from "lucide-react";
// import Dashboard from "./Dashbord";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";



// function Adminarticle() {

//   const [news, setNews] = useState([])

//     const handleData = () =>{
//     try {
//      axios.get("http://localhost:9000/api/get").then((res)=>{
//         setNews(res.data)
//       })
      
//     } catch (error) {
//       console.log("errorka wuxuu ka jiraa articles page ka ee adminka api readka",error)
//     }
//   }
  
//   console.log(news)

//   useEffect(()=>{
//     handleData()
//   },[])

//   return (
//        <div className="flex ">
//     <Dashboard />
//     <div className="bg-[#f5f7fb] min-h-screen p-6">

//       {/* top */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">
//             Articles
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage all blog articles
//           </p>
//         </div>

//       <Link to='/add/article'> <button className="bg-slate-900 hover:bg-slate-800 transition text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-md">
//           <Plus size={20} />
//           Add Article
//         </button>
//         </Link> 
//       </div>

//       {/* search */}
//       <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
//         <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">
//           <Search className="text-gray-500" size={20} />
//           <input
//             type="text"
//             placeholder="Search articles..."
//             className="bg-transparent outline-none ml-3 w-full"
//           />
//         </div>
//       </div>

//       {/* cards grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {news.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition"
//           >

//             {/* image */}
//             <img
//                 src={`http://localhost:9000/allimage/${item.image}`}
              
//               className="w-full h-48 object-cover"
//             />

//             {/* content */}
//             <div className="p-5">

//               {/* category + status */}
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
//                   {item.type}
//                 </span>

               
//               </div>

//               {/* title */}
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h2>

//               {/* meta */}
//               <p className="text-sm text-gray-500 mb-4 line-clamp-3">
//                 {item.description} • 
//               </p>

//               {/* actions */}
//               <div className="flex items-center justify-between">

               

//                 <button className="bg-green-100 text-green-600 p-2 rounded-xl hover:scale-105 transition">
//                   <Pencil size={18} />
//                 </button>

//                 <button className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition">
//                   <Trash2 size={18} />
//                 </button>

//               </div>
//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//     </div>
//   );
// }

// export default Adminarticle;


import {
  Search,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

import Dashboard from "./Dashbord";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Adminarticle() {

  const [news, setNews] = useState([]);

  // read data
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

  // delete article
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Ma hubtaa inaad delete gareyneyso article-kan?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:9000/delete/journal/${id}`
      );

      alert("Article deleted successfully");

      // update UI
      setNews(news.filter((item) => item._id !== id));

    } catch (error) {

      console.log(
        "Delete API Error",
        error
      );

      alert("Failed to delete article");
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="flex">

      <Dashboard />

      <div className="bg-[#f5f7fb] min-h-screen p-6 w-full">

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

          <Link to="/add/article">
            <button className="bg-slate-900 hover:bg-slate-800 transition text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-md">
              <Plus size={20} />
              Add Article
            </button>
          </Link>

        </div>

        {/* search */}
        <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">

            <Search
              className="text-gray-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search articles..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {news.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition"
            >

              {/* image */}
              <img
                src={`http://localhost:9000/allimage/${item.image}`}
                alt=""
                className="w-full h-48 object-cover"
              />

              {/* content */}
              <div className="p-5">

                {/* category */}
                <div className="flex justify-between items-center mb-3">

                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {item.type}
                  </span>

                </div>

                {/* title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>

                {/* description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* actions */}
                <div className="flex items-center justify-between">

              <Link to={`/update/article/${item._id}`}>   <button className="bg-green-100 text-green-600 p-2 rounded-xl hover:scale-105 transition">
                    <Pencil size={18} />
                  </button>
                  </Link> 
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Adminarticle;