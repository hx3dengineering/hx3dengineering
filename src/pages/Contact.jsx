import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      <section className="inner-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Contact</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            Get in touch.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
            For quotation requests, project enquiries or any questions about our manufacturing services.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-layout">
            <ScrollReveal className="contact-meta">
              <h2>Contact details</h2>
              <p>The quickest way to reach us is by email. For quotation requests, use the <Link to="/quote" style={{ color: 'var(--navy)', fontWeight: 500 }}>quote form</Link> so we can capture the right details first time.</p>
              <div className="contact-row">
                <span className="label">Email</span>
                <a href="mailto:info@hx3dengineering.co.uk">info@hx3dengineering.co.uk</a>
              </div>
              <div className="contact-row">
                <span className="label">Location</span>
                <span>North West, United Kingdom</span>
              </div>
              <div className="contact-row">
                <span className="label">Response time</span>
                <span>Within one business day</span>
              </div>
              <div className="contact-row">
                <span className="label">Quotation requests</span>
                <Link to="/quote">Use the quote form →</Link>
              </div>
              <div style={{ marginTop: 48, padding: 28, background: 'var(--bg-alt)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div className="label" style={{ marginBottom: 12 }}>B2B enquiries only</div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink-mid)' }}>We work exclusively with engineering companies, manufacturers and industrial customers. We don't take consumer or hobbyist orders.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 style={{ fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 700, marginBottom: 28 }}>Send a message</h2>
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xpqbgggl" method="POST">
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div className="form-msg success" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      Message sent — we'll be in touch within one business day.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div className="form-msg error" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      Something went wrong. Email us directly at info@hx3dengineering.co.uk
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="field-row">
                  <div className="field"><label>Name</label><input type="text" name="name" placeholder="Your name" required /></div>
                  <div className="field"><label>Company</label><input type="text" name="company" placeholder="Company name" /></div>
                </div>
                <div className="field"><label>Email address</label><input type="email" name="email" placeholder="you@company.com" required /></div>
                <div className="field"><label>Subject</label><input type="text" name="subject" placeholder="What's your enquiry about?" required /></div>
                <div className="field"><label>Message</label><textarea name="message" rows={6} placeholder="Your message" required /></div>

                <motion.button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </motion.button>
                <p className="form-note">For quote requests with files, use the <Link to="/quote" style={{ color: 'var(--navy)' }}>quotation form</Link> instead.</p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
