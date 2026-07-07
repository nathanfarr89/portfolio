import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
        Projects
      </h2>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
        Selected work
      </h3>

      {projects.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-sm text-slate-400">
            Projects are on the way — check back soon, or take a look at my{' '}
            <a
              href="https://www.linkedin.com/in/nathan-farr/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-400 hover:text-sky-300"
            >
              LinkedIn
            </a>{' '}
            in the meantime.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:border-white/15"
            >
              <p className="text-sm font-semibold text-white">{project.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
