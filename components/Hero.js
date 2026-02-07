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
        <h1 className="hero-title animate-fade-in-up">Strategic Stewardship for<br /><em>Ivy League Admissions</em></h1>
        <p className="hero-subtitle animate-fade-in-up delay-100">Architecting the path to the world's most prestigious institutions.</p>
        <p className="hero-description animate-fade-in-up delay-200">We cultivate Ivy League–caliber candidates through rigorous, long-term stewardship. For families who understand that exceptional outcomes are rarely accidental—they are the result of strategic precision.</p>
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
            Explore Engagement
          </a>
        </div>
      </div>
    </section>
  )
}
