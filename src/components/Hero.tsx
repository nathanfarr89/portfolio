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
        className="h-36 w-36 rounded-full object-cover ring-2 ring-white/10 sm:h-44 sm:w-44"
      />
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          {profile.title}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hi, I&apos;m {profile.name.split(' ')[0]}.
        </h1>
        <p className="max-w-2xl text-balance text-slate-400">{profile.summary}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          Download resume
        </a>
      </div>
    </section>
  )
}
