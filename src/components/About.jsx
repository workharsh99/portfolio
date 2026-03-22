import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 rounded-2xl animate-fade-in animation-delay-100 hover:border-accent/50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a 3rd-year B.Tech Computer Science student at Lovely Professional University, expecting to graduate in 2027. 
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              As a fresher with an unwavering passion for coding, I am eager to learn, adapt, and grow within the dynamic tech industry. 
              My journey involves exploring modern frameworks, solving algorithms, and continuously expanding my technical horizon.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond the screen, I have a deep love for reading books which fuels my creativity and continuous learning mindset.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-200">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Education Timeline</h3>
            
            <div className="relative border-l border-white/20 ml-3 md:ml-0 pl-6 md:pl-8 space-y-8">
              
              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-background"></div>
                <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-accent font-medium text-sm">2023 - 2027</span>
                  <h4 className="text-xl font-bold text-white mt-1">B.Tech Computer Science</h4>
                  <p className="text-gray-400 mt-2">Lovely Professional University (LPU)</p>
                  <p className="text-sm text-gray-500 mt-2">Focusing on core CS fundamentals, full-stack development, and modern technologies.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-gray-600 ring-4 ring-background"></div>
                <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-gray-400 font-medium text-sm">Prior to 2023</span>
                  <h4 className="text-xl font-bold text-gray-300 mt-1">High School Education</h4>
                  <p className="text-gray-400 mt-2">Completed with distinction</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
