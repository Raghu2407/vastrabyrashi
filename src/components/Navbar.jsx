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
    <header className="w-full bg-white shadow-2xs text-black fixed top-0 left-0 z-50 h-[80px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 inline-block" />
          </Link>
        </div>

        {/* Desktop Search */}

        <div className="hidden md:block relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search…"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-xl"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            {/* <a href="#" className="hover:text-gray-500">Services</a> */}
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
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
      <nav id="mobile-menu" className="md:hidden hidden flex flex-col space-y-2 bg-white px-4 py-3 text-black">
        <Link to="/" className="block  hover:text-gray-300">Home</Link>
        <Link to="/about" className=" hover:text-gray-300">About</Link>
        {/* <a href="#" className="block text-white hover:text-gray-300">Services</a> */}
        <Link to="/contact" className=" hover:text-gray-300">Contact</Link>

        {/* Mobile Search */}
        <div className="mt-3 block md:hidden relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search…"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
