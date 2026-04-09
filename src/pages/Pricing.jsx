import { motion } from 'framer-motion'
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
  { label: 'Clear Communication', body: 'No guessing games. You\'ll always know what stage your project is in and when to expect updates.' },
  { label: 'On-Time Delivery', body: 'Deadlines are taken seriously. I build realistic timelines and stick to them.' },
  { label: 'Design That Works', body: 'Pretty isn\'t enough — every design decision is made with your audience and goals in mind.' },
  { label: 'One Designer, Start to Finish', body: 'You work directly with me, not a rotating team. Consistent vision, consistent quality.' },
]

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
  return (
    <div className="min-h-screen">

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col rounded-2xl p-7 sm:p-8 border ${
                  tier.featured
                    ? 'border-accent bg-accent text-[#fbf3e7]'
                    : 'border-[#d6cfc4] bg-card text-ink'
                }`}
              >
                <p
                  className={`text-sm font-semibold tracking-widest uppercase mb-4 ${tier.featured ? 'text-[#fbf3e7]/70' : 'text-muted'}`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {tier.title}
                </p>
                <div className="mb-1">
                  <span
                    className={`text-[2.6rem] font-bold leading-none ${tier.featured ? 'text-[#fbf3e7]' : 'text-ink'}`}
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em' }}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className={`text-xs mb-5 ${tier.featured ? 'text-[#fbf3e7]/60' : 'text-muted'}`}>{tier.unit}</p>
                <p
                  className={`text-sm leading-relaxed mb-7 ${tier.featured ? 'text-[#fbf3e7]/80' : 'text-muted'}`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {tier.description}
                </p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${tier.featured ? 'text-[#fbf3e7]' : 'text-ink'}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-[#fbf3e7]/60' : 'text-accent'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-auto text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 border ${
                    tier.featured
                      ? 'bg-[#fbf3e7] text-accent border-[#fbf3e7] hover:bg-transparent hover:text-[#fbf3e7]'
                      : 'bg-transparent text-ink border-[#d6cfc4] hover:bg-ink hover:text-[#fbf3e7] hover:border-ink'
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
                className="bg-card rounded-2xl p-7 border border-[#d6cfc4]"
              >
                <p
                  className="text-ink font-semibold mb-2"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span
                  className="text-[3rem] font-bold leading-none mb-4 text-accent opacity-30"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.number}
                </span>
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

          <div className="divide-y divide-[#d6cfc4]">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="py-7"
              >
                <p
                  className="text-ink font-semibold mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                >
                  {faq.q}
                </p>
                <p className="text-muted leading-relaxed" style={{ fontSize: '15px', fontFamily: 'var(--font-heading)' }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
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
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border border-[#d6cfc4] rounded-2xl p-10 sm:p-14 bg-card"
          >
            <div className="max-w-lg">
              <h2
                className="text-2xl sm:text-3xl text-ink mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em' }}
              >
                Ready to start your project?
              </h2>
              <p className="text-muted leading-relaxed" style={{ fontSize: '16px', fontFamily: 'var(--font-heading)' }}>
                Let's talk about what you need. A free consultation takes 15 minutes and comes with zero pressure.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary shrink-0"
            >
              Book a free consult
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Pricing
