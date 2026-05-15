import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import Counter from '../components/Counter'

const SPECS = [
  {
    head: 'Process',
    rows: [
      ['Technology', 'FDM — Fused Deposition Modelling'],
      ['Layer Height', '0.1mm – 0.3mm (application dependent)'],
      ['Typical Tolerance', '±0.2mm general; tighter on specific features'],
      ['Minimum Wall', '0.8mm recommended; 0.4mm achievable'],
    ],
  },
  {
    head: 'Materials Available',
    rows: [
      ['PLA+', 'General use, good stiffness, visual parts'],
      ['PETG', 'Chemical resistance, moderate temp, tough'],
      ['ASA', 'UV stable, outdoor and exposed environments'],
      ['ABS', 'Higher temperature, machinable, impact resistant'],
      ['TPU', 'Flexible, abrasion resistant, sealing applications'],
    ],
  },
  {
    head: 'File Formats Accepted',
    rows: [
      ['3D Formats', 'STL, STEP, IGES, OBJ, 3MF'],
      ['2D / Drawing', 'DXF, PDF (dimensioned drawings accepted)'],
      ['Other', 'Contact us — most formats can be worked with'],
    ],
  },
  {
    head: 'Lead Times',
    rows: [
      ['Standard', '3–5 business days'],
      ['Express', '48 hours (subject to complexity and schedule)'],
      ['Repeat Orders', 'Typically faster — settings documented from first run'],
    ],
  },
]

const PROCESS = [
  { n: '01', title: 'File Review', body: 'We review your CAD file or drawing before committing to production. This catches geometry issues, thin walls, unsupported features and tolerance expectations before material is consumed.' },
  { n: '02', title: 'Material Selection', body: 'Material is selected based on the end use of the part — operating temperature, load, chemical exposure, UV resistance and other factors.' },
  { n: '03', title: 'Slicing & Setup', body: 'Print orientation, infill pattern, wall count and layer height are all set to suit the part geometry and its application. These decisions directly affect mechanical performance.' },
  { n: '04', title: 'Production', body: 'Parts are produced on calibrated equipment. Settings are documented per job so that repeat orders can be matched consistently without re-dialling.' },
  { n: '05', title: 'Inspection & Delivery', body: 'Finished parts are checked dimensionally before dispatch. Support material is removed, critical surfaces are inspected, and parts are packed to arrive undamaged.' },
]

const MATERIALS = [
  ['PLA+',  'Good',     'Low (50–60°C)',      'Low',      'Prototypes, general components, visual parts'],
  ['PETG',  'Good',     'Moderate (70–80°C)', 'Good',     'Enclosures, functional parts, chemical environments'],
  ['ASA',   'Good',     'Good (90–100°C)',    'Good',     'Outdoor, UV-exposed, automotive environments'],
  ['ABS',   'Good',     'Good (95–105°C)',    'Moderate', 'Higher temp environments, machinable parts'],
  ['TPU',   'Flexible', 'Moderate (80°C)',    'Good',     'Seals, gaskets, grips, impact absorption'],
]

export default function Capability() {
  return (
    <PageTransition>
      <section className="inner-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Capability</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            Technical capability<br />and specifications.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
            Process parameters, materials, tolerances and file requirements for FDM additive manufacturing at HX3D.
          </motion.p>
        </div>
      </section>

      {/* NUMBERS */}
      <section style={{ padding: 0 }}>
        <div className="wrap">
          <div className="cap-numbers" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', margin: '48px 0 0' }}>
            {[
              { label: 'Process',         big: 'FDM',                      sub: 'Fused Deposition Modelling' },
              { label: 'Typical Tolerance', big: null, counter: { to: 2, prefix: '±0.', suffix: 'mm' }, sub: 'Tighter achievable on specific features' },
              { label: 'Express Lead Time', big: null, counter: { to: 48, suffix: 'hr' }, sub: 'Subject to complexity and schedule' },
              { label: 'Accepted Formats', big: null, counter: { to: 7, suffix: '+' }, sub: 'STL, STEP, IGES, OBJ, DXF, PDF and more' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="cap-num-item">
                  <div className="cap-label">{item.label}</div>
                  <div className="cap-big">
                    {item.big ?? (
                      <>
                        {item.counter.prefix}
                        <Counter to={item.counter.to} suffix={item.counter.suffix} />
                      </>
                    )}
                  </div>
                  <div className="cap-sub">{item.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + SPECS */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <ScrollReveal>
                <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', fontWeight: 700, marginBottom: 32 }}>How FDM works</h2>
              </ScrollReveal>
              <div className="process-list">
                {PROCESS.map((p, i) => (
                  <ScrollReveal key={p.n} delay={i * 0.07}>
                    <div className="process-item">
                      <div className="process-n">{p.n}</div>
                      <div>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div>
              <ScrollReveal>
                <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', fontWeight: 700, marginBottom: 32 }}>Technical specifications</h2>
              </ScrollReveal>
              {SPECS.map((block, i) => (
                <ScrollReveal key={block.head} delay={i * 0.08}>
                  <div className="spec-block" style={{ marginTop: i > 0 ? 2 : 0 }}>
                    <div className="spec-block-head">{block.head}</div>
                    {block.rows.map(([k, v]) => (
                      <div key={k} className="spec-row">
                        <div className="spec-key">{k}</div>
                        <div className="spec-val">{v}</div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS TABLE */}
      <section className="section section-alt" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', fontWeight: 700, marginBottom: 32 }}>Material selection guide</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="mat-table">
                <thead>
                  <tr>
                    {['Material','Strength','Temp. Resistance','Chemical Resistance','Best For'].map(h => <th key={h}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {MATERIALS.map(row => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => <td key={i}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--ink-light)', marginTop: 16 }}>Temperature resistance values are approximate and application-dependent.</p>
          </ScrollReveal>
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
