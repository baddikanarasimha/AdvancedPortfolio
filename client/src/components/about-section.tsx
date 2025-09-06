import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

export default function AboutSection() {
  useScrollReveal();
  const cgpaCount = useCounterAnimation(8.0, 2000);
  const certificationsCount = useCounterAnimation(3, 2000);
  const projectsCount = useCounterAnimation(2, 2000);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-animation">
            {/* Professional photo placeholder */}
            <div className="relative">
              <div 
                className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden"
                data-testid="img-professional"
              >
                <div className="w-full h-full bg-muted animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full animate-pulse-slow"></div>
            </div>
          </div>

          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-6 text-accent" data-testid="text-role">
              Aspiring Java Full Stack Developer
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Skilled in building scalable web applications using Java, Spring Boot, React, REST APIs, and MySQL. 
              Hands-on experience in designing secure systems, optimizing performance, and solving real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Strong foundation in DSA, OOP, and DBMS, eager to contribute to innovative teams and deliver 
              impactful software solutions.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent" data-testid="counter-cgpa">
                  {cgpaCount.toFixed(1)}
                </div>
                <p className="text-muted-foreground">CGPA</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent" data-testid="counter-certifications">
                  {Math.floor(certificationsCount)}
                </div>
                <p className="text-muted-foreground">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent" data-testid="counter-projects">
                  {Math.floor(projectsCount)}
                </div>
                <p className="text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
