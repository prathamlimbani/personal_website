import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { MOCK_PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Simple fetch simulation or use provided endpoint
    const fetchProjects = async () => {
      try {
        const response = await fetch('/.netlify/functions/github-sync');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) setProjects(data);
        }
      } catch (err) {
        console.log("Using mock data");
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
             <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
               PROJECTS
             </h2>
             <div className="h-[1px] w-24 bg-gradient-to-r from-neon-blue to-transparent" />
          </motion.div>
          <p className="text-gray-400 mt-4 font-mono text-sm max-w-md">
            Deployed Experiments // Code Repositories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-neon-blue/50 transition-colors"
            >
               <div className="h-48 overflow-hidden relative">
                 <img 
                   src={project.imageUrl || `https://picsum.photos/seed/${project.id}/600/400?grayscale`} 
                   alt={project.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                 <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded-full text-xs font-mono border border-white/10 flex items-center gap-1">
                    <Star size={10} className="text-yellow-400" fill="currentColor"/> {project.stars || 0}
                 </div>
               </div>

               <div className="p-6 relative">
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{project.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-light leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-neon-blue/80 border border-neon-blue/20 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
               layoutId={`card-${selectedProject.id}`}
               className="relative w-full max-w-4xl bg-void-light border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full hover:bg-white text-white hover:text-black transition-all"
               >
                 <X size={20} />
               </button>

               <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img 
                    src={selectedProject.imageUrl || `https://picsum.photos/seed/${selectedProject.id}/800/800`} 
                    alt={selectedProject.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-light md:bg-gradient-to-r md:from-transparent md:to-void-light" />
               </div>

               <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{selectedProject.name}</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8 space-y-4">
                    <h4 className="text-xs font-mono uppercase text-neon-blue tracking-widest">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tags.map(tag => (
                         <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 bg-white text-black py-3 rounded-full flex items-center justify-center gap-2 font-bold hover:bg-neon-blue transition-colors"
                      >
                        <Github size={18} /> Source
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 glass-card text-white py-3 rounded-full flex items-center justify-center gap-2 font-bold hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    )}
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;