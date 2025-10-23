'use client';
import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

    // Animated particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      gsap.to(particles, {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 1.5,
          from: 'random',
        },
      });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl lg:text-8xl text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              STEVANUS 
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl text-white/70 mb-8"
          >
            Front-End Developer & UI/UX Designer
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get In Touch
            </button>
            <div className="flex gap-4">
              <a
                href="https://github.com/Tepan223"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 text-white hover:text-cyan-400"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/stevanus-gabriel-85967a389/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 text-white hover:text-cyan-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tepan.gabriel@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 text-white hover:text-cyan-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block text-white/50"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
