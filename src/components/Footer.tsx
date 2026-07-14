import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-ink/8 px-6 py-8 text-center text-xs text-ink-faint">
      &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
    </footer>
  )
}
