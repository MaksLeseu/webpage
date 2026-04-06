import { motion } from "framer-motion";
import { MapPin, BarChart3, Bell, Shield } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Interactive map with live positions, routes, and status of every vehicle in your fleet.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Deep insights into fuel consumption, mileage, and operational efficiency with customizable reports.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Get notified immediately about fuel theft, abnormal consumption, or critical system events.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade",
    desc: "Role-based access, multi-company hierarchy, and scalable architecture for any fleet size.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          One Platform. <span className="gradient-text">Total Control.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          FILTECH MONITOR combines real-time telemetry, smart analytics, and an intuitive interface
          to give fleet managers and monitoring companies everything they need in one place.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="soft-card-hover rounded-2xl p-6 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
