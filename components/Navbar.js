import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold">
            Logo
          </a>

          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`lg:flex flex-grow items-center ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="lg:flex items-center justify-between space-x-4">
              <li>
                <a href="/" className="hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-500">
                  Contact
                </a>
              </li>
            </ul>

            <button
              className="ml-4 lg:ml-8 text-sm py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: #f1f1f1;
          color: #333;
        }

        .navbar.dark {
          background-color: #333;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;