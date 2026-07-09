import adamFiggat from '../assets/adam-figgat.jpg'
import emilyJacobsson from '../assets/emily-jacobsson.jpg'
import joshHiggins from '../assets/josh-higgins.jpg'

export type Testimonial = {
  name: string
  title: string
  quote: string
  photo: string
  linkedin: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Joshua Higgins',
    title: 'Software Engineer',
    quote:
      'An exceptional engineer with a sharp eye for detail and strong technical skills — his contributions were instrumental in delivering our Insights and Analytics Portal successfully.',
    photo: joshHiggins,
    linkedin: 'https://www.linkedin.com/in/joshua-higgins-7a56b8a4/',
  },
  {
    name: 'Adam Figgat',
    title: 'Senior Frontend Software Engineer',
    quote:
      "One of Nate's greatest strengths is his ability to identify potential roadblocks well before they impact the team — a thoughtful, dependable teammate who never passes up a chance to grow.",
    photo: adamFiggat,
    linkedin: 'https://www.linkedin.com/in/adam-figgat',
  },
  {
    name: 'Emily Jacobsson',
    title: 'Senior Product Designer',
    quote:
      'Nate is the kind of frontend engineer every designer hopes to work with. He genuinely cares about the end-user experience and brings that same care to implementation.',
    photo: emilyJacobsson,
    linkedin: 'https://www.linkedin.com/in/emilyjacobsson',
  },
]
