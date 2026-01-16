import { ExternalLink, Github, BarChart, LineChart, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: BarChart,
      title: "Customer Churn Analysis",
      subtitle: "Telecom Company Analytics",
      period: "Sept 2024 – Present",
      tools: ["Python", "Django", "Power BI", "MS-Excel", "HTML/CSS"],
      description: "End-to-end customer churn analysis including data cleaning, modeling, and analysis to identify key factors influencing customer attrition.",
      highlights: [
        "Built interactive dashboards and KPIs to visualize churn trends",
        "Enabled stakeholders to make informed decisions on retention strategies"
      ]
    },
    {
      icon: LineChart,
      title: "Himalaya AI Dashboard",
      subtitle: "Analytics & Portfolio Management",
      period: "March 2025",
      tools: ["Power BI", "NumPy", "Pandas", "Django", "MySQL"],
      description: "Scalable analytics dashboards to track KPIs, trends, and business metrics for data-driven strategic decisions.",
      highlights: [
        "Portfolio management platform with performance analytics",
        "Transformed complex datasets into actionable insights"
      ]
    },
    {
      icon: PieChart,
      title: "Sales Data Dashboard",
      subtitle: "Power BI Analytics",
      period: "Aug 2024 – Dec 2024",
      tools: ["Power BI", "MS-Excel", "SQL", "CSV"],
      description: "Interactive Sales Dashboard to monitor revenue, profit margins, and regional KPIs across business units.",
      highlights: [
        "Advanced slicers, filters, and drill-through reports",
        "Identified growth opportunities and performance gaps"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Header with gradient */}
              <div className="relative h-32 bg-gradient-primary p-6 flex items-end">
                <div className="absolute inset-0 bg-background/60" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-primary font-mono mb-3">{project.period}</p>
                
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 text-[10px] font-mono bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary/50 text-foreground hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/Sujjjn" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
