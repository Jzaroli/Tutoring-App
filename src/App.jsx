import Header from './components/Header'
import Services from './components/Services'
import Bio from './components/Bio'
import Pricing from './components/Pricing'
import Book from './components/Book'
import Footer from './components/Footer'
import { site } from './content'

function Hero() {
  return (
    <section className="border-b border-black/5 bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center md:text-left">
        {/* <p className="text-sm font-medium tracking-wide text-black/50 uppercase">
          Welcome
        </p> */}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-black/70">{site.tagline}<br/> <span className="text-base text-black/60">Contact: tutoring@rnjl.io</span></p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Bio />
        <Pricing />
        {/* <Book /> */}
      </main>
      <Footer />
    </div>
  )
}
