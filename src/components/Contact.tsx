import { profile } from '../data/resume'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-ink/8 bg-surface/60 px-8 py-14 text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted">
          I&apos;m always open to hearing about new opportunities. Reach out and
          I&apos;ll get back to you as soon as I can.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ink/5"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-ink-faint">{profile.location}</p>
      </div>
    </section>
  )
}
