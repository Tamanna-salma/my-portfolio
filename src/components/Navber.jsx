import React from 'react';

const Navber = () => {
  return (
    
    <div className="navbar bg-slate-600/80 backdrop-blur-lg z-50 border-b border-slate-700">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
       
      </ul>
    </div>
     <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text hover:text-white text-transparent">
                <h1>SAlMA.DEV</h1>
            </div>
  </div>
  <div className="navbar-end hidden lg:flex">
     <div class="hidden md:flex space-x-8 text-sm font-medium">
                <a href="#home" class="hover:text-blue-400 transition transform hover:-translate-y-1 text-white">Home</a>
                <a href="#about" class="hover:text-blue-400 transition transform hover:-translate-y-1 text-white">About</a>
                <a href="#projects" class="hover:text-blue-400 transition transform hover:-translate-y-1 text-white">Projects</a>
                <a href="#contact" class="hover:text-blue-400 transition transform hover:-translate-y-1 text-white">Contact</a>
            </div>
  </div>
  
</div>
  );
};

export default Navber;