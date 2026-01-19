import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimationWrappers';
import { Check, Sparkles, Clock } from 'lucide-react';

const ServiceCard = ({ title, price, duration, features, isPremium = false }) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
      isPremium ? 'border-accent/30 bg-card' : 'bg-card'
    }`}>
      {isPremium && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -inset-[100%] opacity-[0.03]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, hsl(var(--accent)) 50%, transparent 100%)',
            }}
            animate={{
              x: ['0%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          {isPremium && (
            <motion.span 
              className="text-xs font-medium text-accent px-2 py-0.5 rounded-full bg-accent/10"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Premium
            </motion.span>
          )}
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-3xl font-bold text-foreground">{price}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export const Services = () => {
  const interiorServices = [
    {
      title: "Interior Refresh",
      subtitle: "Basic",
      price: "$10–$15",
      duration: "1–1.5 hours",
      features: [
        "Full interior vacuum",
        "Light dash & door wipe",
        "Trash removal"
      ],
      isPremium: false
    },
    {
      title: "Interior Deep Clean",
      subtitle: "Premium",
      price: "$40–$50",
      duration: "1.5–2.5 hours",
      features: [
        "Full interior vacuum",
        "Dash, console & door panels cleaned",
        "Carpet cleaning",
        "Stain treatment as needed",
        "Interior glass cleaned"
      ],
      isPremium: true
    }
  ];

  const exteriorServices = [
    {
      title: "Exterior Wash",
      subtitle: "Basic",
      price: "$10–$20",
      duration: "1–1.5 hours",
      features: [
        "Foam pre-soak",
        "Hand wash",
        "Rinse & dry"
      ],
      isPremium: false
    },
    {
      title: "Exterior Detail",
      subtitle: "Premium",
      price: "$30–$40",
      duration: "1.5–2.5 hours",
      features: [
        "Hand wash",
        "Tire & wheel cleaning",
        "Bug removal",
        "Trim cleaned & darkened",
        "Exterior windows cleaned",
        "Headlight defogging"
      ],
      isPremium: true
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Professional Detailing Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quality care for every need and budget. Choose the service that fits your vehicle best.
            </p>
          </div>
        </FadeUp>

        {/* Interior Services */}
        <FadeUp delay={0.1}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Interior Detailing
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {interiorServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ServiceCard {...service} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>

        {/* Exterior Services */}
        <FadeUp delay={0.2}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Exterior Detailing
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {exteriorServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ServiceCard {...service} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Services;
