import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Café da Alma – Senior Thesis Exhibition 2026'
const role        = 'Graphic & Web Designer'
const year        = '2025-2026'
const description = 'A comprehensive brand identity for Café da Alma, a bilingual global café chain celebrating the vibrancy of Brazilian culture. Presented at the University of Lynchburg Senior Thesis Exhibition 2026 — spanning logo design, color system, packaging, merchandise, menus, and environmental signage.'
const tools       = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign']
const liveLink    = ''
const githubLink  = ''

const images = [
  { src: '/images/IMG_2697.jpeg', alt: 'Café da Alma – full exhibition booth display', caption: 'Exhibition Booth' },
  { src: '/images/IMG_2686.jpeg', alt: 'Café da Alma – overhead booth view', caption: 'Booth Overview' },
  { src: '/images/IMG_1589.jpeg', alt: 'Café da Alma – brand identity board', caption: 'Brand Identity' },
  { src: '/images/IMG_1593.jpeg', alt: 'Café da Alma – Grace Foster at exhibition booth', caption: 'At the Exhibition' },
  { src: '/images/IMG_1598.jpeg', alt: 'Café da Alma – Senior Thesis Exhibition group photo', caption: 'Senior Thesis Exhibition 2026' },
  { src: '/images/IMG_1588.jpeg', alt: 'Café da Alma – artist statement', caption: 'Artist Statement' },
]

const deliverables = [
  'Logo & brand identity',
  'Color system',
  'Packaging design',
  'Merchandise (tote, t-shirt)',
  'Menu design',
  'Brand guide',
  'Environmental signage',
  'Motion / digital display',
]

const CafeDaAlma = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {/* Image Gallery */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Exhibition</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group text-left focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#f0ece6]" style={{ aspectRatio: '4/3' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium px-3 py-1 bg-black/40 rounded-full whitespace-nowrap">
                    View ↗
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
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
              className="max-h-[80vh] max-w-full object-contain rounded-sm"
            />
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

      {/* Deliverables */}
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
    </ProjectLayout>
  )
}

export default CafeDaAlma
