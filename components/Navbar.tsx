'use client'

import { useEffect, useState } from 'react'
import { nav, site } from '@/lib/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        insetInline: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        background: scrolled || open ? 'rgba(10, 7, 5, 0.82)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 72 : 92,
          transition: 'height 0.4s ease',
        }}
      >
        <a
          href="#top"
          aria-label="Decant — home"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            fontSize: '1.55rem',
            letterSpacing: '0.42em',
            paddingLeft: '0.42em',
            color: 'var(--cream)',
            textDecoration: 'none',
          }}
        >
          DECANT
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href={site.reserveHref} className="btn-gold" style={{ padding: '0.7rem 1.6rem' }}>
            Reserve
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="nav-mobile" data-open={open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.reserveHref}
          className="btn-gold"
          onClick={() => setOpen(false)}
          style={{ marginTop: '2rem', width: '100%' }}
        >
          Reserve a Table
        </a>
        <p style={{ marginTop: '2rem', textAlign: 'center' }} className="body">
          {site.address}
          <br />
          <a href={site.phoneHref} style={{ color: 'var(--gold-light)' }}>
            {site.phone}
          </a>
        </p>
      </div>
    </header>
  )
}
