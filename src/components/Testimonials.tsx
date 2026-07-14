import { useState } from 'react'
import { testimonials } from '../data/testimonials'

function useCarouselIndices(length: number, active: number) {
  const left = (active - 1 + length) % length
  const right = (active + 1) % length
  return { left, right }
}

export function Testimonials() {
  const [active, setActive] = useState(0)
  const { left, right } = useCarouselIndices(testimonials.length, active)

  const showSides = testimonials.length > 1

  function goTo(index: number) {
    setActive(((index % testimonials.length) + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-ink">
        What people say
      </h2>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous testimonial"
          className="hidden shrink-0 rounded-full border border-ink/12 p-2 text-ink-muted transition-colors hover:border-ink/30 hover:text-ink sm:block"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
          {showSides && (
            <TestimonialCard
              key={`side-left-${left}`}
              testimonial={testimonials[left]}
              variant="side"
              onClick={() => goTo(left)}
              className="hidden sm:block"
            />
          )}
          <TestimonialCard
            key={`center-${active}`}
            testimonial={testimonials[active]}
            variant="center"
          />
          {showSides && (
            <TestimonialCard
              key={`side-right-${right}`}
              testimonial={testimonials[right]}
              variant="side"
              onClick={() => goTo(right)}
              className="hidden sm:block"
            />
          )}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next testimonial"
          className="hidden shrink-0 rounded-full border border-ink/12 p-2 text-ink-muted transition-colors hover:border-ink/30 hover:text-ink sm:block"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous testimonial"
          className="rounded-full border border-ink/12 p-2 text-ink-muted transition-colors hover:border-ink/30 hover:text-ink"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next testimonial"
          className="rounded-full border border-ink/12 p-2 text-ink-muted transition-colors hover:border-ink/30 hover:text-ink"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-6 bg-accent' : 'w-1.5 bg-ink/15 hover:bg-ink/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

type TestimonialCardProps = {
  testimonial: (typeof testimonials)[number]
  variant: 'center' | 'side'
  onClick?: () => void
  className?: string
}

function TestimonialCard({ testimonial, variant, onClick, className = '' }: TestimonialCardProps) {
  const isCenter = variant === 'center'

  return (
    <div
      onClick={onClick}
      className={`flex shrink-0 flex-col items-center rounded-2xl border text-center transition-all duration-300 ${
        isCenter
          ? 'w-full max-w-sm border-ink/10 bg-surface/70 p-8 sm:scale-105'
          : 'w-48 scale-90 cursor-pointer border-ink/6 bg-surface/30 p-6 opacity-60 hover:opacity-90'
      } ${className}`}
    >
      <a
        href={testimonial.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${testimonial.name} on LinkedIn`}
      >
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className={`rounded-full object-cover ring-2 ring-paper transition-colors hover:ring-accent/50 ${
            isCenter ? 'h-20 w-20' : 'h-14 w-14'
          }`}
        />
      </a>
      <p
        className={`mt-4 text-ink-muted ${
          isCenter ? 'text-sm leading-relaxed' : 'line-clamp-3 text-xs leading-relaxed'
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <a
        href={testimonial.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`mt-4 font-semibold text-ink hover:text-accent hover:underline ${
          isCenter ? 'text-sm' : 'text-xs'
        }`}
      >
        {testimonial.name}
      </a>
      <p className={`text-ink-faint ${isCenter ? 'text-xs' : 'text-[11px]'}`}>
        {testimonial.title}
      </p>
    </div>
  )
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}
