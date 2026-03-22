import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Harsh Kumar. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
