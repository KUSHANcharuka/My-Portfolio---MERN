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
    <section id="projects" style={{ padding: "6rem 0" }}>
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
            Portfolio
          </p>
          <h2 className="section-title">
            My Recent <span>Projects</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            A selection of things I've built
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                className="card"
                style={{
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {p.emoji}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: ".88rem",
                    lineHeight: 1.8,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: ".2rem .75rem",
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}28`,
                        borderRadius: 50,
                        fontSize: ".75rem",
                        color: p.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div
                  style={{
                    color: p.color,
                    fontSize: ".85rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                  }}
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
