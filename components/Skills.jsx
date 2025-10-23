'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);
  const toolsRef = useRef(null);

  const tools = [
    'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'GSAP', 'Ant Design', 'Figma',  'Vercel', 'CSS', 'JavaScript', 'HTML', 'GitHub'
  ];

  useEffect(() => {
    if (toolsRef.current) {
      const toolCards = toolsRef.current.querySelectorAll('.tool-card');
      
      toolCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: toolsRef.current,
              start: 'top 70%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-white/70 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tools & Technologies */}
          <div ref={toolsRef}>
            <h3 className="text-2xl text-white mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="tool-card group p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                    <span className="text-white">{tool.charAt(0)}</span>
                  </div>
                  <p className="text-white/80 group-hover:text-cyan-400 transition-colors text-sm">
                    {tool}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/10">
                <h4 className="text-white mb-3">Always Learning</h4>
                <p className="text-white/70">
                  I'm constantly exploring new technologies and improving my skills. 
                  Currently learning AI/ML integration and advanced animation techniques.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-white/10">
                <h4 className="text-white mb-3">Quick Learner</h4>
                <p className="text-white/70">
                  Adaptable and eager to master new frameworks and technologies.
                  I believe in continuous growth and staying updated with industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
