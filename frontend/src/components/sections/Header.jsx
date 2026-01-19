import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openBooking = () => {
    window.open('https://tally.so/r/3y5Dgg', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isScrolled ? 'bg-accent' : 'bg-accent'
              }`}>
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                Andrew&apos;s Auto
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-white/80 hover:text-white hover:bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant={isScrolled ? "accent" : "hero"}
                size="default"
                onClick={openBooking}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-primary border-b border-white/10 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={openBooking}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
