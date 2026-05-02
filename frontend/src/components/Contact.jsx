import { useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const API_BASE = process.env.REACT_APP_API_URL;

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle for loading | success | error
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

  const inputClass =
    "w-full rounded-[10px] border border-blue-500/20 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none transition focus:border-blue-500";

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-blue-500">
            Get In Touch
          </p>
          <h2 className="section-title">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="mb-0 section-subtitle">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-display">
              Ready to collaborate?
            </h3>
            <p className="mb-8 leading-loose text-slate-400">
              Whether you have a project idea, want to discuss opportunities, or
              just want to say hello, my inbox is always open.
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
                secondIcon: (
                  <DotLottieReact
                    src="https://lottie.host/fd51aacd-05af-4988-843d-b024e1720a56/ODJIfKB3P7.lottie"
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
                    style={{ width: 64, height: 40 }}
                  />
                ),
                secondIcon: (
                  <DotLottieReact
                    src="https://lottie.host/fd51aacd-05af-4988-843d-b024e1720a56/ODJIfKB3P7.lottie"
                    loop
                    autoplay
                    style={{ width: 64, height: 40 }}
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
                className="flex items-center gap-4 p-4 mb-4 no-underline transition border rounded-xl border-blue-500/20 bg-slate-900/70 text-slate-400 hover:border-blue-500 hover:text-slate-50"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {item.secondIcon && (
                  <span className="text-xl">{item.secondIcon}</span>
                )}
              </a>
            ))}
          </div>

          <div className="p-8 card">
            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mb-4 text-5xl">
                  <DotLottieReact
                    src="https://lottie.host/8aa22207-da65-4688-9176-7466f86e06fa/7XuQrnQ20o.lottie"
                    loop
                    autoplay
                  />
                </div>
                <h3 className="mb-2 text-xl">Message Sent!</h3>
                <p className="mb-6 text-slate-400">
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
                <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
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
                      className={inputClass}
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
                  className={`${inputClass} mb-4`}
                />
                <input
                  name="mobile"
                  value={form.mobile}
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  className={`${inputClass} mb-4`}
                />
                <textarea
                  name="message"
                  value={form.message}
                  placeholder="Your message..."
                  required
                  rows={5}
                  onChange={handleChange}
                  className={`${inputClass} mb-6 resize-y`}
                />

                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full mt-1 btn btn-primary min-h-12"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
