import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:gkfoster15@gmail.com",
      text: "gkfoster15@gmail.com"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gracefoster",
      text: "linkedin.com/in/gracefoster"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/gracefoster",
      text: "github.com/gracefoster"
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/gracefoster",
      color: "#0077B5"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/gracefoster",
      color: "#333"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/gracefoster",
      color: "#1DA1F2"
    }
  ]

  return (
    <div className="pt-24 pb-8 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl mb-6" style={{ fontFamily: '"Helvetica", "Arial", sans-serif', fontWeight: 600, fontStyle: 'normal' }}>Get in Touch</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 relative"
          >
            {/* Light grey curved background with opacity */}
            <div className="absolute inset-0 bg-gray-200/60 rounded-2xl -z-10"></div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6 p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-100 focus:border-gray-300 focus:ring-0 rounded-md shadow-sm transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-100 focus:border-gray-300 focus:ring-0 rounded-md shadow-sm transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/90 border border-gray-100 focus:border-gray-300 focus:ring-0 rounded-md shadow-sm transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white bg-black hover:bg-gray-800 transition-colors disabled:opacity-50 rounded-md shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-6 px-2 md:px-6 py-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-black transition-colors"
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm">{link.text}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
