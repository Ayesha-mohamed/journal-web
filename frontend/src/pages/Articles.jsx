import React, { useEffect, useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios'
import { Link } from "react-router-dom";


function Articles() {
  // const articles = [
  //   {
  //     id: 1,
  //     title: "Modern Web Development Trends in 2026",
  //     category: "Technology",
  //     author: "Admin",
  //     date: "May 13, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //   },
  //   {
  //     id: 2,
  //     title: "How AI is Changing Digital Journalism",
  //     category: "Artificial Intelligence",
  //     author: "John Doe",
  //     date: "May 10, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  //   },
  //   {
  //     id: 3,
  //     title: "Best UI/UX Design Practices for Beginners",
  //     category: "Design",
  //     author: "Sarah Ahmed",
  //     date: "May 08, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  //   },
  //   {
  //     id: 4,
  //     title: "The Future of Online Learning Platforms",
  //     category: "Education",
  //     author: "Ali Hassan",
  //     date: "May 06, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  //   },
  //   {
  //     id: 5,
  //     title: "Building Responsive Websites with React",
  //     category: "Programming",
  //     author: "Admin",
  //     date: "May 05, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  //   },
  //   {
  //     id: 6,
  //     title: "Creative Content Writing for Modern Blogs",
  //     category: "Writing",
  //     author: "Fatima Noor",
  //     date: "May 02, 2026",
  //     image:
  //       "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  //   },
  // ];


  const [news, setNews] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState(null)


  const handleData = () =>{
    try {
     axios.get("http://localhost:9000/api/get").then((res)=>{
        setNews(res.data)
      })
      
    } catch (error) {
      console.log("errorka wuxuu ka jiraa articles page ka ee api readka",error)
    }
  }
  
  console.log(news)

  useEffect(()=>{
    handleData()
  },[])

  return (
    <>
    <Header />
   
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="bg-[url('https://i.pinimg.com/1200x/66/96/57/669657b77fd005d9ae48bdba113365f4.jpg')] from-blue-600 to-indigo-700 text-white py-20 px-8 md:px-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Latest Articles
          </h1>

          <p className="text-lg text-gray-200">
            Explore trending stories, modern technology, 
            design ideas, and insightful articles.
          </p>
        </div>
      </section>


    


      {/* Articles Grid */}
      <section className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {news.map((article, key) => (
            <div
              key={key}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              
              {/* Image */}
              <img
                src={`http://localhost:9000/allimage/${article.image}`}
               
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                  {article.type}
                </span>

                <h2 className="text-2xl font-bold mt-4 mb-4">
                  {article.title}
                </h2>

                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-5">

                  {/* <div className="flex items-center gap-1">
                    <User size={16} />
                    {article.author}
                  </div> */}

                  {/* <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {article.description}
                  </div> */}

                </div>

                {/* <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, doloremque.
                </p> */}

             <Link to={`/readmore/${article._id}`}>  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={18} />

                </button>
                </Link> 

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Newsletter */}
      <section className="px-8 md:px-20 py-16 bg-white">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-10 text-center text-white">
          
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-200 mb-8">
            Get the latest articles and updates directly in your inbox.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl outline-none text-gray-700"
            />

            <button className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
     </>
  );
}

export default Articles;