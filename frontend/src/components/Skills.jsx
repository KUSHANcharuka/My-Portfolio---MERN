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
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          {skill.icon} {skill.name}
        </span>
        <span className="text-sm text-slate-400">{skill.percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full border border-white/10 bg-white/5">
        <div
          className="h-full rounded-full transition-[width] duration-[1200ms]"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            width: animate ? `${skill.percent}%` : "0%",
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
    <section id="skills" className="bg-slate-900/30 py-24" ref={ref}>
      <div className="container-custom">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-blue-500">
            What I Know
          </p>
          <h2 className="section-title">
            My Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="section-subtitle mb-0">
            Technologies I work with day-to-day
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card p-8">
            {skills.slice(0, half).map((s) => (
              <SkillBar key={s.name} skill={s} animate={animate} />
            ))}
          </div>
          <div className="card p-8">
            {skills.slice(half).map((s) => (
              <SkillBar key={s.name} skill={s} animate={animate} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mb-6 text-xs uppercase tracking-[1px] text-slate-500">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((t) => (
              <span
                key={t.name}
                className="flex cursor-default items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs text-slate-400 transition hover:border-blue-500 hover:bg-blue-500/15 hover:text-blue-500"
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
