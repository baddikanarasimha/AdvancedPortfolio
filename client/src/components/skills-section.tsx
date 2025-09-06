import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(percentage);
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${width}%` }}
          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  useScrollReveal();

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 75 },
        { name: "JavaScript", percentage: 85 },
        { name: "SQL", percentage: 80 },
      ]
    },
    {
      title: "Frameworks",
      icon: "fas fa-layer-group",
      skills: [
        { name: "Spring Boot", percentage: 85 },
        { name: "React.js", percentage: 80 },
        { name: "Hibernate", percentage: 75 },
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", percentage: 85 },
        { name: "Oracle", percentage: 70 },
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", percentage: 90 },
        { name: "IntelliJ", percentage: 85 },
        { name: "VS Code", percentage: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-morphism rounded-xl p-6 reveal-animation transform hover:scale-105 transition-all duration-300"
              data-testid={`card-${category.title.toLowerCase()}`}
            >
              <div className="text-center mb-6">
                <i className={`${category.icon} text-4xl text-accent mb-4`}></i>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
