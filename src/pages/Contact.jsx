import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const initialFormData = {
  firstName: '', lastName: '', email: '', businessName: '',
  graphicDesign: false, webDesign: false,
  dueDate: '', description: '', additionalComments: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
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
        setFormData(initialFormData)
      }
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:gracefosterdesigns@gmail.com', text: 'gracefosterdesigns@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gracekfoster/', text: 'linkedin.com/in/gracekfoster' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/gracefosterdesigns/', text: 'instagram.com/gracefosterdesigns' },
    { icon: FaFacebook, label: 'Facebook', href: '#', text: 'Facebook' },
  ]

  return (
    <div className="min-h-screen">
      <title>Contact | Grace Foster</title>
      <meta name="description" content="Get in touch with Grace Foster for graphic design, branding, or web design projects." />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 md:pb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
            className="text-ink"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
          >
            <span style={{ textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'var(--color-soft)', textUnderlineOffset: '6px' }}>
              Got a vision in mind?
            </span>{' '}
            Send over the details below, and let's see how we can work together!
          </motion.h1>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <div className="bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 md:pb-24">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}
        >
          {submitted ? (
            <div className="py-16 text-center">
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
              className="space-y-9 text-left"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden><input name="bot-field" /></div>

              {/* Name */}
              <div>
                <p className="field-label">Name</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label htmlFor="firstName" className="field-sublabel">First Name <span className="field-required">(required)</span></label>
                    <input
                      type="text" id="firstName" name="firstName"
                      value={formData.firstName} onChange={handleChange}
                      required
                      className="form-field-sharp"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="field-sublabel">Last Name <span className="field-required">(required)</span></label>
                    <input
                      type="text" id="lastName" name="lastName"
                      value={formData.lastName} onChange={handleChange}
                      required
                      className="form-field-sharp"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="field-label block">Email <span className="field-required">(required)</span></label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required
                  className="form-field-sharp mt-3"
                />
              </div>

              {/* Business name */}
              <div>
                <label htmlFor="businessName" className="field-label block">Business name <span className="field-required">(required)</span></label>
                <p className="field-hint">What's the name of your business? If it's just for you, write personal.</p>
                <input
                  type="text" id="businessName" name="businessName"
                  value={formData.businessName} onChange={handleChange}
                  required
                  className="form-field-sharp"
                />
              </div>

              {/* Project type */}
              <div>
                <p className="field-label">What kind of project? <span className="field-required">(required)</span></p>
                <div className="mt-3 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="graphicDesign"
                      checked={formData.graphicDesign} onChange={handleChange}
                      className="checkbox-sharp"
                    />
                    <span className="text-sm text-ink">Graphic Design</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="webDesign"
                      checked={formData.webDesign} onChange={handleChange}
                      className="checkbox-sharp"
                    />
                    <span className="text-sm text-ink">Web Design</span>
                  </label>
                </div>
              </div>

              {/* Due date */}
              <div>
                <label htmlFor="dueDate" className="field-label block">When is this project due? <span className="field-required">(required)</span></label>
                <p className="field-hint">If you don't know the exact day, give me an estimate.</p>
                <input
                  type="date" id="dueDate" name="dueDate"
                  value={formData.dueDate} onChange={handleChange}
                  required
                  className="form-field-sharp sm:w-64"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="field-label block">Describe your project <span className="field-required">(required)</span></label>
                <p className="field-hint">Details, details, details! Send me inspiration, purpose, where you envision your project living, etc.</p>
                <textarea
                  id="description" name="description"
                  value={formData.description} onChange={handleChange}
                  required rows={5}
                  className="form-field-sharp resize-none"
                />
              </div>

              {/* Additional comments */}
              <div>
                <label htmlFor="additionalComments" className="field-label block">Additional comments</label>
                <p className="field-hint">Is there anything we've missed?</p>
                <textarea
                  id="additionalComments" name="additionalComments"
                  value={formData.additionalComments} onChange={handleChange}
                  rows={5}
                  className="form-field-sharp resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-dark disabled:opacity-50 hover:scale-110 transition-transform duration-200"
              >
                {isSubmitting ? 'Sending…' : 'Send It!'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Get in touch */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-12 border-t border-soft text-center"
        >
          <p className="label-text mb-5 text-muted" style={{ fontSize: '13px' }}>Keep up with me</p>
          <div className="flex items-center justify-center gap-6">
            {contactLinks.filter((l) => l.label !== 'Email').map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted hover:text-ink transition-colors duration-200"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-ink leading-relaxed mt-12 max-w-md mx-auto" style={{ fontSize: '15px' }}>
            Available for freelance, contract, and full-time opportunities
            in graphic design and web design.
          </p>
        </motion.div>

      </div>
      </div>
    </div>
  )
}

export default Contact
