export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

// Add projects here as they're ready — the Projects section renders
// a "coming soon" placeholder automatically while this stays empty.
export const projects: Project[] = [
  {
    title: 'React 18 → 19 Migration Guide',
    description:
      'Five breaking changes from a real production migration, each backed by a runnable before/after example and pinned to real compiler output — the repo fails typecheck if React’s types ever stop reproducing the error.',
    tags: ['React 19', 'TypeScript', 'Migration'],
    href: 'https://github.com/nathanfarr89/react-18-to-19-migration-guide',
  },
]
