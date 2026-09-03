import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a free consultation to understand your goals, audience, and vision. No commitment required.',
  },
  {
    number: '02',
    title: 'Proposal & Kickoff',
    description: 'You receive a clear scope, timeline, and pricing. Once approved, design work begins right away.',
  },
  {
    number: '03',
    title: 'Design & Revisions',
    description: 'I present initial concepts and we refine together. Every package includes revision rounds so you\'re always happy.',
  },
  {
    number: '04',
    title: 'Final Delivery',
    description: 'You receive all final files in the formats you need — print-ready, web-ready, or both. Project complete.',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Brand design usually takes 2–3 weeks. Web design 3–5 weeks. Print projects can be turned around in as little as 5–7 business days depending on scope.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Projects are split into a 50% deposit upfront and 50% on delivery. For larger projects, a milestone-based schedule can be arranged.',
  },
  {
    q: 'What if I need something not listed here?',
    a: 'These packages cover my most common requests, but every project is unique. Reach out and I\'ll put together a custom quote tailored to your needs.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Just a brief overview of your project, your timeline, and any inspiration or examples you love. I\'ll handle the rest.',
  },
  {
    q: 'Do you work with clients outside the US?',
    a: 'Absolutely. I work remotely with clients worldwide. Communication is handled via email, video call, or whatever works best for you.',
  },
]

const whyMe = [
  {
    label: 'Clear Communication',
    body: "No guessing games. You'll always know what stage your project is in and when to expect updates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    label: 'On-Time Delivery',
    body: 'Deadlines are taken seriously. I build realistic timelines and stick to them.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Design That Works',
    body: "Pretty isn't enough — every design decision is made with your audience and goals in mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: 'One Designer, Start to Finish',
    body: 'You work directly with me, not a rotating team. Consistent vision, consistent quality.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

// FAQ accordion item
const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-[#d6cfc4]">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-6 text-left gap-4 group"
    >
      <span
        className="text-ink font-semibold group-hover:text-accent transition-colors duration-200"
        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
      >
        {faq.q}
      </span>
      <span
        className="shrink-0 w-7 h-7 rounded-full border border-[#d6cfc4] flex items-center justify-center transition-all duration-300"
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', borderColor: isOpen ? 'var(--color-accent)' : undefined }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p
            className="text-muted leading-relaxed pb-6"
            style={{ fontSize: '15px', fontFamily: 'var(--font-heading)' }}
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const pricingTiers = [
  {
    title: 'Print & Marketing',
    price: '$150',
    unit: 'starting at',
    description: 'Eye-catching print materials that make a lasting impression.',
    features: [
      'Flyers, brochures & posters',
      'Social media graphics',
      'Print-ready files (CMYK)',
      'Custom sizing & layouts',
      '2 rounds of revisions',
    ],
  },
  {
    title: 'Brand Design',
    price: '$450',
    unit: 'starting at',
    description: "A cohesive visual identity that tells your brand's story.",
    featured: true,
    features: [
      'Logo design (3 concepts)',
      'Color palette & typography',
      'Brand style guide',
      'Business card design',
      '2 rounds of revisions',
    ],
  },
  {
    title: 'Web Design',
    price: '$850',
    unit: 'starting at',
    description: 'Clean, user-friendly websites built from scratch or on the platform that fits you best: WordPress, Squarespace, Webflow, or Framer.',
    features: [
      'Built from scratch or on your platform',
      'WordPress, Squarespace, Webflow & Framer',
      'Up to 5-page design',
      'Mobile-responsive layouts',
      'UI component library',
      'Prototype / mockup delivery',
      '2 rounds of revisions',
    ],
  },
]

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  return (
    <div className="min-h-screen">
      <title>Pricing | Grace Foster</title>
      <meta name="description" content="Graphic design and web design pricing packages from Grace Foster. Transparent rates for branding, print, and web projects." />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="border-b border-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="label-text mb-6"
            style={{ fontSize: '18px' }}
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
            className="heading-lg text-ink"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            Straightforward pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-4 text-muted max-w-xl"
            style={{ fontSize: '16px', fontFamily: 'var(--font-heading)' }}
          >
            Simple packages to get your project started. Custom quotes available — just reach out.
          </motion.p>
        </div>
      </div>

      {/* ── Pricing Cards ────────────────────────────────────────── */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-2xl p-7 sm:p-8 border ${
                  tier.featured
                    ? 'border-accent bg-accent text-white shadow-xl shadow-accent/20 md:-mt-4 md:-mb-4'
                    : 'border-[#d6cfc4] bg-card text-ink'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="bg-white text-accent text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <p
                  className={`text-sm font-semibold tracking-widest uppercase mb-4 ${tier.featured ? 'text-white/70' : 'text-muted'}`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {tier.title}
                </p>
                <div className="mb-1 flex items-end gap-2">
                  <span
                    className={`text-[2.6rem] font-bold leading-none ${tier.featured ? 'text-white' : 'text-ink'}`}
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className={`text-xs mb-5 ${tier.featured ? 'text-white/60' : 'text-muted'}`}>{tier.unit}</p>
                <p
                  className={`text-sm leading-relaxed mb-7 ${tier.featured ? 'text-white/80' : 'text-muted'}`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {tier.description}
                </p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${tier.featured ? 'text-white' : 'text-ink'}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-white/70' : 'text-accent'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-auto text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 border ${
                    tier.featured
                      ? 'bg-white text-accent border-white hover:bg-transparent hover:text-white hover:border-white'
                      : 'bg-transparent text-ink border-[#d6cfc4] hover:bg-ink hover:text-white hover:border-ink'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get in touch
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work With Me ─────────────────────────────────────── */}
      <section className="w-full bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="label-text mb-4" style={{ fontSize: '18px' }}>Why me</p>
            <h2
              className="text-3xl sm:text-4xl text-ink max-w-xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              Design you can trust, from a designer who cares.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {whyMe.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-7 border border-[#d6cfc4] flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <p
                  className="text-ink font-semibold"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                >
                  {item.label}
                </p>
                <p className="text-muted leading-relaxed" style={{ fontSize: '15px', fontFamily: 'var(--font-heading)' }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="label-text mb-4" style={{ fontSize: '18px' }}>How it works</p>
            <h2
              className="text-3xl sm:text-4xl text-ink max-w-lg"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              A simple process, a great result.
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Connecting line — visible on md+ */}
            <div
              className="hidden md:block absolute top-5 left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] border-t border-dashed"
              style={{ borderColor: 'var(--color-accent)', opacity: 0.25 }}
            />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="flex flex-col"
              >
                {/* Number circle */}
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-5 bg-surface"
                  style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-surface)' }}
                >
                  <span
                    className="text-xs font-bold text-accent"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.number}
                  </span>
                </div>
                <p
                  className="text-ink font-semibold mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                >
                  {step.title}
                </p>
                <p className="text-muted leading-relaxed" style={{ fontSize: '14px', fontFamily: 'var(--font-heading)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="w-full bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="label-text mb-4" style={{ fontSize: '18px' }}>FAQ</p>
            <h2
              className="text-3xl sm:text-4xl text-ink max-w-lg"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              Questions you might have.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onClick={() => toggleFaq(i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl p-10 sm:p-14"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2
                  className="text-2xl sm:text-3xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em', color: '#fffdf5' }}
                >
                  Ready to start your project?
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', color: 'rgba(255,253,245,0.75)' }}>
                  Let's talk about what you need. A free consultation takes 15 minutes and comes with zero pressure.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-block px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 border border-white/60 hover:border-white hover:bg-white hover:text-accent"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#fffdf5' }}
              >
                Book a free consult
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Pricing
