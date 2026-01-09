import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-6 border-t border-slate-800 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Name/Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-black text-white tracking-tighter">
            UMMEY <span className="text-blue-500">SALMA</span>
          </h2>
          <p className="text-slate-400 mt-2 italic">Building digital experiences with passion & code.</p>
        </motion.div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-10">
          {[
            { icon: <FaGithub />, link: "https://github.com/Tamanna-salma", color: "hover:bg-white hover:text-black" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ummeysalma912a31317/", color: "hover:bg-blue-600 hover:text-white" },
            { icon: <FaFacebookF />, link: "https://web.facebook.com/ummey.salma.tamanna.2024", color: "hover:bg-blue-500 hover:text-white" },
            { icon: <FaWhatsapp />, link: "https://wa.me/8801608439563", color: "hover:bg-green-500 hover:text-white" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 text-xl transition-all duration-300 border border-slate-700 shadow-lg ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Navigation Links (Quick Access) */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-400 font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Copyright Section */}
        <div className="w-full pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} <span className="text-slate-300 font-semibold">Ummey Salma</span>. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600 mt-1 tracking-widest uppercase">
            Designed & Developed by Me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;