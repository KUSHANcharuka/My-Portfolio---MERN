import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaLayerGroup,
  FaBolt,
  FaPalette,
} from "react-icons/fa";
import {
  SiC,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const stacks = [
  {
    title: "Frontend Craft",
    icon: <FaPalette className="text-cyan-400" />,
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-400/20",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-300" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Figma", icon: <SiFigma className="text-orange-300" /> },
    ],
    notes: ["Responsive UI", "Design systems", "Clean interactions"],
  },
  {
    title: "Backend Systems",
    icon: <FaBolt className="text-emerald-400" />,
    accent: "from-emerald-500/20 to-cyan-500/10",
    border: "border-emerald-400/20",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-amber-400" /> },
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "Python", icon: <FaPython className="text-violet-300" /> },
    ],
    notes: ["REST APIs", "Authentication", "Data modeling"],
  },
  {
    title: "Workflow Tools",
    icon: <FaLayerGroup className="text-violet-400" />,
    accent: "from-violet-500/20 to-fuchsia-500/10",
    border: "border-violet-400/20",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-yellow-300" /> },
      { name: "C Programming", icon: <SiC className="text-sky-300" /> },
      { name: "JWT", icon: <FaNodeJs className="text-fuchsia-300" /> },
      { name: "API Integration", icon: <FaBolt className="text-cyan-300" /> },
      { name: "UI Prototyping", icon: <SiFigma className="text-orange-200" /> },
    ],
    notes: ["Version control", "Rapid prototyping", "Shipping polish"],
  },
];

function SkillPill({ skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white">
      {skill.icon}
      {skill.name}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-900/30 py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-blue-500">
            What I Know
          </p>
          <h2 className="section-title">
            My Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="mb-0 section-subtitle">
            Technologies I work with day-to-day
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1.25fr]">
          <div className="relative p-8 overflow-hidden card md:p-10">
            <div className="inline-flex items-center justify-center mb-6 text-2xl text-blue-400 border h-14 w-14 rounded-2xl border-blue-500/20 bg-blue-500/10">
              <FaLayerGroup />
            </div>

            <h3 className="mb-4 font-display text-3xl leading-tight text-white md:text-[2.2rem]">
              I build polished interfaces and the systems behind them.
            </h3>

            <p className="max-w-xl mb-8 leading-loose text-slate-400">
              My focus is on shipping work that feels current: responsive
              layouts, clear UI structure, reliable APIs, and a stack that
              supports real projects instead of just ticking boxes.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Frontend", value: "React + Tailwind" },
                { label: "Backend", value: "Node + Express" },
                { label: "Database", value: "MongoDB + MySQL" },
                { label: "Languages", value: "Java, Python, C" },
                { label: "Design", value: "Figma + UI/UX" },
                { label: "Workflow", value: "Git + APIs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 border rounded-2xl border-white/10 bg-slate-950/40"
                >
                  <div className="text-xs uppercase tracking-[2px] text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-100">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stacks.map((stack) => (
              <div
                key={stack.title}
                className={`card overflow-hidden border ${stack.border} bg-gradient-to-br ${stack.accent} p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center text-lg border h-11 w-11 rounded-xl border-white/10 bg-slate-950/60">
                    {stack.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {stack.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {stack.notes.join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {stack.skills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>

                <div className="p-4 text-sm leading-loose border rounded-2xl border-white/10 bg-slate-950/35 text-slate-400">
                  I like keeping each stack cohesive, so the design language
                  stays consistent from first wireframe to final deployment.
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-5 mt-6 text-center border rounded-3xl border-blue-500/15 bg-slate-950/50 backdrop-blur-md md:px-8">
          <p className="mb-2 text-xs uppercase tracking-[2px] text-slate-500">
            Also comfortable with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "React", icon: <FaReact className="text-cyan-300" /> },
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-green-400" />,
              },
              {
                name: "Express",
                icon: <SiExpress className="text-slate-300" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-300" />,
              },
              { name: "MySQL", icon: <SiMysql className="text-amber-400" /> },
              { name: "Figma", icon: <SiFigma className="text-orange-300" /> },
              { name: "Git", icon: <FaGitAlt className="text-yellow-300" /> },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-sky-400" />,
              },
            ].map((tech) => (
              <span
                key={tech.name}
                className="flex cursor-default items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
