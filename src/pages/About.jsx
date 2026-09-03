import { motion } from 'framer-motion'
const graceProfile = '/images/671282720_18583007320041741_1406052200752008889_n.jpg'
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const services = ['Print and Digital Design', 'Website Design and Web Management', 'Marketing Collateral Design', 'Brand Design', 'Social Media Design']
const clients = [
  { name: 'Benton Buckley Books', url: 'https://bentonbuckleybooks.com/' },
  { name: 'Justus Media Marketing', url: 'https://justusmediamarketing.com/' },
  { name: 'Steven Francis Fine Art', url: 'https://stevenfrancisfineart.com/' },
  { name: 'University of Lynchburg', url: 'https://www.lynchburg.edu/' },
  { name: 'Commvault', url: 'https://www.commvault.com/' },
  { name: 'Veye Marketing', url: 'https://veyemarketing.com/' },
]

const About = () => {
  return (
    <div className="min-h-screen">
      <title>About | Grace Foster</title>
      <meta name="description" content="About Grace Foster — graphic designer and front-end developer based in Lynchburg, VA, specialising in branding, print, and web design." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">

        {/* ── Hero: text + photo ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">

          {/* Left — Text */}
          <div className="flex flex-col">
            <motion.h1
              {...fadeUp(0)}
              className="text-accent mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(2.75rem, 7vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 0.95 }}
            >
              Hi, I'm Grace!
            </motion.h1>

            <motion.p
              {...fadeUp(0.08)}
              className="text-ink font-bold mb-8"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)', lineHeight: 1.4 }}
            >
              My name is Grace, and I'm a graphic &amp; web designer based out of{' '}
              <span className="relative inline-block text-accent px-1">
                Lynchburg, VA
                <svg
                  className="absolute pointer-events-none"
                  style={{ left: '-18%', top: '-30%', width: '136%', height: '160%' }}
                  viewBox="0 0 200 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M25,50 C20,15 70,8 100,8 C145,8 185,15 178,50 C185,88 140,93 100,93 C55,93 18,85 25,50 Z"
                    fill="none"
                    stroke="#95B1EE"
                    strokeWidth="2.5"
                  />
                </svg>
              </span>
              , currently living and working in{' '}
              <span style={{ textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: '#95B1EE', textUnderlineOffset: '4px' }}>
                São Paulo, Brazil
              </span>
            </motion.p>

            <motion.div {...fadeUp(0.14)} className="flex flex-col gap-5 mb-8">
              <p className="text-ink leading-[1.8]" style={{ fontSize: '17px' }}>
                I have a Bachelors Degree in Graphic Design from the University of Lynchburg and an Associates Degree in Information Systems Technology from Central Virginia Community College, a mix that's let me pair creative design with the technical skills to build things for branding, web, and digital media alike.
              </p>
              <p className="text-ink leading-[1.8]" style={{ fontSize: '17px' }}>
                Over the past 3+ years I've worked across branding, web design, and marketing collateral. I'm proficient in Adobe Illustrator, Photoshop, and InDesign, and I build websites using WordPress, Squarespace, Wix, and Webflow.
              </p>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-ink font-bold mb-6" style={{ fontSize: '17px' }}>
              Send me a message and we can get started!
            </motion.p>

            <motion.div {...fadeUp(0.26)}>
              <Link to="/contact" className="btn-dark inline-block hover:bg-soft hover:text-ink hover:scale-110 transition-all duration-200">
                Let's Chat
              </Link>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div {...fadeUp(0.1)} className="overflow-hidden bg-[#95B1EE] min-h-[360px] lg:min-h-0 rounded-3xl">
            <img
              src={graceProfile}
              alt="Grace Foster"
              className="w-full h-full object-cover"
              fetchpriority="high"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* ── Services / Notable Clients ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 sm:mt-24"
        >
          <div>
            <p className="mb-4 text-ink font-bold" style={{ fontSize: '17px' }}>Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-muted" style={{ fontSize: '16px' }}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-ink font-bold" style={{ fontSize: '17px' }}>Companies Worked For</p>
            <ul className="space-y-2">
              {clients.map((c) => (
                <li key={c.name} className="text-muted" style={{ fontSize: '16px' }}>{c.name}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Resume CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <a
            href="/PDF/Grace_Foster_Resume_2026.pdf"
            download="Grace_Foster_Resume_2026.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide rounded-full bg-accent text-[#fffdf5] border border-accent hover:bg-soft hover:text-ink hover:border-soft hover:scale-110 transition-all duration-200"
          >
            <FaDownload size={13} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default About
