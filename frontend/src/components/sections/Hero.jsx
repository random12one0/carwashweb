import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin, Clock } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBook = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - solid black with image overlay */}
      <div className="absolute inset-0 bg-black">
        <motion.img
          src="https://images.pexels.com/photos/6872577/pexels-photo-6872577.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Content with fade-in animation */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90 font-medium">Lakewood, California</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Mobile Car Wash
            <br />
            <span className="text-white/90">&amp; Interior Cleaning</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            Affordable, honest detailing services brought directly to your location. 
            Quality results without the dealership prices.
          </motion.p>

          {/* Note */}
          <motion.div 
            className="flex items-center gap-2 text-white/60 text-sm mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Clock className="w-4 h-4" />
            <span>Mobile services require access to water and electricity</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToBook}
            >
              Book Appointment
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={scrollToServices}
            >
              View Services
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={scrollToFAQ}
            >
              FAQ
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
