import { Briefcase, TrendingUp, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: TrendingUp,
      title: "Researcher",
      company: "Nepal Stock Exchange (NEPSE)",
      period: "March 2024 – Present",
      tools: ["MS-Excel", "Power BI", "DAX", "KPI", "ETL", "Matplotlib"],
      points: [
        "Analyzed NEPSE stock market data using Pandas for data cleaning and transformation, and Matplotlib for visualizing market trends, price movements, and performance insights.",
        "Developed an interactive Power BI dashboard integrated with processed NEPSE data and deployed insights through a Django-based web application to support data-driven investment analysis."
      ]
    },
    {
      icon: Briefcase,
      title: "Founder",
      company: "HimalayaAI",
      period: "June 2025 – August 2025",
      tools: ["Analytics Dashboard", "KPIs", "Data Visualization"],
      points: [
        "Founded and contributed to Himalaya AI, developing a data-driven Analytics Dashboard focused on transforming raw data into actionable insights.",
        "Designed and implemented interactive dashboards with KPIs, charts, and reports to support informed decision-making and enhance business strategy."
      ]
    }

  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1.5 md:-translate-x-2 mt-6 glow-primary z-10" />

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
