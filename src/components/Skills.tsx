import { Code, Database, BarChart3, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "PostgreSQL", "MySQL"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      skills: ["NumPy", "Pandas", "Matplotlib", "Power BI", "DAX", "ETL", "KPI"],
      color: "primary"
    },
    {
      icon: GitBranch,
      title: "Frameworks & Tools",
      skills: ["Django", "Flask", "Git", "GitHub", "MS Excel"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${category.color === 'primary' ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'} border`}>
                  <category.icon className={`w-5 h-5 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      category.color === 'primary'
                        ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                        : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
