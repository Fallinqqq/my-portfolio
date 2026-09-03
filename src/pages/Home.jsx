import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { projects } from '../data/projects'

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

  const scrollCarousel = (dir) => {
    const el = carouselRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Auto-advance the work highlights carousel; pauses while hovered
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    let paused = false
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    const intervalId = setInterval(() => {
      if (paused) return
      const card = el.querySelector('[data-card]')
      const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' })
      }
    }, 6500)

    return () => {
      clearInterval(intervalId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
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
            Hi, I'm Grace Foster. A designer with a focus on{' '}
            <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#364c84' }}>web design</span> &{' '}
            <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#364c84' }}>brand design</span>, who's driven by clean{' '}
            <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#364c84' }}>print design</span>. I build responsive sites with{' '}
            <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#364c84' }}>WordPress</span> and{' '}
            <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#364c84' }}>Squarespace</span>, and bring 3+ years of hands-on experience with Adobe Illustrator, InDesign, and Photoshop to every project.
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
          <path d="M0,92 C150,42 250,42 300,72 C380,98 500,98 600,92 L600,160 L0,160 Z" fill="#e7f1a8" />
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
          <path d="M0,92 C300,42 500,42 720,72 C940,98 1200,98 1440,92 L1440,160 L0,160 Z" fill="#e7f1a8" />
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
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
          className="no-scrollbar flex gap-6 sm:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 pb-2"
        >
          {highlights.map((project, index) => (
            <motion.div
              key={project.id}
              data-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="snap-start shrink-0 w-[calc(50%-12px)] sm:w-[calc(50%-20px)]"
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

        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          <button
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous projects"
            className="p-2.5 rounded-full border border-soft text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            aria-label="Next projects"
            className="p-2.5 rounded-full border border-soft text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
      </section>

      <div className="bg-surface h-16 sm:h-20 md:h-24" />

    </div>
  )
}

export default Home
