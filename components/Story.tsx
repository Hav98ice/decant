import Image from 'next/image'
import { Reveal } from './Reveal'

const people = [
  { name: 'Jessica Cahill', role: 'Founder · Certified Sommelier' },
  { name: 'Carey Cahill', role: 'Founder · Hospitality' },
  { name: 'Michael Bryant', role: 'Executive Chef' },
]

export function Story() {
  return (
    <section id="story" className="section">
      <div
        className="container story-grid"
        style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}
      >
        <Reveal delay={80} className="story-image">
          <div className="img-frame" style={{ aspectRatio: '4 / 5', borderRadius: 2 }}>
            <Image
              src="/images/interior-3.jpg"
              alt="The bar and cellar at Decant"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal as="p" className="eyebrow">
            Our Story
          </Reveal>
          <Reveal as="h2" className="display" delay={80} style={{ marginTop: '1.25rem' }}>
            From a sommelier&rsquo;s
            <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              table to yours.
            </span>
          </Reveal>
          <Reveal as="p" className="body" delay={160} style={{ marginTop: '1.75rem', maxWidth: '48ch' }}>
            Decant began with Jessica Cahill — a certified sommelier raised between
            Italy and California — and her partner Carey, who shared a simple idea:
            a neighborhood room where great wine feels generous, not precious.
          </Reveal>
          <Reveal as="p" className="body" delay={220} style={{ marginTop: '1.25rem', maxWidth: '48ch' }}>
            In the kitchen, Executive Chef Michael Bryant cooks to the cellar —
            sourcing from the Rogue Valley and building plates that meet each bottle
            with intention. Together they&rsquo;ve earned the Wine Spectator Award of
            Excellence three years running.
          </Reveal>

          <Reveal delay={300}>
            <ul className="people">
              {people.map((p) => (
                <li key={p.name}>
                  <span className="heading" style={{ fontSize: '1.35rem' }}>
                    {p.name}
                  </span>
                  <span className="eyebrow" style={{ color: 'var(--muted)', fontWeight: 400 }}>
                    {p.role}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
