import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

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
      href: "mailto:hello@gracefoster.com",
      text: "hello@gracefoster.com"
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
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "San Francisco, CA"
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
      return (
    <div className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-light mb-6">Get in Touch</h1>
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
            className="md:col-span-3"
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-gray-200 focus:ring-0 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-gray-200 focus:ring-0 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-gray-200 focus:ring-0 transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-sm font-light tracking-wide text-white bg-black hover:bg-gray-900 transition-colors disabled:opacity-50"
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
            className="md:col-span-2 space-y-8"
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
  )
}

export default Contact
