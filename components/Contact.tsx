import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam check

    setStatus('sending');
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              Establish <br /><span className="text-neon-blue text-glow">Connection</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed">
              Available for game design collaborations, engineering contracts, or discussing the best hidden spots in Southeast Asia.
            </p>

            <div className="space-y-6">
               <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 text-white group glass-card p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                     <Mail size={20} />
                  </div>
                  <span className="font-mono text-sm tracking-wider">patel9871pratham@gmail.com</span>
               </a>
               <div className="flex items-center gap-4 text-white glass-card p-4 rounded-xl">
                  <div className="w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center text-neon-purple">
                     <MapPin size={20} />
                  </div>
                  <span className="font-mono text-sm tracking-wider">Global / Remote</span>
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
             <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  name="honeypot" 
                  value={formData.honeypot}
                  onChange={e => setFormData({...formData, honeypot: e.target.value})}
                  className="hidden" 
                />
                
                <div>
                   <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Name</label>
                   <input 
                     required
                     type="text" 
                     className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-neon-blue focus:outline-none transition-colors"
                     placeholder="Traveler Name"
                     value={formData.name}
                     onChange={e => setFormData({...formData, name: e.target.value})}
                   />
                </div>
                
                <div>
                   <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Email</label>
                   <input 
                     required
                     type="email" 
                     className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-neon-blue focus:outline-none transition-colors"
                     placeholder="comms@example.com"
                     value={formData.email}
                     onChange={e => setFormData({...formData, email: e.target.value})}
                   />
                </div>
                
                <div>
                   <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Message</label>
                   <textarea 
                     required
                     rows={4}
                     className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-neon-blue focus:outline-none transition-colors resize-none"
                     placeholder="Transmission content..."
                     value={formData.message}
                     onChange={e => setFormData({...formData, message: e.target.value})}
                   />
                </div>

                <button 
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-white text-black font-display font-bold uppercase py-4 rounded-xl hover:bg-neon-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                >
                   {status === 'sending' ? 'Transmitting...' : (status === 'success' ? 'Message Sent' : 'Send Transmission')}
                   {status === 'idle' && <Send size={18} />}
                   {status === 'success' && <CheckCircle size={18} />}
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2 justify-center">
                    <AlertCircle size={16} /> Transmission Failed. Try again.
                  </div>
                )}
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;