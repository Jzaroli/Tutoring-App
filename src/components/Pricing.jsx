import { pricingTiers } from '../content'
import { scrollToSection } from '../utils/scroll'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-tan px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-black/70">
            Choose the plan that fits your schedule. 
            <br />Each option includes personalized instruction and session follow-ups. 
            <br />Discounts are available for foreign-born and foster-care high schoolers. 
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <li
              key={tier.name}
              className={`flex flex-col rounded-xl border bg-white p-8 text-left ${
                tier.highlighted
                  ? 'border-black/20 shadow-lg ring-2 ring-black/10'
                  : 'border-black/10'
              }`}
            >
              <h3 className="text-xl font-semibold text-black">{tier.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-semibold text-black">
                  {tier.price}
                </span>
                <span className="ml-2 text-black/60">{tier.period}</span>
              </p>
              <p className="mt-4 text-black/70">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-black/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  if (tier.name == 'Introductory Chat') {
                    window.open('https://calendly.com/tutoring-rnjl/introductory-chat-15min', '_blank', 'noopener,noreferrer');
                  } else if (tier.name == 'Single Session') {
                    window.open('https://calendly.com/tutoring-rnjl/tutoring-session-60min', '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = 'mailto:tutoring@rnjl.io'
                  }
                }}
                className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-colors bg-black/75 text-white hover:bg-black/85`}
                  // ${
                  // tier.highlighted
                  //   ? 'bg-black text-white hover:bg-black/85'
                  //   : 'border border-black/15 bg-white text-black hover:bg-black/5'
                  // }
              >
                {tier.name == 'Package Bundle' ? 'Contact' : 'Book Now'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
