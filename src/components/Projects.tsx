import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
        Selected work
      </h2>

      {projects.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-ink/15 bg-surface/30 p-10 text-center">
          <p className="text-sm text-ink-muted">
            Projects are on the way — check back soon, or take a look at my{' '}
            <a
              href="https://www.linkedin.com/in/nathan-farr/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent hover:text-accent-dark"
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
              className="rounded-xl border border-ink/8 bg-surface/60 p-5 transition-colors hover:border-ink/20"
            >
              <p className="text-sm font-semibold text-ink">{project.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/12 px-3 py-1 text-xs text-ink-muted"
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
