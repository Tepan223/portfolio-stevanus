'use client';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Landing Page',
      category: 'web',
      description: 'Frontend landing page with Ant Design components and GSAP animations',
      image: 'Port1.jpg',
      tech: ['Next.js', 'Node.js', 'Ant Design', 'GSAP', 'JavaScript', 'Vercel' ],
      github: 'https://github.com/Tepan223/quiz-antd-1-stevanus.git',
      demo: 'https://quiz-antd-1-stevanus.vercel.app/',
    },
    {
      id: 2,
      title: 'Website Showcase',
      category: 'web',
      description: 'Showcase website with React, GSAP, and Swiper.js',
      image: 'Port2.jpg',
      tech: ['React', 'GSAP', 'Swiper', 'JavaScript', 'Vercel'],
      github: 'https://github.com/Tepan223/Iphone-Pixel.git',
      demo: 'https://iphone-pixel.vercel.app/',
    },
    {
      id: 3,
      title: 'Company Profile',
      category: 'web',
      description: 'Company profile website using Next.js, GSAP, and Tailwind CSS',
      image: 'Port3.jpg',
      tech: ['Next.js', 'GSAP', 'Tailwind','Lucide', 'Figma', 'JavaScript','Vercel' ],
      github: 'https://github.com/Tepan223/compro-codeorca',
      demo: 'https://compro-codeorca.vercel.app/',
    },
    {
      id: 4,
      title: 'Dashboard',
      category: 'web',
      description: 'Dashboard application with Next.js and Ant Design',
      image: 'Port4.jpg',
      tech: ['Next.js', 'Ant Design', 'JavaScript', 'Vercel'],
      github: 'https://github.com/Tepan223/Midterm-Stevanus',
      demo: 'https://midterm-stevanus.vercel.app/',
    },
    {
      id: 5,
      title: 'Dessert Shop',
      category: 'web',
      description: 'E-commerce dessert shop built with React and Vercel',
      image: 'Port5.jpg',
      tech: ['React', 'JavaScript', 'Vercel'],
      github: 'https://github.com/Tepan223/Dessert-Shop.git',
      demo: 'https://dessert-shop-lilac.vercel.app/',
    },
    {
      id: 6,
      title: 'Movie Collection',
      category: 'web',
      description: 'Movie collection website with React, GSAP, and Axios',
      image: 'Port6.jpg',
      tech: ['React', 'API Integration', 'JavaScript', 'GSAP', 'Axios', 'Vercel'],
      github: 'https://github.com/Tepan223/Stevanus_Movie_Collection_gsap_part_2.git',
      demo: 'https://movie-collection-six-ecru.vercel.app/',
    },
    {
      id: 7,
      title: 'Web Marketing - Techno Lens',
      category: 'web',
      description: 'Membuat Website penjualan untuk startup Techno Lens dengan Next.js, Vercel, dan GSAP',
      image: 'Port7.jpg',
      tech: ['Next.js', 'Vercel', 'JavaScript', 'GSAP', 'Blob', 'Ant Design', 'Figma', 'Swiper', 'API Integration'],
      github: 'https://github.com/Tepan223/techno-lens',
      demo: 'https://techno-lens.vercel.app/',
    },
  ];

//   const categories = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'web', label: 'Web Apps' },
//     { key: 'mobile', label: 'Mobile' },
//     { key: 'ai', label: 'AI/ML' },
//   ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-card');

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            My <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-white/70 text-lg">
            Some of my recent projects and works
          </p>
        </div>

        {/* <div className="mb-8 flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div> */}

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-card group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center gap-2 text-white hover:bg-white/20 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-cyan-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center gap-2 text-white hover:bg-cyan-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
