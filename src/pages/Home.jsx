import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { projects } from '../data/projects'

const hl = { fontWeight: 700, fontStyle: 'italic', color: '#364c84' }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Home = () => {
  const marqueeDesktop = useRef(null)
  const marqueeMobile = useRef(null)

  // Never-stop marquee: uses Date.now() so position is correct even after tab switch
  useEffect(() => {
    const DURATION_DESKTOP = 28000
    const DURATION_MOBILE = 18000
    const startTime = Date.now()
    let rafId

    const tick = () => {
      const elapsed = Date.now() - startTime
      const desktop = ((elapsed % DURATION_DESKTOP) / DURATION_DESKTOP) * 100
      const mobile  = ((elapsed % DURATION_MOBILE)  / DURATION_MOBILE)  * 100
      if (marqueeDesktop.current) marqueeDesktop.current.setAttribute('startOffset', `-${desktop}%`)
      if (marqueeMobile.current)  marqueeMobile.current.setAttribute('startOffset',  `-${mobile}%`)
      rafId = requestAnimationFrame(tick)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  const highlights = projects.slice(0, 6)
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const getScrollStep = (el) => {
    const card = el.querySelector('[data-card]')
    if (!card) return el.clientWidth * 0.8
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    return card.offsetWidth + gap
  }

  const scrollCarousel = (dir) => {
    const el = carouselRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    if (dir === 1 && el.scrollLeft >= maxScroll - 5) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (dir === -1 && el.scrollLeft <= 5) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: dir * getScrollStep(el), behavior: 'smooth' })
    }
  }

  const scrollToIndex = (index) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollTo({ left: index * getScrollStep(el), behavior: 'smooth' })
  }

  // Track which card is active so the dot indicators stay in sync
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    let rafId
    const updateActiveIndex = () => {
      rafId = requestAnimationFrame(() => {
        const step = getScrollStep(el)
        const index = step ? Math.round(el.scrollLeft / step) : 0
        setActiveIndex(Math.max(0, Math.min(index, highlights.length - 1)))
      })
    }

    updateActiveIndex()
    el.addEventListener('scroll', updateActiveIndex, { passive: true })
    window.addEventListener('resize', updateActiveIndex)
    return () => {
      cancelAnimationFrame(rafId)
      el.removeEventListener('scroll', updateActiveIndex)
      window.removeEventListener('resize', updateActiveIndex)
    }
  }, [highlights.length])

  // Auto-advance the work highlights carousel; pauses on hover/touch and when off-screen
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    let paused = false
    let resumeTimeout
    const pause = () => {
      paused = true
      clearTimeout(resumeTimeout)
    }
    const resumeSoon = () => {
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => { paused = false }, 2500)
    }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resumeSoon)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', resumeSoon)

    let visible = true
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting },
      { threshold: 0.3 }
    )
    observer.observe(el)

    const intervalId = setInterval(() => {
      if (paused || !visible || document.hidden) return
      const amount = getScrollStep(el)
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' })
      }
    }, 6500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(resumeTimeout)
      observer.disconnect()
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resumeSoon)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resumeSoon)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <title>Grace Foster | Graphic Designer & Web Designer</title>
      <meta name="description" content="Grace Foster — graphic designer and front-end developer. Portfolio of branding, print, typography, and web design work." />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-28">

          {/* Large editorial intro paragraph */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xl sm:text-2xl md:text-[2rem] lg:text-[2.5rem] text-ink max-w-5xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.3' }}
          >
            Hi, I'm Grace Foster, a designer with{' '}
            <span style={hl}>3+ years</span> of experience in{' '}
            <span style={hl}>web design</span> and{' '}
            <span style={hl}>brand design</span>, with a love for clean{' '}
            <span style={hl}>print design</span>. I build responsive sites in{' '}
            <span style={hl}>WordPress</span> and{' '}
            <span style={hl}>Squarespace</span>, and bring Adobe Illustrator, InDesign, and Photoshop to every project.
          </motion.h1>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Link to="/contact" className="btn-primary">Get in touch</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Wave with curved scrolling text ──────────────────────── */}
      <div className="w-full overflow-hidden leading-[0] -mb-px mt-6">
        {/* Mobile */}
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" className="w-full block sm:hidden">
          <defs>
            <path id="marqueeCurveMobile" d="M0,92 C150,42 250,42 300,72 C380,98 500,98 600,92" />
          </defs>
          <path d="M0,92 C150,42 250,42 300,72 C380,98 500,98 600,92 L600,160 L0,160 Z" fill="var(--color-soft)" />
          <text fill="#364c84" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="1">
            <textPath ref={marqueeMobile} href="#marqueeCurveMobile" startOffset="0%">
              {Array.from({ length: 20 }).map((_, i) => (
                <tspan key={i}>Brand Systems <tspan fill="#95b1ee">✿</tspan> Figma / UI Design <tspan fill="#95b1ee">✿</tspan> Web Design <tspan fill="#95b1ee">✿</tspan> Editorial &amp; Packaging <tspan fill="#95b1ee">✿</tspan>{'   '}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
        {/* Desktop */}
        <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" className="w-full hidden sm:block">
          <defs>
            <path id="marqueeCurve" d="M0,92 C300,42 500,42 720,72 C940,98 1200,98 1440,92" />
          </defs>
          <path d="M0,92 C300,42 500,42 720,72 C940,98 1200,98 1440,92 L1440,160 L0,160 Z" fill="var(--color-soft)" />
          <text fill="#364c84" fontSize="22" fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="1">
            <textPath ref={marqueeDesktop} href="#marqueeCurve" startOffset="0%">
              {Array.from({ length: 30 }).map((_, i) => (
                <tspan key={i}>Brand Systems <tspan fill="#95b1ee">✿</tspan> Figma / UI Design <tspan fill="#95b1ee">✿</tspan> Web Design <tspan fill="#95b1ee">✿</tspan> Editorial &amp; Packaging <tspan fill="#95b1ee">✿</tspan>{'   '}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>

      <section id="work" className="w-full bg-soft">
      <div className="max-w-6xl lg:max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="label-text text-ink text-center" style={{ fontSize: '28px', fontWeight: 900 }}>Work Highlights</h2>
        </motion.div>

        <div
          ref={carouselRef}
          className="no-scrollbar flex gap-5 sm:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-[10%] sm:mx-0 sm:px-0 pb-2"
        >
          {highlights.map((project, index) => (
            <motion.div
              key={project.id}
              data-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="snap-center shrink-0 w-[80%] sm:w-[calc(50%-16px)] lg:w-[calc((100%-80px)/3)]"
            >
              <Link to={project.path || `/projects/${project.id}`} className="group block">
                <div className={`overflow-hidden mb-4 sm:mb-5 ${project.imageBg || 'bg-card'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.03] ${project.imageFit || 'object-cover'}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3
                  className="text-center text-ink group-hover:text-muted transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', letterSpacing: '-0.01em' }}
                >
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous projects"
            className="p-2.5 rounded-full border border-soft text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200 shrink-0"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {highlights.map((project, index) => (
              <button
                key={project.id}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={index === activeIndex}
                className={`h-2 rounded-full bg-ink transition-all duration-300 ${
                  index === activeIndex ? 'w-6' : 'w-2 opacity-25 hover:opacity-50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollCarousel(1)}
            aria-label="Next projects"
            className="p-2.5 rounded-full border border-soft text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200 shrink-0"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
      </section>

      <div className="bg-soft h-16 sm:h-20 md:h-24" />

    </div>
  )
}

export default Home
