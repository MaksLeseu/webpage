import { motion } from "framer-motion";
import { Map, Droplets, BellRing, FileBarChart, Settings2, Users } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Real-Time Monitoring",
    desc: "Interactive map with live vehicle positions, speed, and route history. Process thousands of data points per minute with zero lag.",
  },
  {
    icon: Droplets,
    title: "Fuel Control",
    desc: "Monitor fuel levels, detect refills and theft, track consumption patterns, and identify abnormal drain events automatically.",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    desc: "Multi-level alert system — critical, important, and informational — delivered in real time via the platform or external channels.",
  },
  {
    icon: FileBarChart,
    title: "Reports & Analytics",
    desc: "Generate detailed reports from templates with charts, tables, and statistics. Export data for compliance or management review.",
  },
  {
    icon: Settings2,
    title: "Object & Device Management",
    desc: "Easily onboard vehicles and sensors. Configure monitoring parameters, calibration settings, and data processing rules.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    desc: "Define company hierarchies, user roles, and granular permissions. Support multi-tenant architecture for monitoring providers.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Powerful Features for{" "}
          <span className="gradient-text">Complete Visibility</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Every tool you need to monitor, analyze, and optimize your fleet operations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="soft-card-hover rounded-2xl p-8 group"
          >
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5">
              <f.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
