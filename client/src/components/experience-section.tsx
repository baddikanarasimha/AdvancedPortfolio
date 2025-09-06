import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ExperienceSection() {
  useScrollReveal();

  const certifications = [
    {
      title: "Java Full-Stack Development Program",
      organization: "Kodnest",
      year: "2025",
      icon: "fab fa-java"
    },
    {
      title: "SQL Certification",
      organization: "Newton School of Education",
      year: "2025",
      icon: "fas fa-database"
    },
    {
      title: "Spring Boot Certification",
      organization: "LinkedIn",
      year: "2025",
      icon: "fas fa-leaf"
    }
  ];

  const achievements = [
    {
      title: "College Hackathon Finalist",
      description: "Recognized for full-stack innovation (2024)",
      icon: "fas fa-code"
    },
    {
      title: "Team Leadership",
      description: "Led college volleyball team to tournament victory (2023)",
      icon: "fas fa-volleyball-ball"
    },
    {
      title: "NSS Volunteer",
      description: "Organized multiple community-driven programs",
      icon: "fas fa-hands-helping"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-8 text-accent flex items-center">
              <i className="fas fa-briefcase mr-3"></i>
              Experience
            </h3>
            
            <div className="timeline-item">
              <div className="glass-morphism rounded-xl p-6" data-testid="card-internship">
                <h4 className="text-xl font-bold text-primary">Java Backend Intern</h4>
                <p className="text-accent mb-2">Retech Solutions, Chennai</p>
                <p className="text-muted-foreground mb-4">Jun 2023</p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-2 mt-1 text-sm"></i>
                    Developed REST APIs using Spring Boot for real-time applications
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-2 mt-1 text-sm"></i>
                    Implemented CRUD operations and optimized MySQL queries for better performance
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-2 mt-1 text-sm"></i>
                    Collaborated with senior developers to enhance API scalability and response time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-8 text-accent flex items-center">
              <i className="fas fa-graduation-cap mr-3"></i>
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="timeline-item">
                <div className="glass-morphism rounded-xl p-6" data-testid="card-btech">
                  <h4 className="text-lg font-bold text-primary">B.E. in Computer Science and Engineering</h4>
                  <p className="text-accent">Dhanalakshmi College of Engineering, Chennai</p>
                  <p className="text-muted-foreground">Sep 2021 – Mar 2025</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-2xl font-bold text-accent">8.0</span>
                    <span className="text-muted-foreground ml-2">CGPA</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="glass-morphism rounded-xl p-6" data-testid="card-intermediate">
                  <h4 className="text-lg font-bold text-primary">Intermediate (Class XII)</h4>
                  <p className="text-accent">Viswasai Junior College, Nellore</p>
                  <p className="text-muted-foreground">Jun 2019 – Dec 2021</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-2xl font-bold text-accent">88.7%</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="glass-morphism rounded-xl p-6" data-testid="card-ssc">
                  <h4 className="text-lg font-bold text-primary">SSC (Class X)</h4>
                  <p className="text-accent">Sri Vivekanandha High School, Vinjamur</p>
                  <p className="text-muted-foreground">Jun 2018 – Dec 2019</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-2xl font-bold text-accent">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Certifications */}
          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-8 text-accent flex items-center">
              <i className="fas fa-certificate mr-3"></i>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="glass-morphism rounded-xl p-4 flex items-center transform hover:scale-105 transition-all duration-300"
                  data-testid={`card-certification-${index}`}
                >
                  <i className={`${cert.icon} text-2xl text-accent mr-4`}></i>
                  <div>
                    <h4 className="font-bold">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.organization} ({cert.year})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-8 text-accent flex items-center">
              <i className="fas fa-trophy mr-3"></i>
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="glass-morphism rounded-xl p-4 flex items-center transform hover:scale-105 transition-all duration-300"
                  data-testid={`card-achievement-${index}`}
                >
                  <i className={`${achievement.icon} text-2xl text-accent mr-4`}></i>
                  <div>
                    <h4 className="font-bold">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
