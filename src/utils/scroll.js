const HEADER_OFFSET = 80

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

  window.scrollTo({ top, behavior: 'smooth' })
}
