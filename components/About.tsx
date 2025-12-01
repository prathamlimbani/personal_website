import React, { useState } from 'react';
import { BIOS, STATS } from '../constants';
import { Gamepad2, Code2, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [bioLength, setBioLength] = useState<'short' | 'medium' | 'long'>('medium');

  return (
    <section id="about" className="py-32 relative">
       <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Stats Column */}
            <div className="md:col-span-4 space-y-4">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex justify-between items-center group hover:border-neon-blue/30 transition-colors"
                >
                  <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</span>
                  <span className="text-2xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Bio Column */}
            <div className="md:col-span-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
               >
                 {/* Decorative BG */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px]" />

                 <h2 className="text-3xl font-display font-bold text-white mb-8">About Pratham</h2>
                 
                 <div className="flex gap-2 mb-8">
                   {(['short', 'medium', 'long'] as const).map((len) => (
                     <button
                       key={len}
                       onClick={() => setBioLength(len)}
                       className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                         bioLength === len 
                         ? 'bg-neon-blue text-black' 
                         : 'bg-white/5 text-gray-400 hover:bg-white/10'
                       }`}
                     >
                       {len}
                     </button>
                   ))}
                 </div>

                 <div className="min-h-[150px]">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                      {BIOS[bioLength]}
                    </p>
                 </div>

                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                    <div className="flex flex-col gap-2">
                      <Gamepad2 className="text-neon-purple mb-2" />
                      <h4 className="font-bold text-white">Game Design</h4>
                      <p className="text-xs text-gray-500">Creating immersive Unity 3D worlds.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Code2 className="text-neon-blue mb-2" />
                      <h4 className="font-bold text-white">Engineering</h4>
                      <p className="text-xs text-gray-500">B.Tech Computer Science graduate.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Plane className="text-yellow-400 mb-2" />
                      <h4 className="font-bold text-white">Solo Traveler</h4>
                      <p className="text-xs text-gray-500">Documenting global adventures on YouTube.</p>
                    </div>
                 </div>

               </motion.div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default About;