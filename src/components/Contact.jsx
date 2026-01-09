import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      name: "Email Me",
      value: "tamannaummey26@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:tamannaummey26@gmail.com",
      color: "hover:border-red-500",
      iconColor: "text-red-400"
    },
    {
      id: 2,
      name: "WhatsApp",
      value: "+880 1608-439563",
      icon: <FaWhatsapp />,
      link: "https://wa.me/8801608439563",
      color: "hover:border-green-500",
      iconColor: "text-green-400"
    },
    {
      id: 3,
      name: "GitHub",
      value: "Tamanna-salma",
      icon: <FaGithub />,
      link: "https://github.com/Tamanna-salma",
      color: "hover:border-white",
      iconColor: "text-white"
    },
    {
      id: 4,
      name: "LinkedIn",
      value: "Ummey Salma",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/ummeysalma912a31317/",
      color: "hover:border-blue-500",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-14 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/80 p-8 md:p-12 rounded-[2.5rem] border border-slate-700 shadow-2xl"
        >
          <h2 className="text-4xl font-black text-center text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-center mb-12">Let's collaborate and build something amazing together!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((item) => (
              <motion.a 
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`p-5 bg-slate-900 rounded-2xl flex items-center gap-5 border border-slate-800 transition-all duration-300 ${item.color} group shadow-lg`}
              >
                <div className={`text-3xl ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{item.name}</p>
                  <p className="font-medium text-slate-200 text-sm md:text-base break-all">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;