import { useState } from "react";
import { UserPlus, Mail, Lock } from "lucide-react";
import Dashboard from "./Dashbord";

function AdminRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register Admin:", form);
  };

  return (
       <div className="flex ">
    <Dashboard />
    <div className="min-h-screen w-1/2 flex items-center justify-center bg-[#f5f7fb] p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8">

        {/* header */}
        <div className="text-center mb-6">
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
            <UserPlus className="text-slate-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Admin Register
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Create a new admin account
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">
              <UserPlus size={18} className="text-gray-500" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">
              <Mail size={18} className="text-gray-500" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2 mt-1">
              <Lock size={18} className="text-gray-500" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

         

          {/* button */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-700 transition text-white py-3 rounded-2xl font-semibold mt-2 shadow-md"
          >
            Create Admin
          </button>

        </form>

      </div>
    </div>
    </div>
  );
}

export default AdminRegister;