import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "For small fleets getting started with monitoring",
    features: ["Up to 25 objects", "Real-time map tracking", "Basic fuel monitoring", "Email alerts", "Standard reports"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    desc: "For growing fleets that need advanced analytics",
    features: ["Up to 200 objects", "Advanced fuel analytics", "Theft detection", "Multi-level alerts", "Custom report templates", "Role-based access", "API access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large fleets and monitoring providers",
    features: ["Up to 1000+ objects", "Multi-company hierarchy", "White-label options", "Dedicated support", "SLA guarantee", "Custom integrations", "On-premise option"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Simple, Scalable <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Pay based on the number of monitored objects. Scale as your fleet grows.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-8 flex flex-col bg-card ${
              plan.highlighted
                ? "border-2 border-primary shadow-xl shadow-primary/10 relative"
                : "border border-border shadow-sm"
            }`}
          >
            {plan.highlighted && (
              <div className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">Most Popular</div>
            )}
            <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
            <div className="mt-4 mb-2">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "default" : "outline"}
              className={`w-full ${plan.highlighted ? "shadow-md shadow-primary/20" : ""}`}
              asChild
            >
              <a href="#cta">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
