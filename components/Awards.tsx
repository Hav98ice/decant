import { site } from '@/lib/site'

export function Awards() {
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const items = [...site.awards, 'Curated Cellar of 300+ Labels', ...site.awards, 'Sommelier-Led Pairings']
  const loop = [...items, ...items]

  return (
    <section aria-label="Awards and recognition" className="awards-band">
      <div className="awards-track animate-marquee">
        {loop.map((award, i) => (
          <span key={i} className="awards-item">
            <span aria-hidden className="awards-star">
              ✦
            </span>
            {award}
          </span>
        ))}
      </div>
    </section>
  )
}
