import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimationWrappers';
import { Check, Sparkles } from 'lucide-react';

const ServiceCard = ({ title, tier, price, features, optional, tierLevel = 1 }) => {
  // tierLevel: 1 = basic (no effects), 2 = premium, 3 = advanced
  const isPremium = tierLevel >= 2;
  const isAdvanced = tierLevel >= 3;

  return (
    <div className="relative">
      {/* Animated gradient border for premium/advanced tiers */}
      {isPremium && (
        <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: isAdvanced 
                ? 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6, #8b5cf6)'
                : 'linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6, #60a5fa)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: isAdvanced ? 2 : 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      )}

      <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-card ${isPremium ? 'border-0' : ''}`}>
        {/* Animated shine sweep for premium/advanced */}
        {isPremium && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -inset-[100%]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              }}
              animate={{
                x: ['0%', '200%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1,
              }}
            />
          </div>
        )}

        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs font-medium uppercase tracking-wider ${isPremium ? 'text-accent' : 'text-muted-foreground'}`}>
              {tier}
            </span>
            {isAdvanced && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
            )}
          </div>
          <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-sm text-muted-foreground">Starting at</span>
            <span className="text-2xl font-bold text-foreground">${price}</span>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-success" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
            {optional && (
              <li className="flex items-start gap-3 pt-1">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground italic">{optional}</span>
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export const Services = () => {
  const exteriorServices = [
    {
      title: "Basic Wash",
      tier: "Exterior Tier 1",
      price: "15",
      tierLevel: 1,
      features: [
        "Hand wash",
        "Wheel and tire cleaning",
        "Exterior window cleaning"
      ]
    },
    {
      title: "Premium Detail",
      tier: "Exterior Tier 2",
      price: "25",
      tierLevel: 2,
      features: [
        "Pre-wash",
        "Hand wash",
        "Wheel and tire cleaning",
        "Tire shine",
        "Trim enhancement",
        "Exterior window cleaning"
      ]
    },
    {
      title: "Advanced Detail",
      tier: "Exterior Tier 3",
      price: "40",
      tierLevel: 3,
      features: [
        "Pre-wash",
        "Hand wash",
        "Wheel and tire cleaning",
        "Tire shine",
        "Trim enhancement",
        "Exterior window cleaning",
        "Headlight clearing",
        "Exterior protection with hydrophobic finish"
      ]
    }
  ];

  const interiorServices = [
    {
      title: "Basic Interior Refresh",
      tier: "Interior Tier 1",
      price: "15",
      tierLevel: 1,
      features: [
        "Full interior vacuum",
        "Quick wipe down",
        "Trash removal"
      ],
      optional: "Optional: interior scent add-on"
    },
    {
      title: "Deep Interior Clean",
      tier: "Interior Tier 2",
      price: "35",
      tierLevel: 2,
      features: [
        "Full interior vacuum",
        "Dash, console, door panels, and seat cleaning",
        "Carpet and upholstery cleaning",
        "Stain treatment",
        "Trash removal"
      ],
      optional: "Optional: interior scent add-on"
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

        {/* Exterior Services */}
        <FadeUp delay={0.1}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Exterior Detailing
            </h3>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {exteriorServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ServiceCard {...service} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>

        {/* Interior Services */}
        <FadeUp delay={0.2}>
          <div>
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
      </div>
    </section>
  );
};

export default Services;
