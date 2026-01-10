import React from 'react';

const Navbar = () => {
  const navLinks = (
    <>
      <li><a href="#home" className="hover:text-blue-400 transition-all duration-300 font-medium italic">Home</a></li>
      <li><a href="#about" className="hover:text-blue-400 transition-all duration-300 font-medium italic">About</a></li>
      <li><a href="#projects" className="hover:text-blue-400 transition-all duration-300 font-medium italic">Projects</a></li>
      <li><a href="#contact" className="hover:text-blue-400 transition-all duration-300 font-medium italic">Contact</a></li>
    </>
  );

  return (
   
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-4 shadow-2xl bg-slate-800 border border-slate-700 rounded-2xl w-64 text-white space-y-3"
            >
              {navLinks}
              <li className="mt-4 border-t border-slate-700 pt-4">
                <a href="#contact" className="btn bg-cyan-400 btn-sm hover:bg-cyan-600 border-none text-white">Hire Me</a>
              </li>
            </ul>
          </div>
          
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-black bg-gradient-to-r  from-blue-400 italic to-cyan-400 bg-clip-text text-transparent ml-2 lg:ml-0">
            SALMA.DEV
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Right Action Button */}
        <div className="navbar-end">
          <a 
            href="#contact" 
            className="hidden sm:flex btn btn-sm bg-cyan-700 hover:bg-cyan-400 border-none text-white rounded-full px-6 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
          
          {/* Mobile only small button if hidden on desktop */}
          <a href="#contact" className="sm:hidden btn btn-xs btn-primary bg-blue-600 border-none text-[10px] h-8 px-6 rounded-full">
            Hire Me
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;