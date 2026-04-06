import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-primary opacity-[0.03]" />
    <div className="container relative z-10 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Take Control of Your Fleet?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Book a personalized demo and see how FILTECH MONITOR can transform your
          fleet operations with real-time intelligence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-10 h-14 shadow-lg shadow-primary/20" asChild>
            <a href="#contact">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-10 h-14" asChild>
            <a href="#pricing">View Pricing</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
