import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const getCategoryClass = (category: string) => {
  switch (category.toLowerCase()) {
    case "ai/ml":    return "category-aiml";
    case "web app":  return "category-webapp";
    case "security": return "category-security";
    default:         return "category-default";
  }
};



/* ══════════════════════════════════════════════════
   SkillsSection — Aggressive Cyber/Brutalist
══════════════════════════════════════════════════ */
const SkillsSection = ({ ss }: { ss: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* GSAP scroll animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sk4-heading-glitch",
        { opacity: 0, x: -80, skewX: 20 },
        { opacity: 1, x: 0, skewX: 0, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: ".sk4-heading-container", start: "top 85%" } });

      gsap.fromTo(".sk4-category-row",
        { opacity: 0, y: 40, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: ".sk4-grid", start: "top 80%" } });

      gsap.fromTo(".sk4-skill-node",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.02, ease: "back.out(2)",
          scrollTrigger: { trigger: ".sk4-grid", start: "top 75%" }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="skills-section sk4" id="skills" ref={sectionRef}>

      {/* Brutalist Heading */}
      <div className="sk4-heading-container">
        <h3 className="sk4-heading-glitch" data-text="SYSTEM_ARSENAL">SYSTEM_ARSENAL</h3>
        <span className="sk4-heading-sub">// EXPERTISE / {ss.categories.length} MODULES ONLINE</span>
        <div className="sk4-heading-divider"></div>
      </div>

      <div className="sk4-grid">
        {(ss.categories as any[]).map((cat, i) => {
          return (
            <div key={i} className="sk4-category-row">
              {/* Category Sidebar */}
              <div className="sk4-category-sidebar">
                <div className="sk4-cat-icon">{cat.icon}</div>
                <div className="sk4-cat-label-wrap">
                  <span className="sk4-cat-label">{cat.label.toUpperCase()}</span>
                  <span className="sk4-cat-count">// [{cat.items.length}]</span>
                </div>
              </div>

              {/* Aggressive skill nodes */}
              <div className="sk4-skills-list">
                {(cat.items as string[]).map((item, j) => (
                  <div key={j} className="sk4-skill-node-wrapper">
                     <span className="sk4-skill-node" data-hover={item}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   Work — main page component
══════════════════════════════════════════════════ */
const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".work-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" } });
      });
    }
  }, []);

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="work-container section-container">

        <SkillsSection ss={(config as any).skillsSection} />

        <h2 className="title work-section-title">Academic &amp; Personal Projects</h2>

        <div className="work-cards-grid">
          {config.projects.map((project) => {
            const p = project as any;
            return (
              <div key={project.id} className={`work-card${p.highlight ? " work-card--highlight" : ""}`}>
                {p.highlight && <div className="work-card-badge">{p.badge}</div>}
                <div className="work-card-img-wrapper">
                  <img src={project.image} alt={project.title} className="work-card-img" />
                  <div className="work-card-overlay">
                    <span className={`work-card-category ${getCategoryClass(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="work-card-body">
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{p.description}</p>
                  <p className="work-card-tech">{project.technologies}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="work-card-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h3 className="achievements-title">🏆 Achievements <span className="achievements-globe">🌐</span></h3>
          <div className="achievements-grid">
            {(config as any).achievements.map((a: any, i: number) => (
              <div key={i} className="achievement-card">
                <div className="achievement-icon">{a.icon}</div>
                <div className="achievement-body">
                  <div className="achievement-header">
                    <span className="achievement-name">{a.title}</span>
                    <span className="achievement-year">{a.year}</span>
                  </div>
                  <p className="achievement-desc">{a.description}</p>
                  {a.ref && (
                    <div className="achievement-ref">
                      <span className="achievement-ref-label">{a.refLabel}</span>{" "}
                      {a.link
                        ? <a href={a.link} target="_blank" rel="noopener noreferrer" className="achievement-ref-link">{a.ref} ↗</a>
                        : <code className="achievement-ref-code">{a.ref}</code>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
