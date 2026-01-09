import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section  className="py-10 bg-slate-900 text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative">
        
        {/* Background Decorative Element */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-16 underline decoration-indigo-500 underline-offset-8"
        >
          Educational Qualification
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Main Card with Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700 leading-none flex items-start space-x-6">
            
            {/* Unique Icon Box */}
            <div className="hidden sm:flex flex-col items-center space-y-4">
              <div className="p-4 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/20">
                <FaGraduationCap size={30} className="text-white" />
              </div>
              <div className="w-1 h-20 bg-gradient-to-b from-indigo-600 to-transparent rounded-full"></div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    Master of Business Administration (MBA)
                  </h3>
                  <p className="text-lg text-slate-300 font-medium italic">
                    Gurudayal Govt. College, Kishoreganj
                  </p>
                </div>
                <span className="px-5 py-2 bg-slate-900 text-indigo-400 border border-indigo-500/30 rounded-full text-sm font-bold tracking-wider">
                  2023 - 2024
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6 italic">
                "Successfully completed advanced business strategies and management studies, 
                bridging the gap between corporate logic and digital innovation."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-slate-300">
                  <FaBookOpen className="text-indigo-500" />
                  <span>DEPT.OF ACCOUNTING</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <FaAward className="text-indigo-500" />
                  <span>Business Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-slate-500 text-sm italic">
          Prior Academic: Completed Higher Secondary Certificate from Kishoreganj Model College (2014).
        </p>
      </div>
    </section>
  );
};

export default Education;