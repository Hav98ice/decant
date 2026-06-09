import Image from 'next/image'
import { Reveal } from './Reveal'

type Dish = {
  img: string
  course: string
  name: string
  description: string
  price: string
}

const dishes: Dish[] = [
  {
    img: '/images/dish-1.jpg',
    course: 'To Begin',
    name: 'Oysters & Mignonette',
    description: 'Pacific oysters, champagne pearl, charred lemon.',
    price: '24',
  },
  {
    img: '/images/dish-3.jpg',
    course: 'From the Garden',
    name: 'Heirloom & Burrata',
    description: 'Late-summer tomato, basil oil, aged balsamic.',
    price: '19',
  },
  {
    img: '/images/dish-5.jpg',
    course: 'From the Sea',
    name: 'Seared Scallops',
    description: 'Brown butter, cauliflower, capers, golden raisin.',
    price: '38',
  },
  {
    img: '/images/dish-2.jpg',
    course: 'The Main',
    name: 'Dry-Aged Ribeye',
    description: 'Forty-day, bone marrow, confit shallot, red wine.',
    price: '64',
  },
  {
    img: '/images/dish-7.jpg',
    course: 'The Main',
    name: 'Wild Mushroom Risotto',
    description: 'Carnaroli, black truffle, parmesan, thyme.',
    price: '34',
  },
  {
    img: '/images/dish-9.jpg',
    course: 'To Finish',
    name: 'Dark Chocolate Crémeux',
    description: 'Olive oil, sea salt, candied hazelnut, port.',
    price: '16',
  },
]

export function Menu() {
  return (
    <section id="menu" className="section" style={{ background: 'var(--background-2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Reveal as="p" className="eyebrow">
            Seasonal Selections
          </Reveal>
          <Reveal as="h2" className="display" delay={80} style={{ marginTop: '1.25rem' }}>
            Composed for the cellar
          </Reveal>
          <Reveal as="p" className="body" delay={140} style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
            The menu turns with the season and the market. A glimpse of what the
            kitchen is pouring against this week.
          </Reveal>
        </div>

        <div className="menu-grid" style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 90}>
              <article className="dish-card">
                <div className="img-frame" style={{ aspectRatio: '4 / 5', borderRadius: 2 }}>
                  <Image
                    src={dish.img}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="dish-course">{dish.course}</span>
                </div>
                <div className="dish-body">
                  <div className="dish-head">
                    <h3 className="heading" style={{ fontSize: '1.4rem' }}>
                      {dish.name}
                    </h3>
                    <span className="dish-price">{dish.price}</span>
                  </div>
                  <p className="body" style={{ marginTop: '0.5rem' }}>
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} style={{ marginTop: 'clamp(3rem, 6vw, 4rem)', textAlign: 'center' }}>
          <a href="#reserve" className="btn-gold">
            Reserve to Dine
          </a>
        </Reveal>
      </div>
    </section>
  )
}
