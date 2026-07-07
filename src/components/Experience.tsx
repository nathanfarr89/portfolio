import { education, experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
        Experience
      </h2>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
        Where I&apos;ve worked
      </h3>

      <ol className="mt-10 space-y-10 border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-sky-400" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-lg font-semibold text-white">
                {job.role} · {job.company}
              </h4>
              <p className="text-sm text-slate-500">{job.dateRange}</p>
            </div>
            <p className="text-sm text-slate-500">{job.location}</p>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.03] p-5">
        <p className="text-sm font-semibold text-white">{education.degree}</p>
        <p className="mt-1 text-sm text-slate-500">
          {education.school} · {education.location}
        </p>
      </div>
    </section>
  )
}
