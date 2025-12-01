import React, { useState } from 'react';
import { Home, User, Folder, Tv, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'projects', icon: <Folder size={20} />, label: 'Projects' },
    { id: 'media', icon: <Tv size={20} />, label: 'Media' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card px-2 py-2 rounded-full flex items-center gap-2 shadow-2xl"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`relative p-3 rounded-full transition-all duration-300 hover:bg-white/10 ${
              active === item.id ? 'text-white' : 'text-gray-400'
            }`}
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 block">{item.icon}</span>
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;