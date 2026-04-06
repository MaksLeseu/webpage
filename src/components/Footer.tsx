import { Fuel } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Fuel className="h-5 w-5 text-primary" />
          <span>FILTECH</span>
          <span className="text-primary">MONITOR</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">Product</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FILTECH MONITOR. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
