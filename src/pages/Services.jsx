import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const SERVICES = [
  {
    num: '01', name: 'Additive Manufacturing',
    desc: 'FDM 3D printing for functional engineering components and end-use parts',
    body: ['HX3D provides FDM (Fused Deposition Modelling) additive manufacturing for functional engineering components and end-use parts. We produce parts in engineering-grade thermoplastics to your drawings and CAD files, with settings selected for the application — not just print quality.', 'Whether you need a single component or a repeat production run, our process is the same: review the file, confirm the spec, select the right material and parameters, produce, inspect and deliver.'],
    checklist: ['End-use and functional components', 'Engineering thermoplastics (PLA+, PETG, ASA, ABS, TPU)', 'Settings matched to application requirements', 'Consistent results on repeat orders'],
  },
  {
    num: '02', name: 'Rapid Prototyping',
    desc: 'Fast-turnaround prototypes for design validation and fit-and-function testing',
    body: ['Fast-turnaround prototypes for design validation, fit-and-function testing and stakeholder review. Express lead times from 48 hours, subject to part complexity and print schedule.', 'We work with early-stage CAD files and incomplete drawings — if your design is still evolving, we\'ll make it clear what we need to proceed.'],
    checklist: ['Express lead times from 48 hours', 'Fit and function testing ready', 'Works with WIP drawings and models', 'Revision support — test, iterate, repeat'],
  },
  {
    num: '03', name: 'Small Batch Manufacturing',
    desc: 'Production runs from 1 to hundreds — no tooling cost, consistent quality',
    body: ['Production runs from one to hundreds of parts, without tooling costs. Additive manufacturing removes the need for moulds and dies, making small batch production economically viable at quantities injection moulding can\'t justify.', 'Each batch is produced to the same specification as the last. We document process parameters per job so repeat orders match first orders — no drift, no relearning.'],
    checklist: ['Runs from 1 to hundreds', 'No tooling investment required', 'Consistent results batch to batch', 'Repeat order support as standard'],
  },
  {
    num: '04', name: 'Functional Engineering Components',
    desc: 'Load-bearing and mechanical parts produced with performance in mind',
    body: ['Load-bearing, mechanical and structural parts produced with performance in mind. We don\'t default to print settings that look right — we set infill, orientation, wall thickness and material based on what the part needs to do.', 'Applicable to brackets, housings, enclosures, mounts, structural supports, mechanical linkages and any component where material properties and dimensional accuracy matter.'],
    checklist: ['Load-bearing and structural parts', 'Settings selected for mechanical performance', 'Material matched to operating conditions', 'Tolerances achievable to ±0.2mm typical'],
  },
  {
    num: '05', name: 'Bespoke Component Production',
    desc: 'Custom parts to your drawings, specs or CAD files — one-off or repeat',
    body: ['Custom parts to your drawings, specifications or CAD files — one-off or repeat orders. If it\'s a standard part that\'s out of production, a replacement for a legacy machine, or a bespoke item for a specific application, we can produce it.', 'We accept most common formats and can work with PDF drawings if CAD isn\'t available.'],
    checklist: ['Any geometry your design requires', 'Legacy and obsolete part replacement', 'Works from PDF drawings if needed', 'One-off or ongoing repeat supply'],
  },
  {
    num: '06', name: 'Tooling & Manufacturing Aids',
    desc: 'Jigs, fixtures and production tooling — faster and cheaper than machined equivalents',
    body: ['Jigs, fixtures, assembly aids and production tooling made faster and at lower cost than machined equivalents. Additive manufacturing is well suited to tooling — geometry can be complex, quantities are low and lead times need to be short.', 'Typical applications include drill guides, assembly fixtures, checking jigs, masking aids, end-of-arm tooling and workholding components.'],
    checklist: ['Drill guides and checking jigs', 'Assembly and alignment fixtures', 'Masking and protection aids', 'End-of-arm tooling components'],
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState(null)

  return (
    <PageTransition>
      <section className="inner-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Services</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            What we produce<br />and how.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
            Six core services built around FDM additive manufacturing. Click any service to expand.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="svc-list">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.num} delay={i * 0.05}>
                <div
                  className={`svc-row${expanded === i ? ' open' : ''}`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="svc-row-header">
                    <span className="svc-num">{svc.num}</span>
                    <div>
                      <div className="svc-name">{svc.name}</div>
                      <div className="svc-desc">{svc.desc}</div>
                    </div>
                    <span className="svc-arrow" style={{ fontSize: '1.4rem', color: 'var(--border)', transition: 'color 0.2s, transform 0.2s' }}>→</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="svc-detail">
                          <div>
                            {svc.body.map((p, j) => <p key={j}>{p}</p>)}
                          </div>
                          <ul className="checklist">
                            {svc.checklist.map(c => <li key={c}>{c}</li>)}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-split">
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
      </div>
    </PageTransition>
  )
}
