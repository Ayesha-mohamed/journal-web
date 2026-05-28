import {
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";

import Dashboard from "./Dashbord";
import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {

  const [latest, setLatest] = useState([]);
  const [article, setArticle] = useState(0);
  const [message, setMessage] = useState(0);
  const [admins, setAdmins] = useState(0);

  // latest articles
  const handleData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/latest/api"
      );

      setLatest(res.data);

    } catch (error) {
      console.log("Latest API Error", error);
    }
  };

  // total articles
  const totalArticle = async () => {
    try {

      const res = await axios.get(
        "http://localhost:9000/total/journal"
      );

      setArticle(res.data.total);

    } catch (error) {
      console.log("Article API Error", error);
    }
  };

  // total messages
  const totalMessage = async () => {
    try {

      const res = await axios.get(
        "http://localhost:9000/total/contact"
      );

      setMessage(res.data.meassage);

    } catch (error) {
      console.log("Message API Error", error);
    }
  };

  console.log(message)

  // total admins
  const totalAdmins = async () => {
    try {

      const res = await axios.get(
        "http://localhost:9000/total/admins"
      );

      setAdmins(res.data.adminsTotal);

    } catch (error) {
      console.log("Admins API Error", error);
    }
  };

  useEffect(() => {
    handleData();
    totalAdmins();
    totalArticle();
    totalMessage();
  }, []);

  // stats array
  const stats = [
    {
      title: "Total Articles",
      value: article,
      icon: <FileText size={28} />,
      color: "bg-blue-500",
    },

    {
      title: "Messages",
      value: message,
      icon: <MessageSquare size={28} />,
      color: "bg-purple-500",
    },

    {
      title: "Admins",
      value: admins,
      icon: <Users size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="flex">

      <Dashboard />

      <div className="p-6 bg-gray-100 min-h-screen w-full">

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

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

        {/* Latest Articles */}
        <div className="mt-10">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {latest.map((article, id) => (
              <div
                key={id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >

                {/* Image */}
                <img
                  src={`http://localhost:9000/allimage/${article.image}`}
                  alt=""
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                    {article.description}
                  </p>

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