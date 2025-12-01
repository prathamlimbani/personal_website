import React, { useState, useEffect } from 'react';
import { Play, Tv, Youtube } from 'lucide-react';
import { MOCK_VIDEOS } from '../constants';
import { Video } from '../types';
import { motion } from 'framer-motion';

const YouTubePlayer: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(MOCK_VIDEOS);
  const [currentVideo, setCurrentVideo] = useState<Video>(MOCK_VIDEOS[0]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/.netlify/functions/youtube');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setVideos(data);
            setCurrentVideo(data[0]);
          }
        }
      } catch (e) {
        console.warn('Using fallback videos');
      }
    };
    fetchVideos();
  }, []);

  return (
    <section id="media" className="py-32 relative">
       <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">Pratham Limbani Youtube</h2>
               <p className="text-neon-blue font-mono text-sm">Travel • Vlogs • Tech</p>
             </div>
             <a href="https://www.youtube.com/@prathamlimbani" target="_blank" className="flex items-center gap-2 text-white hover:text-neon-red transition-colors mt-4 md:mt-0">
               <Youtube size={24} /> Subscribe
             </a>
          </div>

          <div className="glass-card rounded-3xl p-4 md:p-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Player */}
                <div className="lg:col-span-2">
                   <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                     <iframe 
                       src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0&modestbranding=1`} 
                       title={currentVideo.title}
                       className="absolute inset-0 w-full h-full"
                       allowFullScreen
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     ></iframe>
                   </div>
                   <h3 className="text-2xl font-bold text-white mt-6 mb-2">{currentVideo.title}</h3>
                   <p className="text-gray-400 text-sm">Published: {currentVideo.publishedAt.split('T')[0]}</p>
                </div>

                {/* Playlist Sidebar */}
                <div className="lg:col-span-1 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                   <h4 className="text-sm font-mono uppercase text-gray-500 mb-4 sticky top-0 bg-void/90 backdrop-blur py-2 z-10">Recent Uploads</h4>
                   <div className="space-y-4">
                      {videos.map((video) => (
                        <motion.div
                          key={video.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setCurrentVideo(video)}
                          className={`cursor-pointer rounded-xl overflow-hidden flex gap-4 p-2 transition-colors ${
                            currentVideo.id === video.id ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                           <div className="w-24 aspect-video rounded-lg overflow-hidden relative flex-shrink-0">
                             <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                               <Play size={12} fill="white" className="text-white"/>
                             </div>
                           </div>
                           <div>
                             <h5 className={`text-sm font-bold line-clamp-2 ${currentVideo.id === video.id ? 'text-neon-blue' : 'text-gray-300'}`}>
                               {video.title}
                             </h5>
                           </div>
                        </motion.div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
       </div>
    </section>
  );
};

export default YouTubePlayer;