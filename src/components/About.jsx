import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className='py-24 px-6 bg-slate-900 overflow-hidden'>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 italic text-white hover:text-blue-400 underline decoration-blue-500 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I am a passionate Frontend Developer who loves to bring ideas to life on the screen. 
            My journey is fueled by a mix of logical problem-solving and creative design.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex gap-4 border-l-4 border-blue-500 pl-4 py-2 bg-slate-800/50 rounded-r-lg shadow-lg"
          >
            <span className="font-bold text-blue-400 italic">Hobbies:</span>
            <span className="text-slate-200">Photography • Chess • Traveling</span>
          </motion.div>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden group"
        >
          {/* Background Glow Effect */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
          
          <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wider">My Journey</h3>
          <p className="text-slate-400 text-md leading-relaxed">
            Started as a curious learner, I have evolved into a developer who focuses on pixel-perfect designs 
            and clean, maintainable code. I love exploring new libraries and frameworks to enhance 
            user experiences.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;