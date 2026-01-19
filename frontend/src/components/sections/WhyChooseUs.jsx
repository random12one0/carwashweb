import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimationWrappers';
import { Heart, DollarSign, Shield, Clock } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Local Lakewood Service",
      description: "Supporting your local community with personalized, reliable car care."
    },
    {
      icon: DollarSign,
      title: "No Rush, No Upsells",
      description: "Honest work at honest prices. I take my time to do it right."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Meticulous attention to detail on every vehicle, every time."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book at your convenience. Mobile service comes to you."
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
              Why Choose Andrew's Auto
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Dedicated to providing the best car care experience in Lakewood
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
