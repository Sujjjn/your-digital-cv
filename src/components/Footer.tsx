import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sujan Bhattarai. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Nepal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
