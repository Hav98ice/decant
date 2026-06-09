import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { Menu } from '@/components/Menu'
import { Awards } from '@/components/Awards'
import { Story } from '@/components/Story'
import { Visit } from '@/components/Visit'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Menu />
        <Awards />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
