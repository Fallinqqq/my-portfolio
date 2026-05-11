import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title = 'Dream Brewery – Branding Identity'
const role = 'Brand Designer'
const year = '2024'
const description = 'A dreamy brand identity system for a brewery and café concept, built around the Creative Archetype with logo, visual language, and mockups.'
const tools = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign']
const liveLink = ''
const githubLink = ''

const images = [
  { src: '/images/Dream1.png', alt: 'Dream Brewery brand board', caption: 'Brand board featuring logo system, palette, fonts, and mockup direction.' },
  { src: '/images/Dream2.png', alt: 'Dream Brewery carton mockup', caption: 'Starry Espresso packaging mockup for Dream Brewery.' },
  { src: '/images/Dream3.png', alt: 'Dream Brewery can mockup', caption: 'Sparkling Brew Tea can concept extending the brand identity.' },
]

const deliverables = [
  'Logo and visual identity',
  'Brand guide design',
  'Packaging and mockups',
  'Creative archetype strategy',
]

const DreamBrewery = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {images[0] && (
        <button onClick={() => setSelected(0)} className="group w-full text-left focus:outline-none">
          <div className="overflow-hidden bg-[#EEECEA] rounded-2xl p-3">
            <img src={images[0].src} alt={images[0].alt} className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
          </div>
          {images[0].caption && <p className="text-xs text-muted mt-3">{images[0].caption}</p>}
        </button>
      )}

      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(1).map((img, i) => (
            <button key={i} onClick={() => setSelected(i + 1)} className="group w-full text-left focus:outline-none">
              <div className="overflow-hidden bg-[#EEECEA] rounded-2xl p-3">
                <img src={img.src} alt={img.alt} className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              {img.caption && <p className="text-xs text-muted mt-3">{img.caption}</p>}
            </button>
          ))}
        </div>
      )}

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setSelected(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
            >×</button>
            <img src={images[selected].src} alt={images[selected].alt} className="max-h-[80vh] max-w-full object-contain rounded-sm" />
            {images[selected].caption && <p className="text-center text-sm text-white mt-3">{images[selected].caption}</p>}
            <div className="flex justify-between mt-4 w-full">
              <button onClick={() => setSelected((selected - 1 + images.length) % images.length)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">← Prev</button>
              <button onClick={() => setSelected((selected + 1) % images.length)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Next →</button>
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

export default DreamBrewery
