import { skillGroups } from '../data/resume'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
        What I reach for
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-ink/8 bg-surface/60 p-5"
          >
            <p className="text-sm font-semibold text-ink">{group.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink/12 px-3 py-1 text-xs text-ink-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
