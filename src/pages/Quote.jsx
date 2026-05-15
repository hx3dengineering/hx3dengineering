import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const FORMATS = ['STL', 'STEP', 'IGES', 'OBJ', '3MF', 'DXF', 'PDF']

export default function Quote() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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
          <div className="crumb"><Link to="/">Home</Link> / Request a Quote</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            Tell us what<br />you need.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
            Complete the form below or email us directly. We respond to all quotation requests within one business day.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="quote-layout">
            <ScrollReveal className="quote-info">
              <h2>What to include</h2>
              <p>The more detail you provide, the faster and more accurate our quote will be. At minimum we need:</p>
              <ul className="checklist">
                <li>CAD file (STL, STEP, OBJ) or dimensioned drawing (PDF, DXF)</li>
                <li>Quantity required</li>
                <li>Material preference or application description</li>
                <li>Required lead time if time-critical</li>
              </ul>
              <p style={{ marginTop: 28 }}>If you're not sure about material or other specifications, describe the application and we'll advise.</p>

              <div style={{ marginTop: 40, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
                <div className="label" style={{ marginBottom: 16 }}>We accept files via</div>
                <div className="tag-cloud">
                  {FORMATS.map(f => (
                    <motion.span
                      key={f}
                      className="tag"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(27,46,90,0.06)' }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 40, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
                <div className="label" style={{ marginBottom: 12 }}>Or email us directly</div>
                <a href="mailto:info@hx3dengineering.co.uk" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>info@hx3dengineering.co.uk</a>
                <p style={{ fontSize: '0.825rem', marginTop: 8 }}>Attach your files and describe the project. We'll reply within one business day.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div className="form-msg success" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      Sent — we'll be in touch within one business day.
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
                <div className="field-row">
                  <div className="field"><label>Email address</label><input type="email" name="email" placeholder="you@company.com" required /></div>
                  <div className="field"><label>Phone (optional)</label><input type="tel" name="phone" placeholder="+44" /></div>
                </div>
                <div className="field">
                  <label>Service required</label>
                  <select name="service">
                    <option value="" disabled defaultValue>Select a service</option>
                    <option>Additive Manufacturing</option>
                    <option>Rapid Prototyping</option>
                    <option>Small Batch Manufacturing</option>
                    <option>Functional Engineering Components</option>
                    <option>Bespoke Component Production</option>
                    <option>Tooling &amp; Manufacturing Aids</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div className="field-row">
                  <div className="field"><label>Quantity</label><input type="text" name="quantity" placeholder="e.g. 10 off" /></div>
                  <div className="field"><label>Required lead time</label><input type="text" name="lead_time" placeholder="e.g. 5 business days" /></div>
                </div>
                <div className="field">
                  <label>Material preference (optional)</label>
                  <select name="material">
                    <option value="" disabled defaultValue>Select or leave blank</option>
                    <option>PLA+ (general use)</option>
                    <option>PETG (tough, chemical resistant)</option>
                    <option>ASA (UV stable, outdoor)</option>
                    <option>ABS (higher temperature)</option>
                    <option>TPU (flexible)</option>
                    <option>Not sure — describe application below</option>
                  </select>
                </div>
                <div className="field">
                  <label>Project description / application</label>
                  <textarea name="details" rows={5} placeholder="Describe the part, its application, loading or environmental conditions, surface finish requirements, or anything else we should know." required />
                </div>
                <div className="field">
                  <label>File links (optional)</label>
                  <input type="url" name="file_links" placeholder="Dropbox, WeTransfer, Google Drive link etc." />
                </div>

                <motion.button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Quote Request'}
                </motion.button>
                <p className="form-note">We respond within one business day. Files can also be sent to <a href="mailto:info@hx3dengineering.co.uk" style={{ color: 'var(--navy)' }}>info@hx3dengineering.co.uk</a></p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
