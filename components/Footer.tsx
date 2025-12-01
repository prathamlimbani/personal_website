import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Facebook, Github, Youtube, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 20;

  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/5 py-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Monogram */}
        <div className="w-12 h-12 mb-8 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-lg shadow-neon-blue/20">
             <span className="font-display font-bold text-xl text-black">PL</span>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
           <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Instagram size={iconSize} /></a>
           <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Facebook size={iconSize} /></a>
           <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Github size={iconSize} /></a>
           <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Youtube size={iconSize} /></a>
           <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><MessageCircle size={iconSize} /></a>
           <a href={SOCIAL_LINKS.email} className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Mail size={iconSize} /></a>
        </div>

        <div className="text-center text-gray-600 text-sm font-light">
          <p className="mb-2">&copy; {currentYear} Pratham Limbani. All Rights Reserved.</p>
          <p className="text-xs font-mono uppercase tracking-widest opacity-40">Engineered for the Void</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;