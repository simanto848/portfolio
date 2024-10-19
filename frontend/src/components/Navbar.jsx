import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/work" className="hover:text-blue-400 hover:underline">
            Work
          </Link>
          <Link to="/about" className="hover:text-blue-400 hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400 hover:underline">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button id="mobile-menu-button" className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
