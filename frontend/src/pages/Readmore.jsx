// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// function Readmore() {

//   // SINGLE DATA
//   const [single, setSingle] = useState({});

//   // LOADING
//   const [loading, setLoading] = useState(true);

//   const params = useParams();

//   // GET SINGLE ARTICLE
//   const handleSingleapi = async () => {

//     try {

//       const res = await axios.get(
//         `http://localhost:9000/single/journal/${params.id}`
//       );

//       setSingle(res.data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };

//   // RUN FUNCTION
//   useEffect(() => {

//     handleSingleapi();

//   }, [params.id]);



//   // LOADING UI
//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
//         Loading...
//       </div>
//     );
//   }



//   return (
//     <div className="min-h-screen bg-gray-100 p-10">

//       {/* BACK BUTTON */}
//       <Link
//         to="/"
//         className="bg-slate-900 text-white px-8 py-3 rounded-xl text-lg"
//       >
//         Back
//       </Link>



//       {/* CONTENT */}
//       <div className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-lg overflow-hidden">

//         {/* IMAGE */}
//         <img
//           className="w-full h-[500px] object-cover"
//           src={`http://localhost:9000/allimage/${single.image}`}
//           alt={single.title}
//         />



//         {/* TEXT */}
//         <div className="p-10">

//           {/* CATEGORY */}
//           <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm">
//             {single.type}
//           </span>



//           {/* TITLE */}
//           <h1 className="text-5xl font-bold mt-6 leading-tight">
//             {single.title}
//           </h1>



//           {/* DESCRIPTION */}
//           <p className="text-gray-700 text-xl leading-10 mt-8">
//             {single.description}
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Readmore;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Readmore() {
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const handleSingleapi = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9000/single/journal/${params.id}`
      );
      setSingle(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSingleapi();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl md:text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 py-6">

      {/* BACK BUTTON */}
      <Link
        to="/articles"
        className="inline-block bg-slate-900 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg"
      >
        ← Back
      </Link>

      {/* CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto mt-6 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">

        {/* IMAGE */}
        <img
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          src={`http://localhost:9000/allimage/${single.image}`}
          alt={single.title}
        />

        {/* TEXT */}
        <div className="p-5 sm:p-8 md:p-10">

          {/* CATEGORY */}
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs sm:text-sm">
            {single.type}
          </span>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 leading-snug sm:leading-tight">
            {single.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 mt-5 sm:mt-8">
            {single.description}
          </p>

        </div>

      </div>
    </div>
  );
}

export default Readmore;