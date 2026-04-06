import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have questions about FILTECH MONITOR? Want to schedule a demo or discuss
              a custom integration? Our team is ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">contact@filtechmonitor.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                  <div className="font-medium text-foreground">Kyiv, Ukraine</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="soft-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                  <Input placeholder="Your name" required maxLength={100} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="you@company.com" required maxLength={255} />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Company</label>
                <Input placeholder="Company name" maxLength={100} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <Textarea placeholder="Tell us about your fleet and monitoring needs..." rows={5} required maxLength={1000} />
              </div>
              <Button type="submit" className="w-full h-12 shadow-md shadow-primary/20" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
