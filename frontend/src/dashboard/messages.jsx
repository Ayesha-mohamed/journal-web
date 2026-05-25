import { Mail, User, Trash2 } from "lucide-react";

const messages = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    message: "Hello, I like your website. Can you help me with a project?",
  },
  {
    id: 2,
    name: "Amina Hassan",
    email: "amina@gmail.com",
    message: "I want to collaborate with you on a blog project.",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@gmail.com",
    message: "Great work! Keep it up 👍",
  },
];

function Messages() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen p-6">

      {/* header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Messages Inbox
        </h1>
        <p className="text-gray-500 mt-1">
          All messages sent by users
        </p>
      </div>

      {/* messages grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white rounded-3xl shadow-sm p-5 hover:shadow-lg transition"
          >

            {/* user info */}
            <div className="flex items-center gap-3 mb-4">

              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  {msg.name}
                </h2>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Mail size={14} />
                  {msg.email}
                </div>
              </div>

            </div>

            {/* message */}
            <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-2xl">
              {msg.message}
            </p>

            {/* actions */}
            <div className="flex justify-end mt-4">
              <button className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition">
                <Trash2 size={18} />
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Messages;