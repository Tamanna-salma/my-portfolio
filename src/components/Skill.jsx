import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools } from 'react-icons/fa';

const Skill = () => {
 
  const progressAnimation = (width) => ({
    initial: { width: 0 },
    whileInView: { width: `${width}%` },
    transition: { duration: 1.5, ease: "easeOut" }
  });

  return (
    <div  className='py-10 bg-slate-900 px-6 text-white'>
      <div className="max-w-6xl px-5 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-16 underline decoration-indigo-500 underline-offset-8"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Frontend Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
              <FaCode /> Frontend
            </h4>
            <div className="space-y-5">
              {[
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 85 },
                { name: "React.js", level: 80 }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      {...progressAnimation(skill.level)}
                      className="bg-indigo-600 h-2 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Backend Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-blue-400 flex items-center gap-2">
              <FaTools /> Tools & Backend
            </h4>
            <div className="space-y-5">
              {[
                { name: "Git/GitHub", level: 90 },
                { name: "Node.js", level: 60 },
                { name: "Tailwind CSS", level: 92 }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      {...progressAnimation(skill.level)}
                      className="bg-blue-600 h-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Skill;