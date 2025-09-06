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
            <div className="social-links-container">
              <a 
                href="https://github.com/baddikanarasimha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-link-github"
                data-testid="link-github-footer"
              >
                <div className="pulse-ring"></div>
                <i className="fab fa-github"></i>
                <div className="social-tooltip">GitHub</div>
              </a>
              <a 
                href="https://www.linkedin.com/in/narasimha-rao-baddika-304a64289/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-link-linkedin"
                data-testid="link-linkedin-footer"
              >
                <div className="pulse-ring"></div>
                <i className="fab fa-linkedin"></i>
                <div className="social-tooltip">LinkedIn</div>
              </a>
              <a 
                href="mailto:narasimharajubaddika225@gmail.com" 
                className="social-link social-link-email"
                data-testid="link-email-footer"
              >
                <div className="pulse-ring"></div>
                <i className="fas fa-envelope"></i>
                <div className="social-tooltip">Email</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
