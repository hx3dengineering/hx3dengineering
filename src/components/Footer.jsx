import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/hx3d-logo.jpg" alt="HX3D Engineering Solutions" />
            <p>Specialist additive manufacturing and engineering services for industrial and commercial customers. North West, UK.</p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/capability">Capability</Link></li>
              <li><Link to="/quote">Request a Quote</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Additive Manufacturing</Link></li>
              <li><Link to="/services">Rapid Prototyping</Link></li>
              <li><Link to="/services">Small Batch Production</Link></li>
              <li><Link to="/services">Engineering Components</Link></li>
              <li><Link to="/services">Tooling &amp; Fixtures</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@hx3dengineering.co.uk">info@hx3dengineering.co.uk</a></li>
              <li><span>North West, United Kingdom</span></li>
              <li><Link to="/quote">Request a Quote →</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HX3D Engineering Solutions. All rights reserved.</p>
          <p>Precision · Innovation · Reliability</p>
        </div>
      </div>
    </footer>
  )
}
