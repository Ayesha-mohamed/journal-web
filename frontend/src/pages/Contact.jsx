import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
  <Header />
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="bg-[url('https://i.pinimg.com/1200x/66/96/57/669657b77fd005d9ae48bdba113365f4.jpg')] text-white py-20 px-8 md:px-20">
        <div className="max-w-3xl">
        
          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-200">
            Have questions, suggestions, or feedback? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="text-blue-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@journalhub.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <Phone className="text-green-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +252 61 0000000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-4 rounded-2xl">
                  <MapPin className="text-purple-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Mogadishu, Somalia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl flex items-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

        {/* Footer */}
        <Footer />

   

    </div>
    </>
  );
}

export default Contact;