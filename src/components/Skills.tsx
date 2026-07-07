import { skillGroups } from '../data/resume'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
        Skills
      </h2>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
        Core competencies
      </h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-5"
          >
            <p className="text-sm font-semibold text-white">{group.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
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
