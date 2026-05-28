import { bio } from '../content'
import profile from '../assets/profile.png'

export default function Bio() {
  return (
    <section
      id="bio"
      className="scroll-mt-20 border-t border-black/5 bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div
          className="flex aspect-square max-h-96 w-full items-center justify-center rounded-xl bg-tan text-black/40 md:max-h-none"
          role="img"
          aria-label="Professional headshot placeholder"
        >
          <span className="text-sm font-medium tracking-wide uppercase">
            <img className="rounded-lg" src={profile} alt="Profile" />
          </span>
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            {bio.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
            {bio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
