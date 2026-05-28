// import { useState } from "react";
// import { FilePlus, Image, Type, AlignLeft } from "lucide-react";
// import Dashboard from "./Dashbord";

// function AddArticle() {
//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     description: "",
//     status: "Draft",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImage = (e) => {
//     setForm({ ...form, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("New Article:", form);

//     alert("Article added successfully!");
//   };

//   return (
//      <div className="flex  ">
//     <Dashboard />
//     <div className="min-h-screen w-1/2 bg-[#f5f7fb] p-6 flex items-center justify-center">

//       <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8">

//         {/* header */}
//         <div className="mb-6 text-center">
//           <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
//             <FilePlus className="text-slate-600" />
//           </div>

//           <h1 className="text-2xl font-bold text-gray-800">
//             Add New Article
//           </h1>
//           <p className="text-gray-500 text-sm">
//             Create and publish a new blog post
//           </p>
//         </div>

//         {/* form */}
//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* title */}
//           <div>
//             <label className="text-sm text-gray-600">Title</label>
//             <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">
//               <Type size={18} className="text-gray-500" />
//               <input
//                 type="text"
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 placeholder="Enter article title"
//                 className="bg-transparent outline-none ml-2 w-full"
//                 required
//               />
//             </div>
//           </div>

//           {/* category */}
//           <div>
//             <label className="text-sm text-gray-600">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               placeholder="e.g Programming"
//               className="w-full bg-gray-100 px-4 py-3 rounded-2xl outline-none mt-1"
//               required
//             />
//           </div>

//           {/* description */}
//           <div>
//             <label className="text-sm text-gray-600">Description</label>
//             <div className="flex items-start bg-gray-100 rounded-2xl px-3 py-3 mt-1">
//               <AlignLeft size={18} className="text-gray-500 mt-1" />
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 placeholder="Write article content..."
//                 className="bg-transparent outline-none ml-2 w-full h-28 resize-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* image */}
//           <div>
//             <label className="text-sm text-gray-600">Image</label>
//             <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-3 mt-1">
//               <Image size={18} className="text-gray-500" />
//               <input
//                 type="file"
//                 onChange={handleImage}
//                 className="ml-2 w-full"
//               />
//             </div>
//           </div>

       

//           {/* submit */}
//           <button
//             type="submit"
//             className="w-full bg-slate-900 hover:bg-slate-700 transition text-white py-3 rounded-2xl font-semibold shadow-md"
//           >
//             Publish Article
//           </button>

//         </form>

//       </div>
//     </div>
//     </div>
//   );
// }

// export default AddArticle;

import { useState } from "react";
import {
  FilePlus,
  Image,
  Type,
  AlignLeft,
} from "lucide-react";

import Dashboard from "./Dashbord";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddArticle() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
     type: "",
    description: "",
    status: "Draft",
    image: null,
  });

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // image change
  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("title", form.title);
      formData.append(" type", form.type);
      formData.append("description", form.description);
      formData.append("status", form.status);
      formData.append("image", form.image);

      const res = await axios.post(
        "http://localhost:9000/api/journal",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      alert("Article added successfully!");
      navigate("/admin/article")

      // reset form
      setForm({
        title: "",
         type: "",
        description: "",
        status: "Draft",
        image: null,
      });

    } catch (error) {

      console.log("API Error:", error);

      alert("Failed to add article");
    }
  };

  return (
    <div className="flex">

      <Dashboard />

      <div className="min-h-screen w-full bg-[#f5f7fb] p-6 flex items-center justify-center">

        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8">

          {/* header */}
          <div className="mb-6 text-center">

            <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
              <FilePlus className="text-slate-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Add New Article
            </h1>

            <p className="text-gray-500 text-sm">
              Create and publish a new blog post
            </p>

          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* title */}
            <div>
              <label className="text-sm text-gray-600">
                Title
              </label>

              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">

                <Type
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter article title"
                  className="bg-transparent outline-none ml-2 w-full"
                  required
                />
              </div>
            </div>

            {/* category */}
            <div>
              <label className="text-sm text-gray-600">
                Category
              </label>

              <input
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="e.g Programming"
                className="w-full bg-gray-100 px-4 py-3 rounded-2xl outline-none mt-1"
                required
              />
            </div>

            {/* description */}
            <div>
              <label className="text-sm text-gray-600">
                Description
              </label>

              <div className="flex items-start bg-gray-100 rounded-2xl px-3 py-3 mt-1">

                <AlignLeft
                  size={18}
                  className="text-gray-500 mt-1"
                />

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write article content..."
                  className="bg-transparent outline-none ml-2 w-full h-28 resize-none"
                  required
                />
              </div>
            </div>

            {/* image */}
            <div>
              <label className="text-sm text-gray-600">
                Image
              </label>

              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-3 mt-1">

                <Image
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="file"
                  onChange={handleImage}
                  className="ml-2 w-full"
                  required
                />
              </div>
            </div>

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-700 transition text-white py-3 rounded-2xl font-semibold shadow-md"
            >
              Publish Article
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddArticle;