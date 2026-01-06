import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const Projectes = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Book Courier",
      image: "https://i.ibb.co.com/YFTfSdxj/Screenshot-2026-01-05-192940.png",
      description: "High-performance frontend for modern courier brands.",
      longDesc: "This project focuses on a seamless UI/UX for booking and tracking parcels. Built with React and Tailwind for speed.",
      stack: ["React", "Tailwind","MongoDB","Express.js", "Framer Motion"],
      live: "https://glistening-sopapillas-4babc7.netlify.app/",
      github: "https://github.com/Tamanna-salma",
      challenges: "Implementing a smooth tracking animation and responsive layouts.",
      future: "Plan to integrate a real-time map and payment gateway."
    },
    {
      id: 2,
      name: "Hero App",
      image: "https://i.ibb.co.com/wFcCmfYj/Screenshot-2026-01-05-194352.png",
      description: "A specialized app for managing superhero missions.",
      longDesc: "Hero App helps organize tasks and tracking team performance in a fun way.",
      stack: ["React", "DaisyUI", "Firebase"],
      live: "https://playful-entremet-65645f.netlify.app/",
      github: "https://github.com/Tamanna-salma",
      challenges: "Managing complex state for mission updates.",
      future: "Adding a global ranking system and dark mode toggle."
    },
   {
  id: 3,
  name: "Pet-Care",
  image: "https://i.ibb.co.com/yns4yWXR/Screenshot-2026-01-06-131839.png",
  description: "A comprehensive platform for pet adoption and pet care services.",
  longDesc: "Pet-Care is a dedicated platform designed to connect pet lovers with adoption centers. It features pet listings, care tips, and an intuitive interface for managing pet health records and services.",
  stack: ["React.js", "Tailwind CSS"], 
  live: "https://gilded-sunburst-0f7d48.netlify.app/", 
  github: "https://github.com/Tamanna-salma",
  challenges: "Creating a complex filtering system for pet categories and managing real-time availability for adoption.",
  future: "Plan to integrate a telemedicine feature for pets and an e-commerce store for pet supplies."
}
  ];

  return (
    <section id="projects" className="py-14 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-16 underline decoration-blue-500 underline-offset-8"
        >
          MY BEST PROJECTS
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500 shadow-xl group"
            >
              <div className="overflow-hidden h-48">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-primary w-full bg-slate-700 border-none rounded-xl hover:bg-blue-600 transition font-bold"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DAISYUI MODAL (Pop-up) --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="modal modal-open bg-slate-950/80 backdrop-blur-sm transition-all">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="modal-box max-w-3xl bg-slate-800 border border-slate-700 text-white relative"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-sm btn-circle absolute right-4 top-4 bg-slate-700 hover:bg-red-500 border-none"
                >
                  <FaTimes />
                </button>

                <img src={selectedProject.image} alt="" className="w-full h-64 object-cover rounded-xl mb-6 border border-slate-600" />
                
                <h3 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.name}</h3>
                
                <div className="space-y-4 text-slate-300">
                  <p><strong>Tech Stack:</strong> {selectedProject.stack.join(', ')}</p>
                  <p><strong>Description:</strong> {selectedProject.longDesc}</p>
                  <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
                  <p><strong>Future Plans:</strong> {selectedProject.future}</p>
                </div>

                <div className="modal-action flex justify-between mt-8">
                  <div className="flex gap-4">
                    <a href={selectedProject.live} target="_blank" className="btn btn-primary flex items-center gap-2">
                      <FaExternalLinkAlt /> Live Link
                    </a>
                    <a href={selectedProject.github} target="_blank" className="btn btn-outline text-white flex items-center gap-2">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="btn bg-slate-700 border-none text-white">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projectes;