// Static image imports. Next.js resolves these to hashed, correctly
// basePath-prefixed assets (/decant/_next/static/media/...), which is what
// makes them load on GitHub Pages. Referencing /public images by string does
// NOT get the basePath when next/image runs unoptimized, so we import instead.
import interior1 from '@/assets/images/interior-1.jpg'
import interior2 from '@/assets/images/interior-2.jpg'
import interior3 from '@/assets/images/interior-3.jpg'
import dish1 from '@/assets/images/dish-1.jpg'
import dish2 from '@/assets/images/dish-2.jpg'
import dish3 from '@/assets/images/dish-3.jpg'
import dish5 from '@/assets/images/dish-5.jpg'
import dish7 from '@/assets/images/dish-7.jpg'
import dish8 from '@/assets/images/dish-8.jpg'
import dish9 from '@/assets/images/dish-9.jpg'

export const img = {
  interior1,
  interior2,
  interior3,
  dish1,
  dish2,
  dish3,
  dish5,
  dish7,
  dish8,
  dish9,
}
