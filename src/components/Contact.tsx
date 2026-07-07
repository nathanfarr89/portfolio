import { profile } from '../data/resume'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-14 text-center">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Contact
        </h2>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Let&apos;s work together
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
          I&apos;m always open to hearing about new opportunities. Reach out and
          I&apos;ll get back to you as soon as I can.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">{profile.location}</p>
      </div>
    </section>
  )
}
