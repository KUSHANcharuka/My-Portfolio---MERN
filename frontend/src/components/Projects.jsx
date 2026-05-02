const projects = [
  {
    title: "Task Manager Website",
    desc: "Full-stack task management system with React.js frontend and secure RESTful API backend. Features JWT authentication, MongoDB Atlas, and a responsive Tailwind CSS dashboard.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    link: "https://task-manager-front-azure-beta.vercel.app/",
    color: "#3b82f6",
    emoji: "✅",
  },
  {
    title: "Online Exam Management",
    desc: "Full-stack web app automating institutional exam workflows with MySQL, multi-role auth, PHPMailer integrations, and dashboards for lecturers and admins.",
    tags: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
    link: "https://exam-manage.lovestoblog.com/SLIATE-exam-apply/SLIATE-exam-apply/Student/login.php",
    color: "#06b6d4",
    emoji: "📋",
  },
  {
    title: "Library Management System",
    desc: "Desktop library app using Java Swing and MySQL with JDBC for data persistence. Full CRUD for inventory and real-time tracking for borrowing and returns.",
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    link: "https://github.com/KUSHANcharuka/Library-Management-System",
    color: "#f97316",
    emoji: "📚",
  },
  {
    title: "Smart Campus App Design",
    desc: "High-fidelity mobile app design with AI chatbots, interactive campus navigation, and smart library modules. Fully clickable Figma prototype.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/nUGqFpR8iwKE0pbIF4PSKS/Smart-Campus-Design?node-id=0-1",
    color: "#a78bfa",
    emoji: "🏫",
  },
  {
    title: "Riya Sewana Redesign",
    desc: "UX analysis and redesign of a Sri Lankan vehicle marketplace. High-fidelity Figma prototype improving visual hierarchy and responsiveness.",
    tags: ["Figma", "Canva", "Photoshop", "UX"],
    link: "https://www.figma.com/proto/Ernx1pP4OBzItjlfkZkuUl/interfaces?node-id=10-6",
    color: "#22c55e",
    emoji: "🚗",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-blue-500">
            Portfolio
          </p>
          <h2 className="section-title">
            My Recent <span className="text-blue-500">Projects</span>
          </h2>
          <p className="section-subtitle mb-0">
            A selection of things I've built
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block text-inherit no-underline"
            >
              <div className="card flex h-full flex-col p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}33`,
                    }}
                  >
                    {p.emoji}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-loose text-slate-400">
                  {p.desc}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-3 py-1 text-xs"
                      style={{
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}28`,
                        color: p.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1 text-sm font-medium"
                  style={{ color: p.color }}
                >
                  View Project <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
