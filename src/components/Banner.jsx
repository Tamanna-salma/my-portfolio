import React from 'react';
// react-icons থেকে আইকন ইম্পোর্ট
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Banner = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Profile Image Section */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-20 animate-pulse"></div>
          <img 
            src="https://i.ibb.co.com/bSqT813/Whats-App-Image-2026-01-01-at-1-09-09-AM.jpg" 
            alt="Ummey Salma" 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-2xl transition-transform duration-500 hover:scale-105 object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900 animate-bounce"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base animate-pulse">
            Available for Hire
          </h2>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
            I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ummey Salma</span>
          </h1>
          
          <h3 className="text-3xl md:text-5xl font-bold text-slate-300">
            Creative <span className="text-blue-400">Frontend</span> Developer
          </h3>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto py-4">
            Building seamless digital experiences with modern code and pixel-perfect design.
          </p>
        </div>

        {/* Buttons & Socials Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          
          {/* Resume Download Button */}
          <a 
            href="/resume.pdf" 
            download 
            className="btn btn-primary btn-lg rounded-full px-10 border-none bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
            </svg>
            Download Resume
          </a>

          {/* Social Icons Section */}
          <div className="flex space-x-5 items-center">
            {/* GitHub */}
            <a 
              href="https://github.com/Tamanna-salma" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-ghost btn-circle text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 scale-125"
            >
              <FaGithub size={28} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ummeysalma912a31317/" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-ghost btn-circle text-slate-400 hover:text-[#0077b5] hover:bg-slate-800 transition-all duration-300 scale-125"
            >
              <FaLinkedin size={28} />
            </a>

            {/* Facebook */}
            <a 
              href="https://web.facebook.com/ummey.salma.tamanna.2024" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-ghost btn-circle text-slate-400 hover:text-[#1877f2] hover:bg-slate-800 transition-all duration-300 scale-125"
            >
              <FaFacebook size={28} />
            </a>

            {/* Email */}
            <a 
              href="mailto:tamannaummey26@gmail.com" 
              className="btn btn-ghost btn-circle text-slate-400 hover:text-[#ea4335] hover:bg-slate-800 transition-all duration-300 scale-125"
            >
              <IoMail size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;