import { useEffect, useState } from "react";

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let current = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = index;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const targetSection = document.getElementById(sections[index]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
    }
  };

  return (
    <div className="floating-nav hidden md:block">
      {sections.map((_, index) => (
        <div
          key={index}
          className={`nav-dot ${index === activeSection ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          data-testid={`nav-dot-${index}`}
        />
      ))}
    </div>
  );
}
