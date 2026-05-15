import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const VALUES = [
  { num: '01', tag: 'FOCUS',       title: 'Engineering Only',    body: 'We work exclusively with engineering and industrial customers. This isn\'t a policy — it\'s how we\'ve set up our process, our pricing and our expectations. It means the people who call us know what they\'re asking for.' },
  { num: '02', tag: 'QUALITY',     title: 'Fit for Purpose',     body: 'A part only passes if it works in the application it was made for. We ask about end use, loading conditions and environment before we start. That\'s not unusual — it\'s basic manufacturing practice.' },
  { num: '03', tag: 'RELIABILITY', title: 'Consistent Supply',   body: 'Repeat orders should behave the same as the first. We document settings, materials and processes per job so that when you come back for more parts, you get the same result — not a new guess.' },
]

const CLIENT_TYPES = [
  'Engineering companies',
  'Manufacturers & production teams',
  'R&D and design engineers',
  'Industrial contractors',
  'Production and facilities managers',
]

export default function About() {
  return (
    <PageTransition>
      <section className="inner-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / About</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            Built for engineering,<br />not consumers.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
            HX3D Engineering Solutions exists to serve engineering companies — not the general public.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <ScrollReveal className="about-left">
              <h2>What we do and who we do it for</h2>
              <p>HX3D Engineering Solutions provides FDM additive manufacturing services to engineering companies, manufacturers, R&D teams and industrial contractors across the North West and beyond. We produce functional components — parts that are fitted, tested, loaded and used in real environments.</p>
              <p>We don't take consumer orders and we don't produce decorative or novelty items. Our customers are technical people who understand what they need and require a supplier who can deliver it reliably.</p>
              <p>Every order is treated as a manufacturing job, not a print request. That means proper review of files and specifications, appropriate material selection, and production that considers the end use of the part.</p>
              <div style={{ marginTop: 36 }}>
                <Link to="/services" className="btn btn-dark">View Our Services</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="about-right">
              <div className="about-img">
                <img src="/assets/hx3d-advert-card.jpg" alt="HX3D Engineering Solutions" />
              </div>
              <div>
                {CLIENT_TYPES.map((c, i) => (
                  <motion.div
                    key={c}
                    className="client-type"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                  >
                    <span>{c}</span>
                    <span className="client-arrow">→</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ padding: 0 }}>
        <div className="wrap" style={{ padding: 0 }}>
          <div className="values-strip">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.1}>
                <div className="value-block">
                  <div className="value-num">{v.num} — {v.tag}</div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <ScrollReveal>
            <div className="big-statement" style={{ padding: 0 }}>
              <span className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 28, display: 'block' }}>Why it matters</span>
              <p>"Most 3D printing services are set up for consumers. We're not. The difference shows in how we handle your file, what questions we ask, and what you get back."</p>
              <Link to="/quote" className="btn btn-white btn-lg">Request a Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="cta-split">
        <div className="cta-left">
          <div>
            <h2>Start a project</h2>
            <p style={{ marginTop: 12 }}>Send us your drawings, CAD files or a brief. We'll respond with a clear quote within one business day.</p>
          </div>
          <Link to="/quote" className="btn btn-white" style={{ alignSelf: 'flex-start', marginTop: 36 }}>Request a Quote →</Link>
        </div>
        <div className="cta-right">
          <div>
            <h3>Direct enquiries</h3>
            <p>Prefer to email us directly?</p>
            <a href="mailto:info@hx3dengineering.co.uk" className="email">info@hx3dengineering.co.uk</a>
          </div>
          <div style={{ marginTop: 36 }}>
            <div className="label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>Location</div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>North West, United Kingdom</p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
