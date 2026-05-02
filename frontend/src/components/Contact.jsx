import { useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const API_BASE = (
  process.env.REACT_APP_API_URL ||
  "https://my-portfolio-mern-back.vercel.app/api"
).replace(/\/+$/, "");

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      console.log("Submitting form to:", `${API_BASE}/contact`);
      console.log("Form data:", form);
      await axios.post(`${API_BASE}/contact`, form);
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      console.error("Error response:", err.response);
      setStatus("error");
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  const inputStyle = {
    width: "100%",
    padding: ".85rem 1.1rem",
    background: "rgba(17,24,39,0.7)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: 10,
    color: "#f8fafc",
    fontSize: ".9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color .2s",
  };

  const inputFocus = (e) => (e.target.style.borderColor = "#3b82f6");
  const inputBlur = (e) =>
    (e.target.style.borderColor = "rgba(59,130,246,0.2)");

  return (
    <section
      id="contact"
      style={{ padding: "6rem 0", background: "rgba(17,24,39,0.3)" }}
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
            Get In Touch
          </p>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Have a project in mind? Let's talk.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Info */}
          <div>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Ready to collaborate?
            </h3>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              Whether you have a project idea, want to discuss opportunities, or
              just want to say hello, My inbox is always open.
            </p>
            {[
              {
                icon: (
                  <DotLottieReact
                    src="https://lottie.host/a6f5b52d-6295-47e0-9969-c59320e49db2/N3IdWmfDJk.lottie"
                    loop
                    autoplay
                    style={{ width: 64, height: 40 }}
                  />
                ),
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/kushan-charuka-a99b5929b/",
              },
              {
                icon: (
                  <DotLottieReact
                    src="https://lottie.host/dae891a6-d3e3-4256-8f3b-869ddaf475b2/hPuqdRiHd3.lottie"
                    loop
                    autoplay
                    style={{ width: 64, height: 32 }}
                  />
                ),
                label: "GitHub",
                href: "https://github.com/KUSHANcharuka",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  marginBottom: "1rem",
                  background: "rgba(17,24,39,0.7)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  borderRadius: 12,
                  color: "#94a3b8",
                  transition: "all .3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.color = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                <span style={{ fontSize: ".9rem", fontWeight: 500 }}>
                  {item.label}
                </span>
                <span style={{ marginLeft: "auto", color: "#3b82f6" }}>→</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "2rem" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  <DotLottieReact
                    src="https://lottie.host/8aa22207-da65-4688-9176-7466f86e06fa/7XuQrnQ20o.lottie"
                    loop
                    autoplay
                  />
                </div>
                <h3 style={{ marginBottom: ".5rem" }}>Message Sent!</h3>
                <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
                  I'll get back to you soon.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setStatus("idle")}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  className="contact-name-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {["firstName", "lastName"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      value={form[field]}
                      placeholder={
                        field === "firstName" ? "First Name" : "Last Name"
                      }
                      required
                      onChange={handleChange}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                      style={inputStyle}
                    />
                  ))}
                </div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  style={{ ...inputStyle, marginBottom: "1rem" }}
                />
                <input
                  name="mobile"
                  value={form.mobile}
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  style={{ ...inputStyle, marginBottom: "1rem" }}
                />
                <textarea
                  name="message"
                  value={form.message}
                  placeholder="Your message..."
                  required
                  rows={5}
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    marginBottom: "1.5rem",
                  }}
                />

                {error && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: ".85rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    minHeight: "48px",
                    marginTop: "0.25rem",
                  }}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
