'use client';
import { useEffect, useRef } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current && contentRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, rotate: -10 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

//   const features = [
//     {
//       icon: Code,
//       title: 'Clean Code',
//       description: 'Writing maintainable and scalable code',
//     },
//     {
//       icon: Palette,
//       title: 'Creative Design',
//       description: 'Crafting beautiful user experiences',
//     },
//     {
//       icon: Rocket,
//       title: 'Fast Performance',
//       description: 'Optimized for speed and efficiency',
//     },
//   ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-3xl -rotate-6" />
              <div className="relative w-full h-full bg-gray-800 rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <img src="pp.jpg" alt="Photo Profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl text-white">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              Hello! My name is Stevanus Gabriel, I am a student from Tri Ratna School who is currently studying Software Engineering. I like to learn new things, especially those related to front-end development and back-end development.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              I specialize in modern web technologies and constantly keep up with emerging trends to deliver smooth and meaningful user experiences.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="text-cyan-400 mb-3" size={32} />
                  <h3 className="text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
