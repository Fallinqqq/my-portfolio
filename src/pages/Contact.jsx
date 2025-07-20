import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "grace@gracefoster.com",
      link: "mailto:grace@gracefoster.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Connect</h1>
          <p className="text-xl text-accent-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent-400 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, goals, timeline, or any questions you might have..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-400 to-accent-600 hover:from-accent-500 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm text-center">
                Prefer email? Reach out directly at{' '}
                <a href="mailto:grace@gracefoster.com" className="text-accent-300 hover:text-accent-400 transition-colors duration-300">
                  grace@gracefoster.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-accent-400 p-3 rounded-full">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-accent-300 hover:text-accent-400 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white/80">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Response Time:</span>
                  <span className="text-accent-300 font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Project Start:</span>
                  <span className="text-accent-300 font-semibold">2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Time Zone:</span>
                  <span className="text-accent-300 font-semibold">PST (UTC-8)</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Services I Offer</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Web Development (React, Next.js)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Brand Identity Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Website Redesign</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Design Consultation</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon 
                      className="text-2xl text-white group-hover:text-accent-300 transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What's your typical project timeline?</h4>
              <p className="text-white/80">
                Most projects take 2-6 weeks depending on complexity. I'll provide a detailed timeline after our initial consultation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Do you work with remote clients?</h4>
              <p className="text-white/80">
                Absolutely! I work with clients worldwide and have extensive experience with remote collaboration tools.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What's included in your web development service?</h4>
              <p className="text-white/80">
                Full responsive design, performance optimization, SEO basics, cross-browser compatibility, and post-launch support.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Do you offer ongoing maintenance?</h4>
              <p className="text-white/80">
                Yes! I provide maintenance packages to keep your website updated, secure, and performing at its best.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
