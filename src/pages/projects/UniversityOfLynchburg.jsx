import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'University of Lynchburg'
const role        = 'Web Designer'
const year        = 'August 2025- May 2026'
const description = 'Web design for the University of Lynchburg. Included page layouts, promotional graphics, and campaign assets.'
const tools       = ['Wordpress', 'Elementor']
const liveLink    = 'https://www.lynchburg.edu'
const githubLink  = ''

const images = [
  { src: '/images/screencapture-lynchburg-edu-student-life-campus-traditions-2026-04-02-11_30_41.png', alt: 'University of Lynchburg – Campus Traditions page', caption: 'Campus Traditions' },
  { src: '/images/screencapture-lynchburg-edu-student-life-student-spaces-2026-04-02-11_30_49.png', alt: 'University of Lynchburg – Student Spaces page', caption: 'Student Spaces' },
]

const deliverables = [
  'Page layouts',
  'Promotional graphics',
  'Campaign assets',
  'Digital banners',
]

const UniversityOfLynchburg = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {/* Page Screenshots Grid */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Pages</p>
        <div className="grid grid-cols-2 gap-5">
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
                {/* Hover overlay */}
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
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
            >
              ×
            </button>
            <img src={images[selected].src} alt={images[selected].alt} className="max-h-[80vh] max-w-full object-contain rounded-sm" />
            {images[selected].caption && (
              <p className="text-center text-sm text-white mt-3">{images[selected].caption}</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setSelected((selected - 1 + images.length) % images.length)}
                className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                ← Prev
              </button>
              <button
                onClick={() => setSelected((selected + 1) % images.length)}
                className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                Next →
              </button>
            </div>
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

export default UniversityOfLynchburg
