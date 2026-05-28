import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-6 md:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="text-slate-700" size={32} />
          <h1 className="text-2xl font-bold text-slate-700">
            JournalHub
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-slate-700 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/articles"
            className="text-gray-700 hover:text-slate-700 font-medium transition"
          >
            Articles
          </Link>

        

          <Link
            to="/contact"
            className="text-gray-700 hover:text-slate-700 font-medium transition"
          >
            Contact
          </Link>

       <Link to='/admin/login' >  <button className="bg-slate-700 hover:bg-slate-800 text-white px-5 py-2 rounded-xl transition">
            Login
          </button>
          </Link> 
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={30} className="text-slate-700" />
          ) : (
            <Menu size={30} className="text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        } bg-white px-6`}
      >
        <div className="flex flex-col gap-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-slate-700 font-medium"
          >
            Home
          </Link>

          <Link
            to="/articles"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-slate-700 font-medium"
          >
            Articles
          </Link>

         

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-slate-700 font-medium"
          >
            Contact
          </Link>

          <button className="bg-slate-700 hover:bg-slate-800 text-white px-5 py-3 rounded-xl transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
