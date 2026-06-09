'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

type RevealProps = {
  children: ReactNode
  /** delay in ms before the reveal animation starts */
  delay?: number
  /** element to render — defaults to a div */
  as?: ElementType
  className?: string
  style?: CSSProperties
}

/**
 * Reveals its children on scroll using a single IntersectionObserver.
 * Replaces the previous GSAP/Framer scroll animations with a dependency-free,
 * accessibility-aware fade-and-rise.
 */
export function Reveal({ children, delay = 0, as, className, style }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={[visible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={{ ['--reveal-delay' as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
