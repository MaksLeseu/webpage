import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import screenMap from "@/assets/screen-map.jpg";
import screenNotifications from "@/assets/screen-notifications.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";

const tabs = [
  { id: "map", label: "Live Map", image: screenMap },
  { id: "alerts", label: "Notifications", image: screenNotifications },
  { id: "analytics", label: "Analytics", image: screenAnalytics },
];

const ScreensSection = () => {
  const [active, setActive] = useState("map");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See the <span className="gradient-text">Platform in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the dashboards that power real-time fleet intelligence.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === t.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Screenshot */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-border shadow-xl shadow-black/5"
            >
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-auto"
                loading="lazy"
                width={1280}
                height={800}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScreensSection;
