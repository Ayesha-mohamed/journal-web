// // pages/admin/UpdateArticle.jsx

// import { useEffect, useState } from "react";
// import {
//   FilePlus,
//   Image,
//   Type,
//   AlignLeft,
// } from "lucide-react";

// import Dashboard from "./Dashbord";
// import axios from "axios";

// import {
//   useNavigate,
//   useParams,
// } from "react-router-dom";

// function UpdateArticle() {

//   const { id } = useParams();

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     type: "",
//     description: "",
//     image: null,
//   });

//   // read single article
//   const getSingleData = async () => {

//     try {

//       const res = await axios.get(
//         `http://localhost:9000/single/journal/${id}`
//       );

//       setForm({
//         title: res.data.title,
//         type: res.data.type,
//         description: res.data.description,
//         image: null,
//       });

//     } catch (error) {

//       console.log(
//         "Single Read Error",
//         error
//       );
//     }
//   };

//   useEffect(() => {
//     getSingleData();
//   }, []);

//   // input change
//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // image change
//   const handleImage = (e) => {

//     setForm({
//       ...form,
//       image: e.target.files[0],
//     });
//   };

//   // update submit
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const formData = new FormData();

//       formData.append("title", form.title);
//       formData.append("type", form.type);
//       formData.append(
//         "description",
//         form.description
//       );

//       // haddii image cusub jiro
//       if (form.image) {
//         formData.append(
//           "image",
//           form.image
//         );
//       }

//       await axios.put(
//         `http://localhost:9000/update/journal/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type":
//               "multipart/form-data",
//           },
//         }
//       );

//       alert(
//         "Article updated successfully"
//       );

//       navigate("/admin/article");

//     } catch (error) {

//       console.log(
//         "Update API Error",
//         error
//       );

//       alert("Failed to update article");
//     }
//   };

//   return (
//     <div className="flex">

//       <Dashboard />

//       <div className="min-h-screen w-full bg-[#f5f7fb] p-6 flex items-center justify-center">

//         <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8">

//           {/* header */}
//           <div className="mb-6 text-center">

//             <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">

//               <FilePlus className="text-slate-600" />

//             </div>

//             <h1 className="text-2xl font-bold text-gray-800">
//               Update Article
//             </h1>

//             <p className="text-gray-500 text-sm">
//               Edit your article information
//             </p>

//           </div>

//           {/* form */}
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >

//             {/* title */}
//             <div>

//               <label className="text-sm text-gray-600">
//                 Title
//               </label>

//               <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">

//                 <Type
//                   size={18}
//                   className="text-gray-500"
//                 />

//                 <input
//                   type="text"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   placeholder="Enter article title"
//                   className="bg-transparent outline-none ml-2 w-full"
//                   required
//                 />

//               </div>
//             </div>

//             {/* category */}
//             <div>

//               <label className="text-sm text-gray-600">
//                 Category
//               </label>

//               <input
//                 type="text"
//                 name="type"
//                 value={form.type}
//                 onChange={handleChange}
//                 placeholder="e.g Programming"
//                 className="w-full bg-gray-100 px-4 py-3 rounded-2xl outline-none mt-1"
//                 required
//               />

//             </div>

//             {/* description */}
//             <div>

//               <label className="text-sm text-gray-600">
//                 Description
//               </label>

//               <div className="flex items-start bg-gray-100 rounded-2xl px-3 py-3 mt-1">

//                 <AlignLeft
//                   size={18}
//                   className="text-gray-500 mt-1"
//                 />

//                 <textarea
//                   name="description"
//                   value={form.description}
//                   onChange={handleChange}
//                   placeholder="Write article content..."
//                   className="bg-transparent outline-none ml-2 w-full h-28 resize-none"
//                   required
//                 />

//               </div>
//             </div>

//             {/* image */}
//             <div>

//               <label className="text-sm text-gray-600">
//                 New Image
//               </label>

//               <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-3 mt-1">

//                 <Image
//                   size={18}
//                   className="text-gray-500"
//                 />

//                 <input
//                   type="file"
//                   onChange={handleImage}
//                   className="ml-2 w-full"
//                 />

//               </div>
//             </div>

//             {/* submit */}
//             <button
//               type="submit"
//               className="w-full bg-slate-900 hover:bg-slate-700 transition text-white py-3 rounded-2xl font-semibold shadow-md"
//             >
//               Update Article
//             </button>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateArticle;



// pages/admin/UpdateArticle.jsx

import { useEffect, useState } from "react";
import { FilePlus, Image, Type, AlignLeft } from "lucide-react";
import Dashboard from "./Dashbord";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "",
    description: "",
    image: null,
  });

  const [imageUrl, setImageUrl] = useState("");

  // GET SINGLE ARTICLE
  const getSingleData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9000/single/journal/${id}`
      );

      setForm({
        title: res.data.title,
        type: res.data.type,
        description: res.data.description,
        image: null,
      });

      setImageUrl(res.data.image); // existing image
    } catch (error) {
      console.log("Single Read Error", error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // IMAGE CHANGE
  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  // UPDATE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("type", form.type);
      formData.append("description", form.description);

      if (form.image) {
        formData.append("image", form.image);
      }

      await axios.put(
        `http://localhost:9000/update/journal/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Article updated successfully");
      navigate("/admin/article");
    } catch (error) {
      console.log("Update API Error", error);
      alert("Failed to update article");
    }
  };

  return (
    <div className="flex">
      <Dashboard />

      <div className="min-h-screen w-full bg-[#f5f7fb] p-6 flex items-center justify-center">
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8">

          {/* HEADER */}
          <div className="mb-6 text-center">
            <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
              <FilePlus className="text-slate-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Update Article
            </h1>

            <p className="text-gray-500 text-sm">
              Edit your article information
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* TITLE */}
            <div>
              <label className="text-sm text-gray-600">Title</label>

              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">
                <Type size={18} className="text-gray-500" />

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-2 w-full"
                  required
                />
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <label className="text-sm text-gray-600">Category</label>

              <input
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-3 rounded-2xl outline-none mt-1"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm text-gray-600">Description</label>

              <div className="flex items-start bg-gray-100 rounded-2xl px-3 py-3 mt-1">
                <AlignLeft size={18} className="text-gray-500 mt-1" />

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-2 w-full h-28 resize-none"
                  required
                />
              </div>
            </div>

            {/* OLD IMAGE PREVIEW */}
            {imageUrl && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Current Image</p>
                <img
                  src={`http://localhost:9000/allimage/${imageUrl}?t=${Date.now()}`}
                  alt="current"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}

            {/* NEW IMAGE */}
            <div>
              <label className="text-sm text-gray-600">New Image</label>

              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-3 mt-1">
                <Image size={18} className="text-gray-500" />

                <input
                  type="file"
                  onChange={handleImage}
                  className="ml-2 w-full"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-700 transition text-white py-3 rounded-2xl font-semibold"
            >
              Update Article
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default UpdateArticle;