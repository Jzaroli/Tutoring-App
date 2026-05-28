import { services } from '../content'
import ServiceIcon from './ServiceIcon'

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Tutoring Services - HS and College
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Support designed around your goals: whether you need a single
            session or ongoing guidance through the semester.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className={`flex gap-5 rounded-xl border border-black/5 p-6 ${service.accent}`}
            >
              <ServiceIcon shape={service.icon} />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-2 text-black/70 pre-line" style={{ whiteSpace: 'pre-line' }}>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
