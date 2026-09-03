import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Brand Identity System'
const role        = 'Brand Designer'
const year        = '2023'
const description = 'A comprehensive brand identity system created for a modern wellness company. Included logo design, typography selection, color palette development, and a full brand guidelines document.'
const tools       = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
const liveLink    = 'https://behance.net/yourusername'
const githubLink  = ''

const images = [
  {
    src: '/images/BehanceBrandGuide_Willow-Word_FOSTER-01.png',
    alt: 'Brand Identity System – brand guide cover',
    caption: '',
  },
]

const deliverables = [
  'Logo design & variations',
  'Typography system',
  'Color palette',
  'Brand guidelines document',
  'Marketing collateral templates',
]

const BrandIdentity = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {images[0] && (
        <button onClick={() => setSelected(0)} className="group w-full text-left focus:outline-none">
          <div className="overflow-hidden bg-[#95B1EE]">
            <img src={images[0].src} alt={images[0].alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          </div>
          {images[0].caption && <p className="text-xs text-muted mt-3">{images[0].caption}</p>}
        </button>
      )}

      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(1).map((img, i) => (
            <button key={i} onClick={() => setSelected(i + 1)} className="group w-full text-left focus:outline-none">
              <div className="overflow-hidden bg-[#95B1EE]">
                <img src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
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
            {images.length > 1 && (
              <div className="flex justify-between mt-4 w-full">
                <button onClick={() => setSelected((selected - 1 + images.length) % images.length)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">← Prev</button>
                <button onClick={() => setSelected((selected + 1) % images.length)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Next →</button>
              </div>
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

export default BrandIdentity
