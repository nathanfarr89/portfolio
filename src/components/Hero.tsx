import headshot from '../assets/headshot.jpg'
import { profile } from '../data/resume'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pt-20 pb-24 text-center sm:pt-28"
    >
      <img
        src={headshot}
        alt={profile.name}
        className="h-36 w-36 rounded-full object-cover ring-4 ring-surface sm:h-44 sm:w-44 motion-safe:animate-[fade-in_0.7s_ease-out]"
      />
      <div className="flex flex-col items-center gap-5 motion-safe:animate-[rise-in_0.8s_ease-out_0.1s_both]">
        <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-ink">
          Hi, I&apos;m {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </h1>
        <p className="text-lg font-medium text-accent">{profile.title}</p>
        <p className="max-w-2xl text-balance text-ink-muted">{profile.summary}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 motion-safe:animate-[rise-in_0.8s_ease-out_0.2s_both]">
        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ink/5"
        >
          Download resume
        </a>
      </div>
    </section>
  )
}
