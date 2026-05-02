const stats = [
  { value: "3+", label: "Years Learning" },
  { value: "5+", label: "Projects Built" },
  { value: "BSc", label: "Computer Science" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Image side */}
          <div style={{ flex: "0 0 auto" }}>
            <div style={{ position: "relative", width: 300 }}>
              {/* Decorative frame */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  right: -16,
                  bottom: -16,
                  border: "2px solid rgba(59,130,246,0.25)",
                  borderRadius: 20,
                }}
              />
              <div
                style={{
                  width: 300,
                  height: 360,
                  borderRadius: 20,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(6,182,212,0.08))",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div style={{ textAlign: "center", color: "#3b82f6" }}></div>
                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    width: 32,
                    height: 32,
                    borderTop: "2px solid #3b82f6",
                    borderRight: "2px solid #3b82f6",
                  }}
                />
                <img
                  src="/img/myphotoo.png"
                  alt="Portrait of Kushan Charuka"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    margin: "auto",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    width: 32,
                    height: 32,
                    borderBottom: "2px solid #06b6d4",
                    borderLeft: "2px solid #06b6d4",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div style={{ flex: "1 1 320px" }}>
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
              About Me
            </p>
            <h2 className="section-title">
              Crafting Code with <span>Passion</span>
            </h2>
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "1.5rem",
                lineHeight: 1.9,
              }}
            >
              I'm a third-year BSc (Hons) Computer Science undergraduate, driven
              by curiosity and a love for building things that live on the
              internet. I thrive at the intersection of design and technology.
            </p>
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "2.5rem",
                lineHeight: 1.9,
              }}
            >
              My stack spans the full MERN ecosystem — React on the frontend,
              Node.js + Express on the backend, and MongoDB for data
              persistence. I also bring UI/UX sensibilities from tools like
              Figma and Tailwind CSS.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    padding: "1rem 1.5rem",
                    background: "rgba(17,24,39,0.7)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.8rem",
                      color: "#3b82f6",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: ".78rem",
                      color: "#64748b",
                      marginTop: ".25rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {/* <a
                href="/cv/KUSHAN CHARUKA CS CV.pdf"
                // download="KUSHAN CHARUKA CV.pdf"
                className="btn btn-primary"
              >
                Download CV
              </a> */}
              <button
                className="btn btn-primary"
                onClick={() =>
                  window.open(
                    "/cv/KUSHAN CHARUKA CS CV.pdf",
                    "KUSHAN CHARUKA CV.pdf",
                  )
                }
              >
                Download CV
              </button>

              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
