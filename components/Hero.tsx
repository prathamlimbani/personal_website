import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowDownRight, Activity, Gamepad2, Plane } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 overflow-hidden perspective-1000">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Main Title - Floating */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-neon-blue text-xs tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"/>
            Official Portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 tracking-tighter"
          >
            PRATHAM<br/>LIMBANI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 font-sans text-lg md:text-xl tracking-widest uppercase max-w-2xl mx-auto"
          >
            Friendly Game Designer • Engineer • <span className="text-neon-blue">Lovely Youtuber</span>
          </motion.p>
        </motion.div>

        {/* The "Floating" Content Core */}
        <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] flex items-center justify-center">
          
          {/* Orbital Ring 1 */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] border border-white/5 rounded-full"
          />
          
          {/* Main Content Card (YouTube Feature) */}
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-20 w-full max-w-3xl glass-card rounded-2xl p-2 md:p-4 shadow-[0_0_50px_rgba(34,211,238,0.1)] group"
          >
            {/* Holographic Header */}
            <div className="flex justify-between items-center mb-2 px-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase">Featured Upload</div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              {/* Featured Video: https://youtu.be/q5AfWVbPdFA */}
              <iframe 
                src="https://www.youtube.com/embed/q5AfWVbPdFA?autoplay=1&mute=1&loop=1&playlist=q5AfWVbPdFA" 
                title="Featured Video"
                className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <span className="bg-neon-blue text-black text-xs font-bold px-2 py-1 rounded uppercase mb-2 inline-block">New Video</span>
                <h3 className="text-white font-display text-xl md:text-2xl">Solo Traveler's Diary</h3>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Play fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Widgets (Orbiting) */}
          <FloatingWidget 
            icon={<Gamepad2 />} 
            label="Role" 
            value="Unity Dev" 
            className="absolute -left-4 md:-left-12 top-0 md:top-1/4"
            delay={0.5}
          />
          <FloatingWidget 
            icon={<Plane />} 
            label="Lifestyle" 
            value="Solo Traveler" 
            className="absolute -right-4 md:-right-12 bottom-0 md:bottom-1/4"
            delay={0.7}
          />
          <FloatingWidget 
            icon={<Activity />} 
            label="Experience" 
            value="1+ Year" 
            className="absolute right-1/4 -top-12 hidden md:flex"
            delay={0.9}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Enter The Void</span>
          <ArrowDownRight size={20} className="text-neon-blue" />
        </motion.div>

      </div>
    </section>
  );
};

// Helper component for floating widgets
const FloatingWidget = ({ icon, label, value, className, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`glass-card p-4 rounded-xl flex items-center gap-3 animate-float-medium ${className}`}
  >
    <div className="text-neon-blue">{icon}</div>
    <div>
      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
      <div className="text-sm font-bold text-white">{value}</div>
    </div>
  </motion.div>
);

export default Hero;