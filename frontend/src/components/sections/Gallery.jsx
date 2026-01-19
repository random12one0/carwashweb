import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, ImageReveal } from '@/components/animations/AnimationWrappers';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    {
      src: "https://customer-assets.emergentagent.com/job_detailing-on-wheels-1/artifacts/x022r8h6_IMG_3644%20%282%29.jpeg",
      alt: "Professional interior detailing result"
    },
    {
      src: "https://customer-assets.emergentagent.com/job_detailing-on-wheels-1/artifacts/s5yw867z_348s%20%283%29.jpg",
      alt: "Exterior detailing showcase"
    },
    {
      src: "https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?auto=format&fit=crop&w=800&q=80",
      alt: "Professional steering wheel cleaning"
    },
    {
      src: "https://images.unsplash.com/photo-1708805282683-50a060eba80f?auto=format&fit=crop&w=800&q=80",
      alt: "Tire and wheel detailing"
    },
    {
      src: "https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Premium car detailing service"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See the quality for yourself
            </p>
          </div>
        </FadeUp>

        {/* Main Gallery Carousel */}
        <FadeUp delay={0.1}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-elegant">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsZoomed(true)}
                />
              </AnimatePresence>

              {/* Zoom Icon */}
              <button 
                onClick={() => setIsZoomed(true)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors duration-200"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-foreground shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-foreground shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex 
                      ? 'ring-2 ring-accent ring-offset-2 ring-offset-background scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
