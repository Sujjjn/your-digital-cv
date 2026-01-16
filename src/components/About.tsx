import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const About = () => {
  const coursework = [
    "Data Structures & Algorithm",
    "Object Oriented Programming in C++",
    "Programming in Python",
    "Database Management Systems",
    "Probability and Statistics",
    "Discrete Mathematics",
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Education card */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                    Bachelor of Information Technology
                  </h3>
                  <p className="text-primary font-medium">Patan Multiple Campus</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <Calendar className="w-4 h-4" />
                <span>Expected Graduation: May 2027</span>
              </div>

              {/* Coursework */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-secondary/50 border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              "Data Analysis with Python",
              "Analyzing Data using Microsoft Power BI"
            ].map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/30 border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
