import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Ticker from '../components/Ticker'
import ScrollReveal from '../components/ScrollReveal'
import Counter from '../components/Counter'

const HERO_WORDS = ['Engineering', '&', 'Additive', 'Manufacturing']

const SERVICES = [
  { num: '01', name: 'Additive Manufacturing',         desc: 'FDM 3D printing for functional engineering components and end-use parts' },
  { num: '02', name: 'Rapid Prototyping',               desc: 'Fast-turnaround prototypes for design validation and fit-and-function testing' },
  { num: '03', name: 'Small Batch Manufacturing',       desc: 'Production runs from 1 to hundreds — no tooling cost, consistent quality' },
  { num: '04', name: 'Functional Engineering Components', desc: 'Load-bearing and mechanical parts produced with performance in mind' },
  { num: '05', name: 'Bespoke Component Production',   desc: 'Custom parts to your drawings, specs or CAD files — one-off or repeat' },
  { num: '06', name: 'Tooling & Manufacturing Aids',   desc: 'Jigs, fixtures and production tooling — faster and cheaper than machined equivalents' },
]

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } }
}
const wordVariant = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="hero">
        <div className="hero-body">
          <motion.h1
            className="hero-headline"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {HERO_WORDS.map((w, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                style={{ display: 'block', color: w === '&' || w === 'Additive' ? 'var(--navy)' : 'var(--ink)' }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="hero-aside"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>Precision 3D printed components, rapid prototyping and small-batch manufacturing — delivered with engineering-grade quality and fast lead times.</p>
            <div className="hero-btns">
              <Link to="/quote" className="btn btn-dark btn-lg">Request a Quote</Link>
              <Link to="/services" className="btn btn-ghost">View Services</Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="hero-meta">
            {['North West, UK', 'B2B Engineering Supplier', 'FDM Additive Manufacturing', 'Fast Lead Times'].map(t => (
              <div key={t} className="hero-meta-item">
                <div className="dot" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <a href="mailto:info@hx3dengineering.co.uk" className="hero-contact-link">
            info@hx3dengineering.co.uk →
          </a>
        </motion.div>
      </section>

      <Ticker />

      {/* STATEMENT */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="statement">
              <div className="statement-left">
                <div className="statement-num">HX</div>
                <h2>We manufacture parts that have to work, not just look right.</h2>
              </div>
              <div className="statement-right">
                <p>HX3D Engineering Solutions is a specialist additive manufacturing and engineering services business based in the North West, UK. We work with engineering companies, manufacturers and industrial customers who need precise, functional components made properly.</p>
                <p>We don't do decorative prints or consumer orders. Our customers are engineers, R&D teams, production managers and contractors — people who need a reliable manufacturing supplier, not a print shop.</p>
                <ul className="checklist">
                  <li>Functional, load-bearing and mechanical components</li>
                  <li>Prototypes built to validate real designs</li>
                  <li>Small batches without expensive tooling</li>
                  <li>Jigs, fixtures and production aids</li>
                </ul>
                <div style={{ marginTop: 32 }}>
                  <Link to="/about" className="btn btn-ghost">About the Business</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', fontWeight: 700 }}>Services</h2>
              <Link to="/services" className="label" style={{ color: 'var(--navy)' }}>View all →</Link>
            </div>
          </ScrollReveal>
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.06}>
                <Link to="/services" className="svc-row" style={{ display: 'grid', gridTemplateColumns: '56px 1fr auto', alignItems: 'center', padding: '28px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', transition: 'background 0.2s, padding 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--ink)'
                    e.currentTarget.style.paddingLeft = '24px'
                    e.currentTarget.style.paddingRight = '24px'
                    e.currentTarget.style.margin = '0 -24px'
                    e.currentTarget.style.borderRadius = '2px'
                    e.currentTarget.querySelectorAll('[data-dim]').forEach(el => { el.style.color = 'rgba(255,255,255,0.4)' })
                    e.currentTarget.querySelectorAll('[data-name]').forEach(el => { el.style.color = '#fff' })
                    e.currentTarget.querySelectorAll('[data-desc]').forEach(el => { el.style.color = 'rgba(255,255,255,0.55)' })
                    e.currentTarget.querySelectorAll('[data-arrow]').forEach(el => { el.style.color = '#fff'; el.style.transform = 'translateX(4px)' })
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = ''
                    e.currentTarget.style.paddingLeft = ''
                    e.currentTarget.style.paddingRight = ''
                    e.currentTarget.style.margin = ''
                    e.currentTarget.style.borderRadius = ''
                    e.currentTarget.querySelectorAll('[data-dim]').forEach(el => { el.style.color = '' })
                    e.currentTarget.querySelectorAll('[data-name]').forEach(el => { el.style.color = '' })
                    e.currentTarget.querySelectorAll('[data-desc]').forEach(el => { el.style.color = '' })
                    e.currentTarget.querySelectorAll('[data-arrow]').forEach(el => { el.style.color = ''; el.style.transform = '' })
                  }}
                >
                  <span data-dim="" className="svc-num" style={{ transition: 'color 0.2s' }}>{s.num}</span>
                  <div>
                    <div data-name="" className="svc-name" style={{ transition: 'color 0.2s' }}>{s.name}</div>
                    <div data-desc="" className="svc-desc" style={{ transition: 'color 0.2s' }}>{s.desc}</div>
                  </div>
                  <span data-arrow="" className="svc-arrow" style={{ transition: 'color 0.2s, transform 0.2s' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITY NUMBERS */}
      <section className="section section-sm" style={{ padding: 0 }}>
        <div className="wrap">
          <div className="cap-numbers" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', margin: '0' }}>
            <ScrollReveal delay={0}>
              <div className="cap-num-item">
                <div className="cap-label">Process</div>
                <div className="cap-big">FDM</div>
                <div className="cap-sub">Fused Deposition Modelling — engineering thermoplastics</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="cap-num-item">
                <div className="cap-label">Typical Tolerance</div>
                <div className="cap-big">±0.2<sub>mm</sub></div>
                <div className="cap-sub">Tighter tolerances achievable on specific features</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="cap-num-item">
                <div className="cap-label">Express Lead Time</div>
                <div className="cap-big"><Counter to={48} suffix="hr" /></div>
                <div className="cap-sub">Subject to part complexity and schedule</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="cap-num-item">
                <div className="cap-label">Accepted Formats</div>
                <div className="cap-big"><Counter to={7} suffix="+" /></div>
                <div className="cap-sub">STL, STEP, IGES, OBJ, DXF, PDF and more</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DARK STATEMENT */}
      <section className="section section-dark" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <ScrollReveal>
            <div className="big-statement">
              <span className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 28, display: 'block' }}>The difference</span>
              <p>"An engineering manufacturing supplier and a consumer print shop are not the same thing. We work with customers who understand that distinction."</p>
              <Link to="/quote" className="btn btn-white btn-lg">Discuss Your Project</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA SPLIT */}
      <div className="cta-split">
        <ScrollReveal style={{ display: 'contents' }}>
          <div className="cta-left">
            <div>
              <h2>Ready to get a quote?</h2>
              <p style={{ marginTop: 12 }}>Send us your drawings, CAD files or a project brief. We'll come back with a clear, itemised quotation within one business day.</p>
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
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
