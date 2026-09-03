import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gracekfoster/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/gracefosterdesigns/' },
  { icon: FaFacebook, label: 'Facebook', href: '#' },
]

const Footer = () => {
  return (
    <footer className="mt-auto" style={{ backgroundColor: 'var(--color-soft)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-3 items-center gap-6 text-center">
        <p className="text-lg font-bold text-ink justify-self-center sm:justify-self-start">Grace Foster Designs</p>
        <p className="text-sm text-ink justify-self-center">© 2026 Grace Foster Designs</p>
        <div className="flex items-center gap-5 justify-self-center sm:justify-self-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-ink hover:text-accent transition-colors duration-200"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
