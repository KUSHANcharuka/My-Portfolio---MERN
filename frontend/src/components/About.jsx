const stats = [
  { value: "3+", label: "Years Learning" },
  { value: "5+", label: "Projects Built" },
  { value: "BSc", label: "Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-custom">
        <div className="flex flex-wrap items-center gap-16">
          <div className="shrink-0">
            <div className="relative w-[300px]">
              <div className="absolute bottom-[-16px] left-4 right-[-16px] top-4 rounded-[20px] border-2 border-blue-500/25" />
              <div className="relative flex h-[360px] w-[300px] items-center justify-center overflow-hidden rounded-[20px] border border-blue-500/20 bg-gradient-to-br from-blue-600/15 to-cyan-500/10">
                <div className="absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-blue-500" />
                <img
                  src="/img/myphotoo.png"
                  alt="Portrait of Kushan Charuka"
                  className="m-auto h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-cyan-500" />
              </div>
            </div>
          </div>

          <div className="min-w-[320px] flex-1">
            <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-blue-500">
              About Me
            </p>
            <h2 className="section-title">
              Crafting Code with <span className="text-blue-500">Passion</span>
            </h2>
            <p className="mb-6 leading-loose text-slate-400">
              I'm a third-year BSc (Hons) Computer Science undergraduate, driven
              by curiosity and a love for building things that live on the
              internet. I thrive at the intersection of design and technology.
            </p>
            <p className="mb-10 leading-loose text-slate-400">
              My stack spans the full MERN ecosystem — React on the frontend,
              Node.js + Express on the backend, and MongoDB for data
              persistence. I also bring UI/UX sensibilities from tools like
              Figma and Tailwind CSS.
            </p>

            <div className="mb-10 flex flex-wrap gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-blue-500/20 bg-slate-900/70 px-6 py-4 text-center"
                >
                  <div className="font-display text-3xl text-blue-500">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
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
