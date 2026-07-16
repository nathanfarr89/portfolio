import adamF from '../assets/adam-f.jpg'
import danielB from '../assets/daniel-b.jpg'
import emilyJ from '../assets/emily-j.jpg'
import jordanB from '../assets/jordan-b.jpg'
import joshH from '../assets/josh-h.jpg'
import mikeB from '../assets/mike-b.jpg'

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
    photo: joshH,
    linkedin: 'https://www.linkedin.com/in/joshua-higgins-7a56b8a4/',
  },
  {
    name: 'Adam F.',
    title: 'Senior Frontend Software Engineer',
    quote:
      "One of Nate's greatest strengths is his ability to identify potential roadblocks well before they impact the team — a thoughtful, dependable teammate who never passes up a chance to grow.",
    photo: adamF,
    linkedin: 'https://www.linkedin.com/in/adam-figgat',
  },
  {
    name: 'Emily J.',
    title: 'Senior Product Designer',
    quote:
      'Nate is the kind of frontend engineer every designer hopes to work with. He genuinely cares about the end-user experience and brings that same care to implementation.',
    photo: emilyJ,
    linkedin: 'https://www.linkedin.com/in/emilyjacobsson',
  },
  {
    name: 'Mike B.',
    title: 'Senior Software Engineer',
    quote:
      'Nate is business-minded, product-minded, and deeply technical — the kind of engineer every team wants. I would hire him if you have the opportunity.',
    photo: mikeB,
    linkedin: 'https://www.linkedin.com/in/mbordelon',
  },
  {
    name: 'Daniel B.',
    title: 'Brand, Content, and Customer Marketing',
    quote:
      'Whenever we confronted a new engineering challenge, Nate always responded the same way: "I bet I can figure it out." Sharekitt launched successfully and received accolades across the marketing industry — it wouldn\'t have ever existed without Nate.',
    photo: danielB,
    linkedin: 'https://www.linkedin.com/in/dblsr',
  },
  {
    name: 'Jordan B.',
    title: 'Graphic Designer',
    quote:
      "He's a strong developer who is so easy to work with and is willing to help solve tough problems. I'd happily work with him again!",
    photo: jordanB,
    linkedin: 'https://www.linkedin.com/in/jordan-blaser-4b329963',
  },
]
