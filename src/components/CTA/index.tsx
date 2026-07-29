import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">
              Ready to scale your <br />
              <span className="gradient-text">digital marketing results?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Get in touch with our growth experts today and receive a customized omnichannel marketing roadmap tailored to your target KPIs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary-gradient w-full sm:w-auto px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-outline-dark w-full sm:w-auto px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Book Free Audit
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

