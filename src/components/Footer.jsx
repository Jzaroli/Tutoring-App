import { footer } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-black/5 bg-white px-6 py-8">
      <p className="text-center text-sm text-black/60">
        © {year} {footer.companyName}. All rights reserved.
      </p>
    </footer>
  )
}
