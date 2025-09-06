import { useEffect } from "react";
import ParticlesBackground from "@/components/particles-background";
import FloatingNavigation from "@/components/floating-navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    document.title = "Narasimha Rao Baddika - Full Stack Developer | Java & React Specialist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aspiring Java Full Stack Developer skilled in Spring Boot, React, MySQL. Building scalable web applications with 8.0 CGPA from Dhanalakshmi College of Engineering. Available for innovative software development opportunities.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <FloatingNavigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              © 2024 Narasimha Rao Baddika. Designed & Developed with ❤️
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/baddikanarasimha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                data-testid="link-github-footer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/narasimha-rao-baddika" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                data-testid="link-linkedin-footer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="mailto:narasimharajubaddika225@gmail.com" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                data-testid="link-email-footer"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
