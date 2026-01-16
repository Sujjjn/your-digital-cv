import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sujanbhattarai603@gmail.com",
      href: "mailto:sujanbhattarai603@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9840731759",
      href: "tel:+9779840731759"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lalitpur, Nepal",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sujjjn"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sujan-bhattaraib3027b252/"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about data analytics and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-card border border-border rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-6 animate-pulse-glow">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in data-driven solutions or need help with your next project?
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
                asChild
              >
                <a href="mailto:sujanbhattarai603@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
