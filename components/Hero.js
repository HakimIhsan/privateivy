'use client'

export default function Hero() {
  const handleSmoothScroll = (targetId) => {
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-up">Curated for Families Who Value<br /><em>Educational Excellence</em></h1>
        <p className="hero-subtitle animate-fade-in-up delay-100">Strategic education advisory for Ivy League and top-tier global universities.</p>
        <p className="hero-description animate-fade-in-up delay-200">We don’t simply guide applications. We develop candidates—intellectually, strategically, and psychologically—and steward the entire journey from early positioning through admission, enrollment, and graduation readiness.</p>
        <div className="hero-cta animate-fade-in-up delay-300">
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              handleSmoothScroll('#contact')
            }}
          >
            Request Consultation
          </a>
          <a 
            href="#services" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault()
              handleSmoothScroll('#services')
            }}
          >
            Explore Advisory
          </a>
        </div>
      </div>
    </section>
  )
}
