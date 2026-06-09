import Image from 'next/image'
import { site } from '@/lib/site'
import { img } from '@/lib/images'

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background photography */}
      <Image
        src={img.interior1}
        alt="The candlelit dining room at Decant"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Cinematic overlays */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 90% at 50% 30%, rgba(10,7,5,0.35) 0%, rgba(10,7,5,0.72) 60%, rgba(10,7,5,0.94) 100%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,7,5,0.6) 0%, transparent 28%, transparent 60%, var(--background) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem',
        }}
      >
        <p className="eyebrow">{site.city}</p>

        <h1 className="display-hero text-gold-gradient">DECANT</h1>

        <span className="divider eyebrow" style={{ color: 'var(--gold)' }}>
          {site.tagline}
        </span>

        <p className="lead" style={{ maxWidth: '34ch', marginTop: '0.5rem' }}>
          An intimate wine bar where the cellar leads and the kitchen answers.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <a href={site.reserveHref} className="btn-gold">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost">
            View the Menu
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#intro"
        aria-label="Scroll to explore"
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vh, 2.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          color: 'var(--muted)',
          textDecoration: 'none',
        }}
      >
        <span
          className="eyebrow"
          style={{ color: 'var(--muted)', fontSize: '0.58rem', letterSpacing: '0.3em' }}
        >
          Explore
        </span>
        <span aria-hidden className="scroll-cue" />
      </a>
    </section>
  )
}
