import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Singleton Media LLC by Justus Media Marketing'
const role        = 'Web Designer'
const year        = '2026'
const description = 'Website design for Singleton Media, a nationwide video production company, built for client Justus Media Marketing.'
const tools       = ['WordPress']
const liveLink    = 'https://singletonmediallc.com/'
const githubLink  = ''

const images = [
  { src: '/images/singleton-media-homepage-full.png', alt: 'Singleton Media – Homepage', caption: 'Homepage' },
  { src: '/images/singleton-media-about-full.png', alt: 'Singleton Media – About Page', caption: 'About Page' },
  { src: '/images/singleton-media-services-full.png', alt: 'Singleton Media – Services Page', caption: 'Services Page' },
  { src: '/images/singleton-media-portfolio-full.png', alt: 'Singleton Media – Portfolio Page', caption: 'Portfolio Page' },
]

const deliverables = [
  'Website design',
  'Mobile responsive',
  'Services & portfolio pages',
  'Discovery call booking CTA',
]

const caseStudy = [
  {
    heading: 'The Challenge',
    body: 'The client wanted a website he could be proud to share with others and post across his socials — something clean, simple, and to-the-point that would represent his brand well.',
  },
  {
    heading: 'The Solution',
    body: 'I helped bring that vision to life by designing a site that’s clean, modern, and easy to read, fully responsive across devices, and built to put his work front and center.',
  },
]

const SingletonMedia = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {/* Case Study */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-6">Case Study</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {caseStudy.map((section) => (
            <div key={section.heading}>
              <h3 className="text-ink font-bold mb-2" style={{ fontSize: '17px' }}>{section.heading}</h3>
              <p className="text-ink leading-[1.8]" style={{ fontSize: '16px' }}>{section.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Screenshots */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Pages</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group text-left focus:outline-none"
            >
              <div className="relative overflow-hidden bg-[#95B1EE] rounded-sm" style={{ aspectRatio: '3/4' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Browser-bar decoration */}
                <div className="absolute top-0 inset-x-0 h-5 bg-[#e4ddd5]/90 flex items-center px-2 gap-1 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8c0b6]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8c0b6]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8c0b6]" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium px-3 py-1 bg-black/40 rounded-full whitespace-nowrap">
                    View full page ↗
                  </span>
                </div>
              </div>
              {img.caption && (
                <p className="mt-2 text-sm text-ink font-medium">{img.caption}</p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
            >
              ×
            </button>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full object-contain"
            />
            {images[selected].caption && (
              <p className="text-center text-sm text-white mt-3">{images[selected].caption}</p>
            )}
          </div>
        </div>
      )}

      {deliverables.length > 0 && (
        <div className="border-t border-soft pt-10">
          <p className="text-xs uppercase tracking-widest text-muted mb-6">Deliverables</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
            {deliverables.map((d) => (
              <li key={d} className="flex items-center gap-2 text-ink" style={{ fontSize: '16px' }}>
                <span className="w-1 h-1 rounded-full bg-muted shrink-0" />{d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </ProjectLayout>
  )
}

export default SingletonMedia
