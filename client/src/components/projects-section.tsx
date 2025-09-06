import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ProjectsSection() {
  useScrollReveal();

  const projects = [
    {
      title: "Employee Management System",
      description: "Designed a secure system with login, registration, and role-based access control. Built an admin dashboard managing records for 50+ employees, automating HR tasks.",
      technologies: ["Java", "Spring Boot", "MySQL", "JDBC"],
      period: "Jun 2025",
      icon: "fas fa-users",
      achievements: [
        { icon: "fas fa-shield-alt", text: "Secure Authentication" },
        { icon: "fas fa-chart-line", text: "30% Less Crashes" },
      ],
      gradientFrom: "primary/20",
      gradientTo: "accent/20"
    },
    {
      title: "Food Order Website",
      description: "Developed a full-stack grocery web app with inventory & order management features. Built a responsive UI enhancing customer shopping experience across devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL"],
      period: "Jun 2024 - Dec 2024",
      icon: "fas fa-utensils",
      achievements: [
        { icon: "fas fa-tachometer-alt", text: "25% Faster Queries" },
        { icon: "fas fa-mobile-alt", text: "Responsive Design" },
      ],
      gradientFrom: "accent/20",
      gradientTo: "primary/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-morphism rounded-xl overflow-hidden group transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 reveal-animation"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br from-${project.gradientFrom} to-${project.gradientTo} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`${project.icon} text-6xl text-accent opacity-50`}></i>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-external-link-alt text-2xl text-white mb-2"></i>
                      <p className="text-white">View Project</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold" data-testid="text-period">
                    {project.period}
                  </span>
                  <div className="flex space-x-3">
                    <button 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="button-github"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                    <button 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      data-testid="button-live-demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <span key={achievementIndex} data-testid={`achievement-${achievementIndex}`}>
                        <i className={`${achievement.icon} text-accent mr-1`}></i>
                        {achievement.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
