export const profile = {
  name: 'Nate Farr',
  title: 'Senior Software Engineer',
  location: 'Salt Lake City, UT',
  email: 'nathan.farr89@gmail.com',
  phone: '801-623-7292',
  linkedin: 'https://www.linkedin.com/in/nathan-farr/',
  resumeUrl: '/nathan-farr-resume.pdf',
  summary:
    "Frontend-focused Senior Software Engineer with 10+ years of experience designing, building, and modernizing large-scale web applications across fintech, advertising, and enterprise platforms. Specialized in React and frontend architecture, with a strong track record of leading complex migrations — including upgrades from React 18 to React 19 and modernization of legacy Angular systems — while improving performance, maintainability, and developer productivity.",
}

export const accomplishments = [
  'Spearheaded a complex React 18 to 19 upgrade, modernizing the codebase and coordinating cross-repository efforts, achieving a 100% seamless production rollout and enhanced application performance.',
  'Owned end-to-end frontend development for a redesigned cross-sell experience, delivering a 42% increase in conversion rate through improved UX flow, performance optimization, and UI refinement.',
  "Modernized front-end by migrating core Angular components to React, delivering a more consistent user experience aligned with the company's design system.",
  'Developed a reusable React hook, enabling experiments in a critical app section and expanding testing capabilities by 100%.',
  'Reduced code errors by implementing end-to-end tests, significantly improving user experience and code reliability.',
]

export const skillGroups = [
  {
    label: 'Languages & Frameworks',
    skills: ['React (18/19)', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Architecture & Practices',
    skills: [
      'Frontend Architecture',
      'Design Systems',
      'Component-Based Architecture',
      'State Management',
      'Performance Optimization',
      'Code Refactoring',
      'Legacy System Modernization',
    ],
  },
  {
    label: 'Tooling & Workflow',
    skills: [
      'Playwright',
      'End-to-End Testing',
      'CI/CD Integration',
      'GitHub',
      'Agile Development',
      'Code Reviews',
      'Technical Mentoring',
      'Figma-to-Code Workflow',
      'AI-Assisted Development (Cursor, GitHub Copilot)',
    ],
  },
]

export type ExperienceEntry = {
  company: string
  location: string
  role: string
  dateRange: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'BILL',
    location: 'Draper, UT',
    role: 'Software Engineer, Senior',
    dateRange: 'September 2024 – Present',
    bullets: [
      'Led a full repository-wide migration from React 18 to React 19 across multiple frontend applications, identifying and resolving breaking changes, coordinating rollout strategy, and ensuring system stability with zero major production disruption.',
      'Converted legacy Angular components into modern React architecture, significantly reducing technical debt and improving consistency, maintainability, and developer velocity across the frontend ecosystem.',
      'Designed and built a reusable bank account onboarding component integrated with the Plaid API, enabling rapid reuse across multiple product flows and reducing duplicated implementation effort.',
      'Introduced Playwright-based end-to-end testing into previously untested workflows, improving release confidence, reducing regression defects, and strengthening CI/CD quality gates.',
      'Implemented AI-assisted development workflows using Cursor and GitHub Copilot, including repository-level coding standards and Figma MCP integration to streamline design-to-code execution and accelerate frontend delivery.',
    ],
  },
  {
    company: 'BILL',
    location: 'Draper, UT',
    role: 'Software Engineer II',
    dateRange: 'January 2022 – September 2024',
    bullets: [
      'Collaborated closely with product and design teams to translate Figma designs into responsive, accessible, and production-ready user interfaces with consistent UX across platforms.',
      'Mentored junior engineers through structured code reviews, architectural guidance, debugging support, and best-practice coaching for modern frontend development.',
      'Participated in frontend architecture decisions, enforced coding standards, and improved maintainability and implementation quality.',
      'Contributed to ongoing UI improvements and feature development within an agile environment, supporting iterative delivery and continuous product enhancement.',
    ],
  },
  {
    company: 'Rakuten Advertising',
    location: 'Midvale, UT',
    role: 'Software Engineer',
    dateRange: 'April 2018 – January 2022',
    bullets: [
      'Developed reusable UI components and contributed to the evolution of a shared design system adopted across multiple internal applications, improving UI consistency and development efficiency.',
      'Partnered with designers and product managers to translate business requirements into scalable frontend implementations, ensuring alignment between design intent and technical execution.',
      'Delivered frontend features and enhancements in an agile environment, supporting iterative product releases and improving user-facing functionality across advertising platforms.',
    ],
  },
  {
    company: 'Rakuten Advertising',
    location: 'Midvale, UT',
    role: 'Software Developer',
    dateRange: 'June 2015 – April 2018',
    bullets: [
      'Built and maintained responsive web application features using JavaScript, HTML, and CSS within an agile development workflow.',
      'Collaborated to implement UI enhancements, resolve defects, and deliver features with a focus on usability and reliability.',
    ],
  },
]

export const education = {
  degree: "Bachelor's Degree in Information Systems",
  school: 'University of Utah',
  location: 'Salt Lake City, UT',
}
