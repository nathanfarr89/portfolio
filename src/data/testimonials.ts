import adamFiggat from '../assets/adam-figgat.jpg'
import emilyJacobsson from '../assets/emily-jacobsson.jpg'
import joshHiggins from '../assets/josh-higgins.jpg'
import mikeBordelon from '../assets/mike-bordelon.jpg'

export type Testimonial = {
  name: string
  title: string
  quote: string
  photo: string
  linkedin: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Joshua H.',
    title: 'Software Engineer',
    quote:
      'An exceptional engineer with a sharp eye for detail and strong technical skills — his contributions were instrumental in delivering our Insights and Analytics Portal successfully.',
    photo: joshHiggins,
    linkedin: 'https://www.linkedin.com/in/joshua-higgins-7a56b8a4/',
  },
  {
    name: 'Adam F.',
    title: 'Senior Frontend Software Engineer',
    quote:
      "One of Nate's greatest strengths is his ability to identify potential roadblocks well before they impact the team — a thoughtful, dependable teammate who never passes up a chance to grow.",
    photo: adamFiggat,
    linkedin: 'https://www.linkedin.com/in/adam-figgat',
  },
  {
    name: 'Emily J.',
    title: 'Senior Product Designer',
    quote:
      'Nate is the kind of frontend engineer every designer hopes to work with. He genuinely cares about the end-user experience and brings that same care to implementation.',
    photo: emilyJacobsson,
    linkedin: 'https://www.linkedin.com/in/emilyjacobsson',
  },
  {
    name: 'Mike B.',
    title: 'Senior Software Engineer',
    quote:
      'Nate is business-minded, product-minded, and deeply technical — the kind of engineer every team wants. I would hire him if you have the opportunity.',
    photo: mikeBordelon,
    linkedin: 'https://www.linkedin.com/in/mbordelon',
  },
]
