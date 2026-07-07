import { accomplishments } from '../data/resume'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
        About
      </h2>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
        Highlights
      </h3>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {accomplishments.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-5 text-sm leading-relaxed text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
