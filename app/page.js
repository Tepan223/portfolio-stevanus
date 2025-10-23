'use client';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import '../app/globals.css';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
