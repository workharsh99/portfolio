import React, { useState, useEffect } from 'react';
import cv from '../assets/Harsh_Kumar_CV.pdf';
import hackathonCv from '../assets/Harsh_Kumar_hackathon.pdf';
import cloudComputingCert from '../assets/Cloud Computing.pdf';
import cipherSchoolCert from '../assets/CipherSchool.pdf';
import promptEngineeringCert from '../assets/prompt_engineering.pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
              Harsh.
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-accent transition-colors duration-300 px-2 py-2 rounded-md font-medium"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="relative group">
                <button className="bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 px-4 py-2 rounded-full font-medium flex items-center gap-2">
                  Downloads
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute right-0 mt-5 w-56 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                  <span className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-black/20">Resumes</span>
                  <a href={cv} download="Harsh_Kumar_CV.pdf" className="px-4 py-3 hover:bg-white/5 text-gray-300 text-sm border-b border-white/5 transition-colors flex items-center">
                    <span className="mr-2">📄</span> Main CV
                  </a>
                  <a href={hackathonCv} download="Harsh_Kumar_hackathon.pdf" className="px-4 py-3 hover:bg-white/5 text-gray-300 text-sm border-b border-white/5 transition-colors flex items-center">
                    <span className="mr-2">📄</span> Hackathon CV
                  </a>
                  <span className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-black/20">Certificates</span>
                  <a href={cloudComputingCert} download="Cloud Computing.pdf" className="px-4 py-3 hover:bg-white/5 text-gray-300 text-sm border-b border-white/5 transition-colors flex items-center">
                    <span className="mr-2">🏆</span> Cloud Computing
                  </a>
                  <a href={cipherSchoolCert} download="CipherSchool.pdf" className="px-4 py-3 hover:bg-white/5 text-gray-300 text-sm border-b border-white/5 transition-colors flex items-center">
                    <span className="mr-2">🏆</span> CipherSchool
                  </a>
                  <a href={promptEngineeringCert} download="prompt_engineering.pdf" className="px-4 py-3 hover:bg-white/5 text-gray-300 text-sm transition-colors flex items-center">
                    <span className="mr-2">🏆</span> Prompt Engineering
                  </a>
                </div>
              </div>

            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-white/10 shadow-2xl absolute w-full top-16 left-0">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-2 h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-accent block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-4 pt-4">
              <span className="block px-3 py-2 text-sm font-semibold text-accent uppercase tracking-wider mb-2">Resume Downloads</span>
              <a href={cv} download="Harsh_Kumar_CV.pdf" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
                 <span className="mr-2">📄</span> Main CV
              </a>
              <a href={hackathonCv} download="Harsh_Kumar_hackathon.pdf" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
                 <span className="mr-2">📄</span> Hackathon CV
              </a>
            </div>

            <div className="mt-2 pt-2 border-t border-white/5">
              <span className="block px-3 py-2 text-sm font-semibold text-accent uppercase tracking-wider mb-2">Certificates</span>
              <a href={cloudComputingCert} download="Cloud Computing.pdf" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
                 <span className="mr-2">🏆</span> Cloud Computing
              </a>
              <a href={cipherSchoolCert} download="CipherSchool.pdf" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
                 <span className="mr-2">🏆</span> CipherSchool
              </a>
              <a href={promptEngineeringCert} download="prompt_engineering.pdf" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
                 <span className="mr-2">🏆</span> Prompt Engineering
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
