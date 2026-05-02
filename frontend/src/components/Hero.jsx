import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TYPED_STRINGS = ["Developer", "Designer", "Freelancer", "Problem Solver"];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const current = TYPED_STRINGS[stringIndex];
      const display = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

      if (typedRef.current) typedRef.current.textContent = display;

      let delay = isDeleting ? 60 : 90;
      if (!isDeleting && charIndex === current.length + 1) {
        delay = 1600;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % TYPED_STRINGS.length;
        delay = 400;
      }

      timeoutId = setTimeout(type, delay);
    }

    timeoutId = setTimeout(type, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "3rem",
          paddingTop: "7rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 340px", animation: "fadeUp .8s ease both" }}>
          <p
            style={{
              color: "#3b82f6",
              fontSize: ".9rem",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Welcome to my portfolio
          </p>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#3b82f6", display: "block" }}>
              Kushan Charuka
            </span>
          </h1>
          <div
            style={{
              fontSize: "1.3rem",
              color: "#94a3b8",
              marginBottom: "1.5rem",
              height: "2.2rem",
            }}
          >
            I'm a{" "}
            <span
              ref={typedRef}
              style={{
                color: "#06b6d4",
                fontWeight: 500,
                borderRight: "2px solid #06b6d4",
                paddingRight: "2px",
              }}
            />
          </div>
          <p
            style={{
              color: "#94a3b8",
              maxWidth: 480,
              marginBottom: "2.5rem",
              lineHeight: 1.8,
            }}
          >
            A passionate Computr Science undergraduate crafting elegant digital
            experiences. I love turning complex problems into simple, beautiful
            solutions.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
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
              Get In Touch
            </a>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
            <a
              href="https://www.linkedin.com/in/kushan-charuka-a99b5929b/"
              target="linkedin"
              rel="noreferrer"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "1px solid rgba(59,130,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                transition: "all .3s",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.color = "#3b82f6";
                e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* in */}
              <DotLottieReact
                src="https://lottie.host/3d763acd-2235-43e9-a0f0-a4c04048e71f/ZOW8U2F5n5.lottie"
                loop
                autoplay
              />
            </a>

            <a
              href="https://github.com/KUSHANcharuka"
              target="github"
              rel="noreferrer"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "1px solid rgba(59,130,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                transition: "all .3s",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.color = "#3b82f6";
                e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <DotLottieReact
                src="https://lottie.host/ccdcd579-e999-486e-acf5-f55cf560b6ab/TfXsRAuQ15.lottie"
                loop
                autoplay
              />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            animation: "fadeUp .8s .2s ease both",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Pulse ring */}
            <div
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                border: "2px solid rgba(37,99,235,0.3)",
                animation: "spin 10s linear infinite",
              }}
            />

            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(59,130,246,0.4)",
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.1))",
              }}
            >
              <img
                src="/img/myphoto.png"
                alt="Portrait of Kushan Charuka"
                style={{
                  width: "300px",
                  height: "300px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3b82f6",
                  fontSize: "5rem",
                }}
              >
                KC
              </div>
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: -10,
                background: "rgba(37,99,235,0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: 12,
                padding: "8px 14px",
                fontSize: ".75rem",
                fontWeight: 500,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                whiteSpace: "nowrap",
              }}
            >
              Available for hire ✓
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".5rem",
          color: "#475569",
          fontSize: ".75rem",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #3b82f6, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}
