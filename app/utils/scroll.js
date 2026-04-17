export function scrollToSection(e, id, onComplete) {
  e.preventDefault()
  const target = document.querySelector(id)
  if (target) {
    const header = document.querySelector('.header')
    const headerHeight = header ? header.offsetHeight : 0
    const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top: targetPos, behavior: 'smooth' })
  }
  if (onComplete) onComplete()
}
