export default function Footer() {
  return (
    <footer className="border-t border-blue-500/10 py-10">
      <div className="container-custom flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl text-blue-500">K.Charuka</p>
          <p className="mt-1 text-xs text-slate-600">
            BSc (Hons) Computer Science
          </p>
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Kushan Charuka. Built with{" "}
          <span className="text-blue-500">React</span> +{" "}
          <span className="text-green-500">Node.js</span> +{" "}
          <span className="text-green-400">MongoDB</span>
        </p>
      </div>
    </footer>
  );
}
