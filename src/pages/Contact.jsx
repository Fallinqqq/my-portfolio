import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
