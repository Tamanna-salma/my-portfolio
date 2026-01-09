import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Banner = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center mt-6 bg-slate-900 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 text-center">
        
        {/* Profile Image Section with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-20 animate-pulse"></div>
          <img 
            src="https://i.ibb.co.com/bSqT813/Whats-App-Image-2026-01-01-at-1-09-09-AM.jpg" 
            alt="Ummey Salma" 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-2xl transition-transform duration-500 hover:rotate-3 object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900 animate-bounce"></div>
        </motion.div>

        {/* Text Content with Framer Motion */}
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base"
          >
            Available for Hire
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
          >
            I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ummey Salma</span>
          </motion.h1>
          
          <motion.h3 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-slate-300"
          >
            Creative <span className="text-blue-400">Frontend</span> Developer
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto py-4"
          >
            Building seamless digital experiences with modern code and pixel-perfect design.
          </motion.p>
        </div>

        {/* Buttons & Socials Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          
          {/* Professional Resume Button with Unique Hover */}
          <motion.a 
            href="/resume.pdf" 
            download 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden btn btn-primary btn-lg rounded-full px-10 border-none bg-indigo-600 text-white transition-all"
          >
            {/* Hover Background Layer */}
            <span className="absolute inset-0 w-0 bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
            
            <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2 group-hover:animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
                </svg>
                Download Resume
            </div>
          </motion.a>

          {/* Social Icons Section */}
          <div className="flex space-x-5 items-center">
            {[
              { icon: <FaGithub />, link: "https://github.com/Tamanna-salma", color: "hover:text-white" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ummeysalma912a31317/", color: "hover:text-[#0077b5]" },
              { icon: <FaFacebook />, link: "https://web.facebook.com/ummey.salma.tamanna.2024", color: "hover:text-[#1877f2]" },
              { icon: <IoMail />, link: "mailto:tamannaummey26@gmail.com", color: "hover:text-[#ea4335]" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.link}
                target="_blank" 
                rel="noreferrer" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.3, rotate: 10 }}
                className={`btn btn-ghost btn-circle text-slate-400 ${social.color} hover:bg-slate-800 transition-all duration-300`}
              >
                {React.cloneElement(social.icon, { size: 28 })}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;