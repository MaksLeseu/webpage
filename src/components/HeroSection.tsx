import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Soft background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="container relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <Activity className="h-4 w-4" />
            Real-Time Fleet & Fuel Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
            Smart Fuel Monitoring{" "}
            <span className="gradient-text">&amp; Fleet Control</span>{" "}
            Platform
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Track every vehicle. Monitor every drop of fuel. Detect anomalies instantly.
            FILTECH MONITOR gives you complete visibility over your fleet — in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" asChild>
              <a href="#cta">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1000+", label: "Objects Tracked" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<1s", label: "Alert Latency" },
            { value: "24/7", label: "Monitoring" },
          ].map((s) => (
            <div key={s.label} className="soft-card rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
