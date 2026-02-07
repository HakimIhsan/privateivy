'use client'

export default function ServiceCard({ service, featured = false }) {
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
    <div className={`service-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="service-badge">Most Comprehensive</div>}
      <div className="service-header">
        <h3>{service.title}</h3>
        <p className="service-subtitle">{service.subtitle}</p>
        <div className="service-price">{service.price}</div>
      </div>
      <p className="service-description">{service.description}</p>
      {service.note && <p className="service-note">{service.note}</p>}
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </ul>
      {service.disclaimer && <p className="service-disclaimer">{service.disclaimer}</p>}
      <a 
        href="#contact" 
        className={`btn-service ${featured ? 'btn-primary' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          handleSmoothScroll('#contact')
        }}
      >
        {service.ctaText}
      </a>
    </div>
  )
}
