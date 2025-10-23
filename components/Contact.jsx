'use client';
import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'; // pastikan sudah install react-hot-toast

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_csaxul6',  
        'template_f2hd45p', 
        formRef.current,    
        'HJ3dWBDBYXr9tObeG'
      )
      .then(
        () => {
          toast.success('Message sent successfully! I will get back to you soon.');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.');
        }
      )
      .finally(() => setLoading(false));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tepan.gabriel@gmail.com',
      href: 'mailto:tepan.gabriel@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 857-7000-2971',
      href: 'tel:+6285770002971',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-white/70 text-lg">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <p className="text-white/70 mb-8">
                Feel free to reach out to me for any inquiries, project collaborations, 
                or just to say hello. I'm always excited to connect with new people!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/10">
              <h4 className="text-white mb-3">Let's Create Something Amazing</h4>
              <p className="text-white/70">
                I'm currently available for freelance work and new opportunities. 
                If you have a project in mind, let's discuss how we can bring it to life!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © 2025 Stevanus Gabriel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
