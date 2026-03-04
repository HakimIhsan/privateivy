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
              <h2 className="section-title">What TiyerOne Does</h2>
              <p className="section-lead">Strategic education advisory for candidates targeting Ivy League and top-tier global universities.</p>
              <p className="section-text">We don’t simply guide applications. We develop candidates—intellectually, strategically, and psychologically—and steward the entire journey from early positioning through admission, enrollment, and graduation readiness.</p>
              <p className="section-text highlight">The result is not a manufactured profile, but a stronger, clearer version of the candidate’s real academic identity.</p>
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
          <h2 className="section-title">Why We Frame This as an Investment</h2>
          <p className="section-lead">Outcomes at this level compound over time.</p>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Career Trajectory</h3>
              <p>Elite education shapes long-term professional direction and opportunity.</p>
            </div>
            <div className="philosophy-item">
              <h3>Network Access</h3>
              <p>Access to circles and relationships that compound in value over a lifetime.</p>
            </div>
            <div className="philosophy-item">
              <h3>Global Credibility</h3>
              <p>Positioning that carries weight with institutions and employers worldwide.</p>
            </div>
            <div className="philosophy-item">
              <h3>Leadership Opportunities</h3>
              <p>We steward not just an application—but a long-term academic and professional journey.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Engagement Models</h2>
          <p className="section-lead">Curated for families who value educational excellence.</p>
          
          <div className="services-grid">
            {/* Signature Advisory */}
            <div className="service-card">
              <div className="service-header">
                <h3>Signature Advisory</h3>
                <p className="service-subtitle">Strategic Ivy League & Top-Tier Positioning</p>
                <div className="service-price">USD 8,999</div>
              </div>
              <p className="service-description">High-touch, founder-led advisory for candidates who expect clarity, structure, and strategic coherence—transforming raw potential into a compelling, authentic narrative.</p>
              <ul className="service-features">
                <li>Founder-led strategic advisory</li>
                <li>Ivy League & top-tier program strategy (up to 3)</li>
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
                <h3>Executive Advisory</h3>
                <p className="service-subtitle">End-to-End Stewardship Through Graduation</p>
                <div className="service-price">USD 15,999</div>
              </div>
              <p className="service-description">Our most immersive engagement. Complete stewardship—positioning, preparation, and presentation at the highest possible level across every stage.</p>
              <p className="service-note">Includes Signature Advisory, plus:</p>
              <ul className="service-features">
                <li>Weekly private 1-on-1 founder mentorship</li>
                <li>Multi-school strategy (up to 5 programs)</li>
                <li>Waitlist and contingency strategy</li>
                <li>Strategic updates & family decision alignment</li>
                <li><strong>Visa Assistance:</strong> F-1 / J-1 strategy, I-20 / DS-2019 review, mock visa interviews</li>
                <li><strong>Financial Aid & Scholarships:</strong> Funding strategy, documentation, application alignment</li>
                <li><strong>Post-Admission:</strong> Enrollment, course planning, scholarship renewal, graduation readiness</li>
              </ul>
              <p className="service-disclaimer">Intentionally limited intake per cycle to preserve quality and founder-level involvement.</p>
              <SmoothLink href="#contact" className="btn-service btn-primary">Inquire for Executive</SmoothLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Scope Section */}
      <Section className="scope-section">
        <div className="container">
          <h2 className="section-title">End-to-End Stewardship</h2>
          <p className="section-lead">From pre-application strategy to graduation readiness.</p>
          <div className="scope-visual">
            <div className="scope-timeline">
              <div className="scope-item">
                <div className="scope-number">01</div>
                <h3>Pre-Application</h3>
                <p>Academic and intellectual identity assessment, research refinement, strategic school and program selection.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">02</div>
                <h3>Application Architecture</h3>
                <p>Statement of Purpose and narrative development, CV positioning, letter of recommendation strategy.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">03</div>
                <h3>Decision Stage</h3>
                <p>Interview preparation, offer evaluation, waitlist and contingency strategy.</p>
              </div>
              <div className="scope-item">
                <div className="scope-number">04</div>
                <h3>Post-Admission</h3>
                <p>Visa assistance, financial aid strategy, enrollment, and graduation readiness planning.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">The Partners</h2>
          <p className="section-lead">Founder-led by alumni of Harvard, Johns Hopkins, KAUST, and Harvard Medical School.</p>
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
              <p className="philosophy-main">We Do Not Prepare Applications.<br />We Develop Candidates.</p>
              <div className="philosophy-principles">
                <p>We focus on readiness, not just submission.</p>
                <p>Elite education is a strategic investment, not a transactional service.</p>
                <p>Excellence is not accidental—it is intentionally developed.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Client Q&A */}
      <Section id="faq" className="faq-section">
        <div className="container">
          <h2 className="section-title">Client Q&A</h2>
          <p className="section-lead">Common questions about TiyerOne Education Consultant.</p>
          <div className="faq-list">
            <div className="faq-item">
              <h3>1. What exactly does TiyerOne do?</h3>
              <p>TiyerOne is a strategic education advisory for candidates targeting Ivy League and top-tier global universities. We don’t simply guide applications. We develop candidates—intellectually, strategically, and psychologically—and steward the entire journey from early positioning through admission, enrollment, and graduation readiness.</p>
            </div>
            <div className="faq-item">
              <h3>2. Do you write essays or applications for candidates?</h3>
              <p>No. Every idea, experience, and insight comes from the candidate. Our role is to elevate clarity, structure, and strategic coherence—transforming raw potential into a compelling, authentic narrative that meets elite institutional standards. The result is not a manufactured profile, but a stronger, clearer version of the candidate’s real academic identity.</p>
            </div>
            <div className="faq-item">
              <h3>3. How is TiyerOne different from other admissions consultants?</h3>
              <p>Most consultants focus on submission. We focus on readiness. Our advisory is founder-led by alumni of Harvard, Johns Hopkins, KAUST, and Harvard Medical School; fully end-to-end—from pre-application strategy to graduation readiness; and selective, high-touch, and intentionally limited per cycle. We treat elite education as a strategic investment, not a transactional service.</p>
            </div>
            <div className="faq-item">
              <h3>4. Do you guarantee admission?</h3>
              <p>Admissions decisions are always made independently by universities. What we provide is complete stewardship—ensuring the candidate is positioned, prepared, and presented at the highest possible level across every stage of the process.</p>
            </div>
            <div className="faq-item">
              <h3>5. Who is this advisory best suited for?</h3>
              <p>TiyerOne is designed for candidates and families who value education as a long-term driver of success; are targeting Ivy League or top-tier global universities; expect discretion, rigor, and thoughtful guidance; and understand that meaningful outcomes are built, not rushed. It is not designed for mass-market or last-minute applicants.</p>
            </div>
            <div className="faq-item">
              <h3>6. How early should a candidate start working with TiyerOne?</h3>
              <p>Earlier engagement allows for deeper development and stronger positioning. Early-stage candidates benefit from clear academic and research direction, strategic school and faculty alignment, and stronger narratives and recommendations. Late-stage engagement is possible, but early planning consistently produces better outcomes.</p>
            </div>
            <div className="faq-item">
              <h3>7. Do you work with families or sponsors as well?</h3>
              <p>Yes. We work with candidates and their broader support system when appropriate. For Executive Advisory clients, we provide strategic updates, decision alignment, and consultation to ensure clarity and confidence at every major milestone.</p>
            </div>
            <div className="faq-item">
              <h3>8. Do you support financial aid and scholarships?</h3>
              <p>Yes. We guide candidates through funding strategy, documentation preparation, and application alignment. Our goal is to maximize funding opportunities while maintaining full ethical and institutional compliance.</p>
            </div>
            <div className="faq-item">
              <h3>9. Is visa assistance included?</h3>
              <p>Yes. For eligible engagements, we provide F-1 / J-1 visa strategy; review of I-20 / DS-2019 and financial documentation; and mock visa interview preparation and risk mitigation. This ensures a smooth transition from admission to enrollment.</p>
            </div>
            <div className="faq-item">
              <h3>10. What happens after admission?</h3>
              <p>Our stewardship continues beyond acceptance. We support enrollment and course registration, academic milestone planning, scholarship renewal strategy, and graduation readiness and transition planning. Families and candidates value this continuity and peace of mind.</p>
            </div>
            <div className="faq-item">
              <h3>11. How many clients do you take per cycle?</h3>
              <p>We intentionally limit intake to preserve quality, discretion, and founder-level involvement. Each engagement receives focused attention and long-term accountability.</p>
            </div>
            <div className="faq-item">
              <h3>12. How does your payment model work?</h3>
              <p>Our investment-based model is designed to align incentives and commitment. Options may include split payment (e.g., 50% upfront, 10% during admissions, 40% upon admission). Details are shared privately during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>13. Why is this positioned as an “investment,” not a service?</h3>
              <p>Because outcomes at this level compound over time. Elite education shapes career trajectory, network access, global credibility, and leadership opportunities. We steward not just an application—but a long-term academic and professional journey.</p>
            </div>
            <div className="faq-item">
              <h3>14. What is the next step to engage TiyerOne?</h3>
              <p>Engagement is by invitation and application only. Prospective candidates begin with a private consultation to assess fit, readiness, and timeline. Because excellence is not accidental—it is intentionally developed.</p>
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
          <h2 className="section-title">Next Step</h2>
          <p className="section-lead">Engagement is by invitation and application only.</p>
          <p className="section-text">Prospective candidates begin with a private consultation to assess fit, readiness, and timeline. We intentionally limit intake per cycle to preserve quality and founder-level involvement.</p>
          <ContactForm />
          <p className="confidentiality-note">This inquiry is confidential and intended for prospective candidates and their families.</p>
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
            <p className="footer-tagline">Curated for Families Who Value Educational Excellence</p>
            <p className="footer-note">Strategic education advisory for Ivy League and top-tier global universities. All engagements are confidential.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
