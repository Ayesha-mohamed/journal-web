import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-700">
          JournalHub
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/articles" className="hover:text-blue-600 transition">
            Articles
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <Link to='/admin/login' className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition">
          Login
        </Link>
      </nav>
    </div>
  )
}

export default Header
