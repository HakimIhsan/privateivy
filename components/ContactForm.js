'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend API
    // For now, we'll just show an alert
    alert('Thank you for your interest. Our team will contact you shortly to schedule a consultation.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      service: '',
      message: ''
    })
    
    // In a real implementation, you would:
    // 1. Send data to your backend API
    // 2. Show a success message
    // 3. Optionally redirect or show a confirmation page
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="program">Target Program</label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">Select a program</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="professional">Professional Degree</option>
            <option value="executive">Executive Education</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Tier Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service tier</option>
            <option value="signature">Signature Advisory (USD 8,999)</option>
            <option value="executive">Executive Advisory (USD 15,999)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Tell us about your candidate</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Brief overview of academic background, research interests, and goals..."
          />
        </div>
        <button type="submit" className="btn-primary btn-submit">Request Consultation</button>
      </form>
    </div>
  )
}
