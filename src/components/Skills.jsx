import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💬',
      skills: ['C++', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      icon: '💾',
      skills: ['MongoDB', 'SQL']
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Docker', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={`glass p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl p-3 glass rounded-xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-accent hover:border-accent cursor-default transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
