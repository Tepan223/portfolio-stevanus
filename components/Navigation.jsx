    'use client';
    import { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { AnimatePresence,motion } from 'framer-motion';

    export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
        const sections = navItems.map((item) => item.id);
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
            }
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white"
            >
                <span className="text-xl font-bold">Portfolio</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-white/70 hover:text-white'
                    }`}
                >
                    {item.label}
                    {activeSection === item.id && (
                    <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    />
                    )}
                </motion.button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 border-t border-white/10"
            >
                <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                    <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                        ? 'bg-cyan-400/20 text-cyan-400'
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                    >
                    {item.label}
                    </button>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    );
    }
