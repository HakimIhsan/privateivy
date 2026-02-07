import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import Section from '@/components/Section'
import Hero from '@/components/Hero'
import SmoothLink from '@/components/SmoothLink'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      {/* Introduction Section */}
      <Section id="about" className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">The Architecture of Admission</h2>
              <p className="section-lead">Intelligence is merely the baseline.</p>
              <p className="section-text">At the apex of global education, decisions are shaped by intellectual identity, narrative sovereignty, and institutional alignment. Excellence is common; curated excellence is rare. Many capable candidates fail not because they lack qualification, but because their merit is not strategically positioned.</p>
              <p className="section-text highlight">TiyerOne is not an application service. It is a long-term partnership in cultivating institutional readiness.</p>
            </div>
            <div className="intro-image">
              <Image
                src="/img/hvd3.jpg"
                alt="Ivy League university campus"
                width={800}
                height={600}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">Investment Thesis</h2>
          <p className="section-lead">Outcomes are engineered, not hoped for.</p>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Intellectual Authority</h3>
              <p>Forging a unique academic identity that commands respect from the world's most selective admissions committees.</p>
            </div>
            <div className="philosophy-item">
              <h3>Global Credibility</h3>
              <p>Positioning candidates at the precise intersection of innovation and established tradition.</p>
            </div>
            <div className="philosophy-item">
              <h3>Network Compounding</h3>
              <p>Securing access to high-value circles that compound in utility over a lifetime.</p>
            </div>
            <div className="philosophy-item">
              <h3>Educational Legacy</h3>
              <p>Stewardship of intergenerational success through alignment with the world's most prestigious institutions.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Engagement Models</h2>
          <p className="section-lead">Exclusively for ultra-high-net-worth families and family offices.</p>
          
          <div className="services-grid">
            {/* Signature Advisory */}
            <div className="service-card">
              <div className="service-header">
                <h3>Signature Mentorship</h3>
                <p className="service-subtitle">Private Ivy League Strategy</p>
                <div className="service-price">USD 8,999</div>
              </div>
              <p className="service-description">A disciplined, high-precision strategy for candidates requiring distinguished positioning and narrative architecture.</p>
              <ul className="service-features">
                <li>Founder-led strategic advisory</li>
                <li>Ivy League–only program strategy (up to 3)</li>
                <li>Intellectual positioning & identity assessment</li>
                <li>Statement of Purpose architecture (unlimited drafts)</li>
                <li>Academic CV & portfolio positioning</li>
                <li>Interview preparation & decision-stage strategy</li>
              </ul>
              <SmoothLink href="#contact" className="btn-service btn-secondary">Inquire for Signature</SmoothLink>
            </div>

            {/* Executive Advisory */}
            <div className="service-card featured">
              <div className="service-badge">Total Stewardship</div>
              <div className="service-header">
                <h3>Executive Stewardship</h3>
                <p className="service-subtitle">White-Glove, High-Stakes Engagement</p>
                <div className="service-price">USD 15,999</div>
              </div>
              <p className="service-description">Our most immersive engagement. We treat admissions as a strategic family investment with full-spectrum accountability.</p>
              <p className="service-note">Includes Signature Mentorship, plus:</p>
              <ul className="service-features">
                <li>Weekly private 1-on-1 founder mentorship</li>
                <li>Multi-school strategy (up to 5 programs)</li>
                <li>Crisis management & waitlist intervention</li>
                <li>Full family consultation & decision alignment</li>
                <li><strong>Dedicated Visa Guidance:</strong> F-1 / J-1 strategy & mock interviews</li>
                <li><strong>Financial Stewardship:</strong> Scholarship & aid application support</li>
                <li><strong>Integration:</strong> Enrollment, retention, & graduation advisory</li>
              </ul>
              <p className="service-disclaimer">Strictly limited capacity per cycle to preserve discretion.</p>
              <SmoothLink href="#contact" className="btn-service btn-primary">Inquire for Executive</SmoothLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Scope Section */}
      <Section className="scope-section">
        <div className="container">
          <h2 className="section-title">The Stewardship Arc</h2>
          <div className="scope-visual">
            <div className="scope-timeline">
              <div className="scope-item">
                <div className="scope-number">01</div>
                <h3>Pre-Application</h3>
                <p>Identity assessment, research refinement, and strategic program selection.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">02</div>
                <h3>Architecture</h3>
                <p>Narrative development, CV positioning, and referee briefing strategy.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">03</div>
                <h3>Decision</h3>
                <p>Interview preparation, offer evaluation, and waitlist contingency strategy.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">04</div>
                <h3>Integration</h3>
                <p>Visa strategy, financial aid, and post-admission academic readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">The Partners</h2>
          <p className="section-lead">Guidance from alumni of the world's most prestigious institutions.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="Muhamad Yani"
                  width={400}
                  height={500}
                  className="team-image"
                />
              </div>
              <h3>Muhamad Yani</h3>
              <p className="team-education">Harvard University</p>
              <p className="team-focus">Intellectual identity formation, narrative positioning, and educational psychology.</p>
            </div>
            <div className="team-member">
              <div className="team-image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Hakim"
                  width={400}
                  height={500}
                  className="team-image"
                />
              </div>
              <h3>Hakim</h3>
              <p className="team-education">KAUST</p>
              <p className="team-focus">Research strategy, innovation framing, and interdisciplinary positioning.</p>
            </div>
            <div className="team-member">
              <div className="team-image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
                  alt="Adit"
                  width={400}
                  height={500}
                  className="team-image"
                />
              </div>
              <h3>Adit</h3>
              <p className="team-education">Johns Hopkins University</p>
              <p className="team-focus">Research rigor, technical CV architecture, and STEM admissions strategy.</p>
            </div>
            <div className="team-member">
              <div className="team-image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                  alt="Annisa Salsabila"
                  width={400}
                  height={500}
                  className="team-image"
                />
              </div>
              <h3>Annisa Salsabila</h3>
              <p className="team-education">Harvard Medical School</p>
              <p className="team-focus">Medical and life sciences admissions; clinical–research narrative framing.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Statement */}
      <Section className="philosophy-statement">
        <div className="container">
          <div className="philosophy-visual">
            <Image
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg"
              alt="Academic library"
              width={1000}
              height={800}
              className="philosophy-image"
            />
            <div className="philosophy-content">
              <h2 className="section-title">Our Philosophy</h2>
              <p className="philosophy-main">We Do Not Prepare Applications.<br />We Develop Ivy League–Level Candidates.</p>
              <div className="philosophy-principles">
                <p>Nothing is outsourced.</p>
                <p>Nothing is rushed.</p>
                <p>Nothing is generic.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="faq-section">
        <div className="container">
          <h2 className="section-title">Private Inquiries</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Will you write my essay or CV for me?</h3>
              <p>We do not write on behalf of applicants. Every word originates from you. Our role is to translate your experiences into a compelling narrative, refining structure and language to Ivy League standards while preserving your authentic voice.</p>
            </div>
            <div className="faq-item">
              <h3>Do you guarantee admission?</h3>
              <p>No service can guarantee admission—it remains solely at the discretion of the universities. We guarantee full-cycle, founder-led stewardship, positioning your application in the strongest possible way from strategy to graduation.</p>
            </div>
            <div className="faq-item">
              <h3>How does the pay-upon-admission model work?</h3>
              <p>Our model aligns with the investment-focused approach of our clients. Engagement begins with mentorship, but final payment is made only upon official admission, ensuring our incentives are perfectly aligned with your success.</p>
            </div>
            <div className="faq-item">
              <h3>Do you support students after admission?</h3>
              <p>Yes. We provide full-cycle stewardship including enrollment guidance, retention support, and graduation readiness. We ensure the student’s journey is managed meticulously from application to completion.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ethics Section */}
      <Section className="ethics-section">
        <div className="container">
          <h2 className="section-title">Ethics & Governance</h2>
          <div className="ethics-content">
            <div className="ethics-grid">
              <div className="ethics-item">We do not guarantee admission</div>
              <div className="ethics-item">We do not influence committees</div>
              <div className="ethics-item">All decisions remain with universities</div>
              <div className="ethics-item">Our role is strategic advisory</div>
            </div>
            <p className="ethics-statement">Integrity is non-negotiable.</p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Initiate Engagement</h2>
          <p className="section-lead">Membership is limited and by application.</p>
          <p className="section-text">We accept a limited number of candidates per cycle to ensure full commitment. Start your investment early; Ivy League outcomes are rarely decided at the deadline.</p>
          <ContactForm />
          <p className="confidentiality-note">This inquiry is confidential and intended solely for prospective clients and their representatives.</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-square">T</span>
              <span className="logo-text">TiyerOne</span>
            </div>
            <p className="footer-tagline">A Private Investment in Ivy League Admissions</p>
            <p className="footer-note">All engagements are confidential. Client identities, applications, and outcomes are protected with strict discretion.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
