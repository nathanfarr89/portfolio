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
    title: 'Sharekitt',
    description:
      'An employee/brand advocacy platform: marketing teams spin up campaigns and supporters grab ready-to-post assets — captions, images, and trackable short links — to share on their own channels. Built full-stack as a three-person side project that shipped and earned recognition in the marketing industry. This is a portfolio demo of the original product.',
    tags: ['Full-Stack', 'React', 'Startup'],
    href: 'https://sharekitt-demo.vercel.app/',
  },
  {
    title: 'React 18 → 19 Migration Guide',
    description:
      'Five breaking changes from a real production migration, each backed by a runnable before/after example and pinned to real compiler output — the repo fails typecheck if React’s types ever stop reproducing the error.',
    tags: ['React 19', 'TypeScript', 'Migration'],
    href: 'https://github.com/nathanfarr89/react-18-to-19-migration-guide',
  },
  {
    title: 'Accessible React Components',
    description:
      'Dialog, Combobox, and Tabs built to the WAI-ARIA APG pattern for each widget, covered by a Playwright suite that drives every interaction with a real keyboard rather than asserting on markup alone.',
    tags: ['React', 'Accessibility', 'Playwright', 'Storybook'],
    href: 'https://github.com/nathanfarr89/accessible-components',
  },
  {
    title: 'Crypto Dashboard',
    description:
      'A live trading dashboard streaming real-time BTC/USD price data, an order book, and a trade tape.',
    tags: ['React', 'WebSockets', 'Data Viz'],
    href: 'https://crypto-dashboard-one-self.vercel.app/',
  },
  {
    title: 'RAG Chat',
    description:
      'Upload documents and ask questions grounded in retrieved excerpts — runs as a static site with in-browser embeddings (transformers.js/WASM) and PDF.js parsing, calling the Claude API for generation.',
    tags: ['React', 'TypeScript', 'RAG', 'Claude API'],
    href: 'https://nathanfarr89.github.io/ai-rag-chat/',
  },
]
