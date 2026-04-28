import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from 'react-icons/fa'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/Fallinqqq', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/gracekfoster/', label: 'LinkedIn' },
  { icon: FaBehance, url: 'https://www.behance.net/gracefostaa', label: 'Behance' },
  { icon: FaEnvelope, url: 'mailto:gkfoster15@gmail.com', label: 'Email' },
]

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

  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Graphic Design', 'Web Design']
  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-28">

          {/* Large editorial intro paragraph */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xl sm:text-2xl md:text-[2rem] lg:text-[2.5rem] text-ink max-w-5xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.3' }}
          >
            Hello There! I'm Grace Foster, a creative graphic designer specializing in{' '}
            <em className="font-semibold text-accent">Web design</em>,{' '}
            <em className="font-semibold text-accent">Brand design</em>, and{' '}
            <em className="font-semibold text-accent">Print design</em>.
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="mt-6 sm:mt-8 text-ink leading-relaxed max-w-4xl"
            style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            I help brands tell their stories through cohesive visuals and user-friendly web
            experiences that look great and work beautifully.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Link to="/contact" className="btn-primary">Get in touch</Link>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-ink transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
          <path d="M0,92 C150,42 250,42 300,72 C380,98 500,98 600,92 L600,160 L0,160 Z" fill="#e8dfd0" />
          <text fill="#4e6645" fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="1">
            <textPath ref={marqueeMobile} href="#marqueeCurveMobile" startOffset="0%">
              {Array.from({ length: 20 }).map((_, i) => (
                <tspan key={i}>Dream Big <tspan fill="#603913">✿</tspan> Work Confidently <tspan fill="#603913">✿</tspan>{'   '}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
        {/* Desktop */}
        <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" className="w-full hidden sm:block">
          <defs>
            <path id="marqueeCurve" d="M0,92 C300,42 500,42 720,72 C940,98 1200,98 1440,92" />
          </defs>
          <path d="M0,92 C300,42 500,42 720,72 C940,98 1200,98 1440,92 L1440,160 L0,160 Z" fill="#e8dfd0" />
          <text fill="#4e6645" fontSize="22" fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="1">
            <textPath ref={marqueeDesktop} href="#marqueeCurve" startOffset="0%">
              {Array.from({ length: 30 }).map((_, i) => (
                <tspan key={i}>Dream Big <tspan fill="#603913">✿</tspan> Work Confidently <tspan fill="#603913">✿</tspan>{'   '}</tspan>
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
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14 md:mb-16"
        >
          <h3 className="label-text font-bold text-ink" style={{ fontSize: '18px' }}>View My Work</h3>
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 tracking-wide transition-colors duration-200 border font-semibold rounded-full ${
                  activeCategory === cat
                    ? 'border-accent bg-accent text-[#fbf3e7]'
                    : 'border-soft text-muted hover:border-ink hover:bg-ink hover:text-[#fbf3e7]'
                }`}
                style={{ fontSize: '15px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="text-ink group-hover:text-muted transition-colors duration-200 mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed" style={{ fontSize: '18px' }}>{project.description}</p>
                  </div>
                  <span className="text-muted text-xl ml-4 mt-0.5 group-hover:translate-x-1 transition-transform duration-200 shrink-0">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      </section>


    </div>
  )
}

export default Home
