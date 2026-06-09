import Image from 'next/image'
import { Reveal } from './Reveal'
import { site } from '@/lib/site'
import { img } from '@/lib/images'

export function Visit() {
  return (
    <section id="visit" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Faint background photography */}
      <Image
        src={img.dish8}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', opacity: 0.12 }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, var(--background), rgba(10,7,5,0.85) 40%, var(--background))',
        }}
      />

      <div className="container section" style={{ position: 'relative', zIndex: 1 }}>
        <div id="reserve" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Reveal as="p" className="eyebrow">
            Visit Decant
          </Reveal>
          <Reveal as="h2" className="display" delay={80} style={{ marginTop: '1.25rem' }}>
            Reserve your evening
          </Reveal>
          <Reveal as="p" className="body" delay={140} style={{ marginTop: '1.5rem', maxWidth: '48ch' }}>
            Seating is intimate and books quickly. Call us directly or request a
            table — we&rsquo;ll confirm within the day.
          </Reveal>
          <Reveal delay={200} style={{ marginTop: '2.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={site.phoneHref} className="btn-gold">
              Call {site.phone}
            </a>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Get Directions
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} style={{ marginTop: 'clamp(3rem, 7vw, 5rem)' }}>
          <hr className="rule-gold" />
        </Reveal>

        <div className="visit-grid">
          <Reveal>
            <h3 className="eyebrow" style={{ color: 'var(--gold)' }}>
              Hours
            </h3>
            <ul className="info-list">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <h3 className="eyebrow" style={{ color: 'var(--gold)' }}>
              Find Us
            </h3>
            <p className="lead" style={{ fontStyle: 'normal', fontSize: '1.25rem', marginTop: '1.25rem' }}>
              {site.address}
            </p>
            <p className="body" style={{ marginTop: '0.75rem' }}>
              <a href={site.phoneHref} style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>
                {site.phone}
              </a>
            </p>
          </Reveal>

          <Reveal delay={180}>
            <h3 className="eyebrow" style={{ color: 'var(--gold)' }}>
              Good to Know
            </h3>
            <ul className="info-list">
              <li>
                <span>Happy Hour</span>
                <span>4 — 5:30 PM</span>
              </li>
              <li>
                <span>Reservations</span>
                <span>Recommended</span>
              </li>
              <li>
                <span>Wine List</span>
                <span>300+ Labels</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
