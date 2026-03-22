import React from 'react';
import cropImage from '../assets/crop.jpg';
const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* TechnoGrowX Project Card */}
          <div className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:-translate-y-2 transition-all duration-300 animate-fade-in">
            <div className="h-48 md:h-64 bg-gray-800 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-600/20 group-hover:scale-105 transition-transform duration-500"></div>
              {/* Project Image */}
              <img src={cropImage} alt="TechnoGrowX Project" className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  TechnoGrowX
                </h3>
                <div className="flex gap-4">
                  <a href="https://github.com/workharsh99/TechnoGrowX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" title="GitHub Repository">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="Live Demo">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A farmer crops diagnostic system designed to help farmers identify crop-related issues and improve productivity using technology. Features predictive analytics and expert recommendations.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">React</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">Node.js</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
