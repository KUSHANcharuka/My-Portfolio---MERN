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
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute right-[10%] top-[15%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[20%] left-[5%] h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom flex flex-wrap items-center gap-12 pb-16 pt-28">
        <div className="min-w-[340px] flex-1 animate-fade-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[2px] text-blue-500">
            Welcome to my portfolio
          </p>
          <h1 className="mb-4 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-tight">
            Hi, I'm <span className="block text-blue-500">Kushan Charuka</span>
          </h1>
          <div className="mb-6 h-9 text-xl text-slate-400 md:text-2xl">
            I'm a{" "}
            <span
              ref={typedRef}
              className="border-r-2 border-cyan-500 pr-0.5 font-medium text-cyan-500"
            />
          </div>
          <p className="mb-10 max-w-xl leading-loose text-slate-400">
            A passionate Computer Science undergraduate crafting elegant digital
            experiences. I love turning complex problems into simple, beautiful
            solutions.
          </p>
          <div className="flex flex-wrap items-center gap-4">
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

          <div className="mt-10 flex gap-4">
            <a
              href="https://www.linkedin.com/in/kushan-charuka-a99b5929b/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 text-slate-400 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500"
            >
              <DotLottieReact
                src="https://lottie.host/3d763acd-2235-43e9-a0f0-a4c04048e71f/ZOW8U2F5n5.lottie"
                loop
                autoplay
              />
            </a>

            <a
              href="https://github.com/KUSHANcharuka"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 text-slate-400 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500"
            >
              <DotLottieReact
                src="https://lottie.host/ccdcd579-e999-486e-acf5-f55cf560b6ab/TfXsRAuQ15.lottie"
                loop
                autoplay
              />
            </a>
          </div>
        </div>

        <div className="flex flex-none justify-center animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-2 animate-spin-slow rounded-full border-2 border-blue-600/30" />

            <div className="h-[260px] w-[260px] overflow-hidden rounded-full border-4 border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-cyan-500/10">
              <img
                src="/img/myphoto.png"
                alt="Portrait of Kushan Charuka"
                className="m-auto h-[300px] w-[300px] object-cover"
              />
            </div>

            <div className="absolute -right-3 bottom-2 whitespace-nowrap rounded-xl border border-white/10 bg-blue-600/90 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
              Available for hire ✓
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-600">
        <span>Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
