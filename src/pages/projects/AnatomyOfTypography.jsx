import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title = 'Anatomy of Typography'
const role = 'Graphic Designer'
const year = '2025'
const description = 'An educational typography poster created to explain key anatomical parts of letterforms through clear hierarchy and expressive layout.'
const tools = ['Adobe Illustrator']
const liveLink = ''
const githubLink = ''

const images = [
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/eb161d218385693.Y3JvcCw0MDQsMzE2LDIwOCwzMTA.png',
    alt: 'Anatomy of Typography poster preview',
    caption: 'Poster study focused on the terminology and structure of type anatomy.',
  },
]

const deliverables = [
  'Typography poster design',
  'Type anatomy study',
  'Visual hierarchy',
  'Educational layout design',
]

const AnatomyOfTypography = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {images[0] && (
        <button onClick={() => setSelected(0)} className="group w-full text-left focus:outline-none">
          <div className="overflow-hidden bg-[#95B1EE] rounded-2xl p-3">
            <img src={images[0].src} alt={images[0].alt} className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
          </div>
          {images[0].caption && <p className="text-xs text-muted mt-3">{images[0].caption}</p>}
        </button>
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

export default AnatomyOfTypography
