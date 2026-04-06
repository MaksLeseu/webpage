import { motion } from "framer-motion";
import { Cpu, Database, Monitor, AlertTriangle } from "lucide-react";

const steps = [
  { icon: Cpu, title: "Devices Installed", desc: "Fuel sensors and telematics devices are installed on your fleet vehicles." },
  { icon: Database, title: "Data Collected", desc: "High-frequency telemetry data is transmitted and ingested in real time." },
  { icon: Monitor, title: "Processed & Visualized", desc: "Data is analyzed, processed, and displayed on interactive dashboards." },
  { icon: AlertTriangle, title: "Alerts Generated", desc: "Smart algorithms detect anomalies and trigger instant notifications." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          From device installation to actionable insights — in four simple steps.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-primary/20">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-xs font-mono text-primary mb-2">STEP {i + 1}</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
