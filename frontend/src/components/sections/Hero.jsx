import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroTextReveal } from '@/components/animations/AnimationWrappers';
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
      {/* Background Image with Darker Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          src="https://images.pexels.com/photos/6872577/pexels-photo-6872577.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <HeroTextReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/90 font-medium">Lakewood, California</span>
            </div>
          </HeroTextReveal>

          {/* Main Headline */}
          <HeroTextReveal delay={0.4}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
              Mobile Car Wash
              <br />
              <span className="text-white/90">&amp; Interior Cleaning</span>
            </h1>
          </HeroTextReveal>

          {/* Subheadline */}
          <HeroTextReveal delay={0.6}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-xl">
              Affordable, honest detailing services brought directly to your location. 
              Quality results without the dealership prices.
            </p>
          </HeroTextReveal>

          {/* Note */}
          <HeroTextReveal delay={0.7}>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-10">
              <Clock className="w-4 h-4" />
              <span>Mobile services require access to water and electricity</span>
            </div>
          </HeroTextReveal>

          {/* CTA Buttons */}
          <HeroTextReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </HeroTextReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
