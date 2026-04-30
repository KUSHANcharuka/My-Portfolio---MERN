import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiC,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#f97316" />,
    percent: 90,
    color: "#f97316",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#3b82f6" />,
    percent: 80,
    color: "#3b82f6",
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#eab308" />,
    percent: 70,
    color: "#eab308",
  },
  {
    name: "React.js",
    icon: <FaReact color="#06b6d4" />,
    percent: 60,
    color: "#06b6d4",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#22c55e" />,
    percent: 55,
    color: "#22c55e",
  },
  {
    name: "Java",
    icon: <FaJava color="#ef4444" />,
    percent: 60,
    color: "#ef4444",
  },
  {
    name: "Python",
    icon: <FaPython color="#a78bfa" />,
    percent: 55,
    color: "#a78bfa",
  },
  {
    name: "C Programming",
    icon: <SiC color="#38bdf8" />,
    percent: 70,
    color: "#38bdf8",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#4ade80" />,
    percent: 55,
    color: "#4ade80",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#f59e0b" />,
    percent: 65,
    color: "#f59e0b",
  },
];

const techBadges = [
  { name: "React", icon: <FaReact color="#06b6d4" /> },
  { name: "Node.js", icon: <FaNodeJs color="#22c55e" /> },
  { name: "Express", icon: <SiExpress color="#64748b" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4ade80" /> },
  { name: "MySQL", icon: <SiMysql color="#f59e0b" /> },
  { name: "Java", icon: <FaJava color="#ef4444" /> },
  { name: "Python", icon: <FaPython color="#a78bfa" /> },
  { name: "Figma", icon: <SiFigma color="#f97316" /> },
  { name: "Git", icon: <FaGitAlt color="#eab308" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#3b82f6" /> },
  { name: "REST API", icon: <FaNodeJs color="#22c55e" /> }, // reuse Node.js icon
  { name: "JWT", icon: <FaNodeJs color="#9333ea" /> },
];

function SkillBar({ skill, animate }) {
  return (
    <div style={{ marginBottom: "1.4rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: ".5rem",
        }}
      >
        <span
          style={{
            fontSize: ".9rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {skill.icon} {skill.name}
        </span>
        <span style={{ color: "#94a3b8", fontSize: ".85rem" }}>
          {skill.percent}%
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 50,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 50,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            width: animate ? `${skill.percent}%` : "0%",
            transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
            boxShadow: `0 0 8px ${skill.color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const half = Math.ceil(skills.length / 2);

  return (
    <section
      id="skills"
      style={{ padding: "6rem 0", background: "rgba(17,24,39,0.3)" }}
      ref={ref}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#3b82f6",
              fontSize: ".85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "1rem",
            }}
          >
            What I Know
          </p>
          <h2 className="section-title">
            My Technical <span>Skills</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Technologies I work with day-to-day
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div className="card" style={{ padding: "2rem" }}>
            {skills.slice(0, half).map((s) => (
              <SkillBar key={s.name} skill={s} animate={animate} />
            ))}
          </div>
          <div className="card" style={{ padding: "2rem" }}>
            {skills.slice(half).map((s) => (
              <SkillBar key={s.name} skill={s} animate={animate} />
            ))}
          </div>
        </div>

        {/* Tech badges */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#64748b",
              fontSize: ".85rem",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Also familiar with
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: ".75rem",
            }}
          >
            {techBadges.map((t) => (
              <span
                key={t.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: ".4rem 1.1rem",
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: 50,
                  fontSize: ".82rem",
                  color: "#94a3b8",
                  transition: "all .3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.color = "#3b82f6";
                  e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                }}
              >
                {t.icon} {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
