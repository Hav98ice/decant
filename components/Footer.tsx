import { nav, site } from '@/lib/site'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--background)' }}>
      <div className="container" style={{ paddingBlock: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="footer-grid">
          <div>
            <span
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '1.7rem',
                letterSpacing: '0.42em',
                paddingLeft: '0.42em',
                color: 'var(--cream)',
              }}
            >
              DECANT
            </span>
            <p className="body" style={{ marginTop: '1.25rem', maxWidth: '32ch' }}>
              An award-winning fine dining wine bar in the heart of Medford, Oregon.
            </p>
          </div>

          <nav aria-label="Footer" className="footer-nav">
            <h4 className="eyebrow" style={{ color: 'var(--muted)' }}>
              Explore
            </h4>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-nav">
            <h4 className="eyebrow" style={{ color: 'var(--muted)' }}>
              Visit
            </h4>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
              {site.address}
            </a>
            <a href={site.phoneHref}>{site.phone}</a>
            <span className="body" style={{ marginTop: '0.25rem' }}>
              Tue – Sat · 4:00 — 8:30 PM
            </span>
          </div>
        </div>

        <hr className="rule-gold" style={{ marginBlock: 'clamp(2rem, 5vw, 3rem)' }} />

        <div className="footer-bottom">
          <span className="body" style={{ fontSize: '0.72rem' }}>
            © {new Date().getFullYear()} Decant · Medford, Oregon. All rights reserved.
          </span>
          <span className="eyebrow" style={{ color: 'var(--gold-dim)', fontSize: '0.6rem' }}>
            Wine Spectator Award of Excellence · 2023 – 2025
          </span>
        </div>
      </div>
    </footer>
  )
}
