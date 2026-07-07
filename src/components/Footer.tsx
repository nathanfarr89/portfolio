import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-slate-600">
      &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
    </footer>
  )
}
