'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.nav-container')) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close menu on navigation
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none' }}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-square">T</span>
          <span className="logo-text">TiyerOne</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
          <li><a href="#team" onClick={(e) => handleSmoothScroll(e, '#team')}>Team</a></li>
          <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a></li>
          <li><a href="#contact" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#contact')}>Consultation</a></li>
        </ul>
      </div>
    </nav>
  )
}
