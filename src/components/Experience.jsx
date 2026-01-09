import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer (Self-Employed)",
      company: "Personal Projects & Freelancing",
      duration: "2024 - Present",
      description: "Developing responsive and interactive user interfaces using React.js and Tailwind CSS. Focusing on performance optimization and modern UI/UX principles.",
      highlights: ["Built 10+ projects", "Expert in Tailwind CSS", "Integrated Firebase Auth"]
    },
    {
      id: 2,
      role: "MERN Stack Learner",
      company: "Programming Hero",
      duration: "2024 (6 Months)",
      description: "Intensive training on Full Stack Web Development. Gained hands-on experience in building scalable web applications.",
      highlights: ["Mastered React Hooks", "CRUD Operations", "MongoDB Integration"]
    }
  ];

  return (
    <section id="experience" className="py-10 bg-slate-900 text-white px-6">
      <div className="max-w-6xl px-5 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-16 underline decoration-blue-500 underline-offset-8"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 shadow-[0_0_10px_#3b82f6]"></div>

              <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all shadow-xl group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                      <FaBriefcase className="text-white text-lg" /> {exp.role}
                    </h3>
                    <p className="text-slate-300 font-medium flex items-center gap-2 mt-1">
                      <FaLaptopCode /> {exp.company}
                    </p>
                  </div>
                  <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/20">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900/50 px-3 py-1 rounded-lg border border-slate-700">
                      <FaCheckCircle className="text-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;