const ITEMS = [
  'Additive Manufacturing', 'Rapid Prototyping', 'Small Batch Production',
  'Engineering Components', 'FDM 3D Printing', 'Tooling & Fixtures',
  'Bespoke Parts', 'North West, UK', 'B2B Industrial Supplier', 'Engineering Grade Quality',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span>{item}</span>
            <span className="sep">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
