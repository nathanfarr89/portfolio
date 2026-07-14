import { education, experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
        Where I&apos;ve worked
      </h2>

      <ol className="mt-10 space-y-10 border-l border-ink/12 pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-ink-faint">{job.dateRange}</p>
            </div>
            <p className="text-sm text-ink-faint">{job.location}</p>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl border border-ink/8 bg-surface/60 p-5">
        <p className="text-sm font-semibold text-ink">{education.degree}</p>
        <p className="mt-1 text-sm text-ink-faint">
          {education.school} · {education.location}
        </p>
      </div>
    </section>
  )
}
