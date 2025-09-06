import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import profileImage from "@assets/1000053475[1]_1757183680909.jpg";

export default function HeroSection() {
  const typingText = useTypingEffect("Java Full Stack Developer", 100, 2000);
  useScrollReveal();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div 
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-accent/50 shadow-2xl transform hover:scale-110 transition-all duration-300"
            data-testid="img-profile"
          >
            <img 
              src={profileImage} 
              alt="Narasimha Rao Baddika - Java Full Stack Developer" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text animate-slide-up">
            Narasimha Rao
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-muted-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
            Baddika
          </h2>
          <div 
            className="text-xl md:text-2xl mb-8 text-accent animate-slide-up" 
            style={{animationDelay: '0.4s'}}
            data-testid="text-title"
          >
            {typingText}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 neon-glow"
              data-testid="button-view-work"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links-container mt-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <a 
              href="https://github.com/baddikanarasimha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link social-link-github"
              data-testid="link-github"
            >
              <div className="pulse-ring"></div>
              <i className="fab fa-github text-xl"></i>
              <div className="social-tooltip">GitHub Profile</div>
            </a>
            <a 
              href="https://linkedin.com/in/narasimha-rao-baddika" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link social-link-linkedin"
              data-testid="link-linkedin"
            >
              <div className="pulse-ring"></div>
              <i className="fab fa-linkedin text-xl"></i>
              <div className="social-tooltip">LinkedIn Profile</div>
            </a>
            <a 
              href="mailto:narasimharajubaddika225@gmail.com" 
              className="social-link social-link-email"
              data-testid="link-email"
            >
              <div className="pulse-ring"></div>
              <i className="fas fa-envelope text-xl"></i>
              <div className="social-tooltip">Send Email</div>
            </a>
            <a 
              href="tel:+917207369225" 
              className="social-link social-link-phone"
              data-testid="link-phone"
            >
              <div className="pulse-ring"></div>
              <i className="fas fa-phone text-xl"></i>
              <div className="social-tooltip">Call Me</div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-accent rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
