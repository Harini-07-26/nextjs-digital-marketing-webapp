import { ArrowRight, Download } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';
import { Button } from '../ui/button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="glass-dark border border-white/10 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to join the <br />
              <span className="text-gradient">financial revolution?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Create your account in less than 2 minutes and start experiencing the future of digital finance today. No
              hidden fees, no paperwork.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto rounded-xl group w-full sm:w-auto"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-white px-8 py-6 text-lg h-auto rounded-xl w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
              <span className="text-white font-bold tracking-widest uppercase">Visa</span>
              <span className="text-white font-bold tracking-widest uppercase">Mastercard</span>
              <span className="text-white font-bold tracking-widest uppercase">Apple Pay</span>
              <span className="text-white font-bold tracking-widest uppercase">Google Pay</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
