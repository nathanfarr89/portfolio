import { accomplishments } from '../data/resume'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
        What I bring
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {accomplishments.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-ink/8 bg-surface/60 p-5 text-sm leading-relaxed text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
