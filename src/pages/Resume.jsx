import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Resume</h1>
          <div className="text-white space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Front-End Developer</h3>
                  <p className="text-white/80">Company Name • 2023 - Present</p>
                  <p className="text-white/70 mt-2">
                    Developing modern web applications using React, TypeScript, and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'CSS', 'HTML', 'Design', 'UI/UX'].map((skill) => (
                  <span key={skill} className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
