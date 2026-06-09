import Image from 'next/image'
import { Reveal } from './Reveal'
import { img } from '@/lib/images'

export function Intro() {
  return (
    <section id="intro" className="section">
      <div
        className="container intro-grid"
        style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}
      >
        <div>
          <Reveal as="p" className="eyebrow">
            The Table
          </Reveal>
          <Reveal as="h2" className="display" delay={80} style={{ marginTop: '1.25rem' }}>
            A devotion to the
            <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              well-poured hour.
            </span>
          </Reveal>
          <Reveal as="p" className="body" delay={160} style={{ marginTop: '1.75rem', maxWidth: '46ch' }}>
            Decant is a small room with a long memory. We built it for the lingering
            dinner — the bottle worth opening slowly, the plate that arrives exactly
            when the conversation needs it. Every evening is composed: seasonal,
            local, and quietly ambitious.
          </Reveal>
          <Reveal as="p" className="body" delay={220} style={{ marginTop: '1.25rem', maxWidth: '46ch' }}>
            Our cellar is the heart of the house. The kitchen follows its lead,
            building each course to meet the wine in the glass.
          </Reveal>

          <Reveal delay={300} style={{ marginTop: '2.5rem' }}>
            <a href="#story" className="btn-ghost">
              Our Story
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="img-frame" style={{ aspectRatio: '4 / 5', borderRadius: 2 }}>
            <Image
              src={img.interior2}
              alt="Wine glasses on a candlelit table at Decant"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
