import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchTerm.trim()) {
        navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  };

  return (
    <header className="w-full bg-sky-100 text-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 inline-block" />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search…"
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300 w-xl"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            <a href="#" className="hover:text-gray-500">Services</a>
            <a href="#" className="hover:text-gray-500">Contact</a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav id="mobile-menu" className="md:hidden hidden flex flex-col space-y-2 bg-gray-700 px-4 py-3">
        <Link to="/" className="block text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
        <a href="#" className="block text-white hover:text-gray-300">Services</a>
        <a href="#" className="block text-white hover:text-gray-300">Contact</a>

        {/* Mobile Search */}
        <div className="mt-3 block md:hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search…"
            className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
