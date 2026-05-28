import { booking } from '../content'

export default function Book() {
  return (
    <section
      id="book"
      className="scroll-mt-20 border-t border-black/5 bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
          {booking.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/70">
          {booking.intro}
        </p>

        <div
          className="mt-10 overflow-hidden rounded-xl border-2 border-dashed border-black/15 bg-lavender/40"
          role="region"
          aria-label="Calendly scheduling widget placeholder"
        >
          <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-8">
            <div className="rounded-lg bg-white px-6 py-3 shadow-sm">
              <span className="text-sm font-medium text-black/50">
                Calendly embed
              </span>
            </div>
            <p className="max-w-md text-sm text-black/50">
              Replace this placeholder with your Calendly iframe when ready.
            </p>
            <div className="mt-2 h-48 w-full max-w-lg rounded-lg bg-white/80 shadow-inner" />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-black/70">
          {booking.postBooking}
        </p>
      </div>
    </section>
  )
}
