import React from 'react';
import profilePic from '../assets/harsh.jpeg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center animate-fade-in">
        
        {/* Profile Image Avatar */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-background overflow-hidden bg-gray-800 flex items-center justify-center">
             <img src={profilePic} alt="Harsh Kumar" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Harsh Kumar</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl text-gray-400 font-medium mb-6">
          Full Stack Web Developer | B.Tech CSE Student
        </h2>
        
        <p className="max-w-2xl text-base sm:text-lg text-gray-300 mb-10 leading-relaxed">
          I am a 3rd-year B.Tech Computer Science student passionate about coding and continuous learning. I enjoy building full-stack web applications and exploring modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects" className="px-8 py-3 rounded-full bg-accent text-background font-semibold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors duration-300">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
