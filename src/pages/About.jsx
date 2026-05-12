import { motion } from 'framer-motion'
const graceProfile = '/images/671282720_18583007320041741_1406052200752008889_n.jpg'
import { FaDownload } from 'react-icons/fa'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const designSkills = ['Graphic Design', 'Web Design', 'Brand Design', 'Social Media Design', 'Print Design', 'Marketing Collateral Design']
const devSkills = ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Lightroom', 'Affinity', 'Figma', 'Canva']
const devSkills2 = ['Wordpress (Elementor, Avada, Woo-Commerce)', 'Squarespace', 'Framer', 'HTML', 'CSS', 'JS']

const About = () => {
  return (
    <div className="min-h-screen">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="border-b border-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
          <motion.p {...fadeUp(0)} className="label-text mb-5" style={{ fontSize: '18px' }}>About</motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl md:text-5xl text-ink"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Graphic &amp; Web Designer<br />
            <em>based in Lynchburg, Virginia</em>
          </motion.h1>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24">

          {/* Left — Photo */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-5">
            <div className="overflow-hidden bg-[#EEECEA] aspect-[3/4] max-w-xs md:max-w-none">
              <img
                src={graceProfile}
                alt="Grace Foster"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Right — Bio + Skills + Experience */}
          <div className="flex flex-col gap-14">

            {/* Bio */}
            <motion.div {...fadeUp(0.2)}>
              <p className="text-ink leading-[1.9] mb-5" style={{ fontSize: '18px' }}>
                I am a Graphic and Web designer with about 3 years of experience in branding, web design, and marketing collateral. I have a Bachelors Degree in Graphic Design and an Associates Degree in Information Systems Technology. This background has allowed me to mix creative design with the technical skills help build things for branding, web, and even digital media assets. I am proficient in Adobe Illustrator, Photoshop, and InDesign, and I build websites using WordPress, Squarespace, and Webflow.
              </p>
              <p className="text-muted leading-[1.9]" style={{ fontSize: '18px' }}>
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-8 text-ink font-semibold" style={{ fontSize: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Capabilities</p>

              {/* Mobile: stacked sections, no columns */}
              <div className="sm:hidden flex flex-col gap-8">
                <div>
                  <p className="font-medium text-ink mb-4" style={{ fontSize: '16px' }}>Skills</p>
                  <ul className="space-y-2">
                    {designSkills.map((s) => (
                      <li key={s} className="text-muted flex items-center gap-2" style={{ fontSize: '16px' }}>
                        <span className="text-accent shrink-0" style={{ fontSize: '12px', lineHeight: 1 }}>✿</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-ink mb-4" style={{ fontSize: '16px' }}>Tools</p>
                  <ul className="space-y-2">
                    {[...devSkills, ...devSkills2].map((s) => (
                      <li key={s} className="text-muted flex items-center gap-2" style={{ fontSize: '16px' }}>
                        <span className="text-accent shrink-0" style={{ fontSize: '12px', lineHeight: 1 }}>✿</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop: 3 columns */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-10">
                <div>
                  <p className="font-medium text-ink mb-4" style={{ fontSize: '16px' }}>Skills</p>
                  <ul className="space-y-2">
                    {designSkills.map((s) => (
                      <li key={s} className="text-muted flex items-center gap-2" style={{ fontSize: '16px' }}>
                        <span className="text-accent shrink-0" style={{ fontSize: '12px', lineHeight: 1 }}>✿</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-ink mb-4" style={{ fontSize: '16px' }}>Tools</p>
                  <ul className="space-y-2">
                    {devSkills.map((s) => (
                      <li key={s} className="text-muted flex items-center gap-2" style={{ fontSize: '16px' }}>
                        <span className="text-accent shrink-0" style={{ fontSize: '12px', lineHeight: 1 }}>✿</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-ink mb-4" style={{ fontSize: '16px' }}>&nbsp;</p>
                  <ul className="space-y-2">
                    {devSkills2.map((s) => (
                      <li key={s} className="text-muted flex items-center gap-2" style={{ fontSize: '16px' }}>
                        <span className="text-accent shrink-0" style={{ fontSize: '12px', lineHeight: 1 }}>✿</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="mb-8 text-ink font-semibold" style={{ fontSize: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Experience</p>
              <div className="space-y-8 border-l border-soft pl-6">
                {[
                  {
                    role: 'Gallery Graphic & Web Design Intern',
                    company: 'Steven Francis Fine Art — Lynchburg, VA',
                    period: 'Jan 2026 — May 2026',
                    desc: 'Edit, create, and update the gallery website via Squarespace. Implement SEO best practices to improve search rankings. Maintain brand consistency across digital and social platforms using Adobe Photoshop and Canva. Design and produce client and gallery exhibition booklets using Mixbook.',
                  },
                  {
                    role: 'Digital Media Assistant',
                    company: 'University of Lynchburg — Lynchburg, VA',
                    period: 'Aug 2025 — May 2026',
                    desc: 'Design and maintain university webpages using WordPress and Elementor. Published the "Campus Traditions" and "Student Spaces" pages. Uphold brand standards across all webpages and curate events to the campus-wide digital calendar.',
                  },
                  {
                    role: 'Graphic Design Intern',
                    company: 'Commvault — Lynchburg, VA',
                    period: 'Jun 2025 — Aug 2025',
                    desc: 'Collaborated with an in-house design team to produce marketing collateral including infographics, datasheets, whitepapers, web assets, and e-books for multilingual campaigns. Optimized workflows using Adobe Creative Suite, Smartsheet, and Optimizely.',
                  },
                  {
                    role: 'Web Designer',
                    company: 'Veye Marketing — Lynchburg, VA',
                    period: 'May 2024 — Dec 2024',
                    desc: 'Designed responsive, user-focused websites using WordPress with the Avada theme. Created wireframes and interactive prototypes in Figma. Integrated visual and interactive elements for cohesive, brand-consistent web experiences.',
                  },
                  {
                    role: 'Web Design Intern',
                    company: 'Web Design Intern',
                    period: 'Aug 2023 — May 2024',
                    desc: 'Assisted in designing user-friendly WordPress websites, contributing to front-end layouts and content structure. Created wireframes and prototypes in Figma to plan user flows and page layouts.',
                  },
                ].map((item) => (
                  <div key={item.role} className="relative">
                    <span className="absolute text-accent" style={{ left: 'calc(-1.5rem)', top: '0px', transform: 'translateX(-50%)', fontSize: '16px', lineHeight: 1 }}>✿</span>
                    <p className="font-medium text-ink" style={{ fontSize: '16px' }}>{item.role}</p>
                    <p className="text-accent" style={{ fontSize: '16px' }}>{item.company}</p>
                    <p className="text-muted mt-0.5 mb-2" style={{ fontSize: '16px' }}>{item.period}</p>
                    <p className="text-muted leading-relaxed" style={{ fontSize: '16px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resume CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/PDF/Grace_Foster_Resume_2026.pdf"
                download="Grace_Foster_Resume_2026.pdf"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FaDownload size={13} />
                Download Resume
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
