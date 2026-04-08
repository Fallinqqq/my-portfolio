import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const form = e.target
      const data = new FormData(form)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch {
      // silent fail — show error inline if desired
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:gkfoster15@gmail.com', text: 'gkfoster15@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/gracefoster', text: 'linkedin.com/in/gracefoster' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/gracefoster', text: 'github.com/gracefoster' },
  ]

  return (
    <div className="min-h-screen">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="border-b border-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="label-text mb-6"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
            className="heading-lg text-ink"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            Let's work together
          </motion.h1>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-24">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}
          >
            {submitted ? (
              <div className="py-16">
                <p className="text-lg text-ink mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Thank you — message received.
                </p>
                <p className="text-muted" style={{ fontSize: '16px' }}>I'll be in touch soon.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-7 bg-soft rounded-lg p-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden><input name="bot-field" /></div>

                <div>
                  <label htmlFor="name" className="block text-xs text-muted mb-2 uppercase tracking-widest">Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required
                    className="form-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-muted mb-2 uppercase tracking-widest">Email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required
                    className="form-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-muted mb-2 uppercase tracking-widest">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    required rows={6}
                    className="form-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col justify-start gap-8 pt-2"
          >
            <div>
              <p className="label-text mb-6 text-ink" style={{ fontSize: '16px' }}>Reach me directly</p>
              <div className="space-y-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-ink transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4 shrink-0" />
                    <span style={{ fontSize: '16px' }}>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-soft pt-8">
                <p className="text-ink leading-relaxed" style={{ fontSize: '16px' }}>
                Available for freelance, contract, and full-time opportunities
                in graphic design and front-end development.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact
