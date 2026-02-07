'use client'

export default function SmoothLink({ href, children, className = '' }) {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
