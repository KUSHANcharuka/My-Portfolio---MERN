export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59,130,246,0.1)",
        padding: "2.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.2rem",
              color: "#3b82f6",
            }}
          >
            K.Charuka
          </p>
          <p
            style={{ color: "#475569", fontSize: ".8rem", marginTop: ".25rem" }}
          >
            BSc (Hons) Computer Science
          </p>
        </div>
        <p style={{ color: "#475569", fontSize: ".82rem" }}>
          © {new Date().getFullYear()} Kushan Charuka. Built with{" "}
          <span style={{ color: "#3b82f6" }}>React</span> +{" "}
          <span style={{ color: "#22c55e" }}>Node.js</span> +{" "}
          <span style={{ color: "#4ade80" }}>MongoDB</span>
        </p>
      </div>
    </footer>
  );
}
