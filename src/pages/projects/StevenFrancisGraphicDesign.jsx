import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Steven Francis Fine Art Socials & Posters'
const role        = 'Graphic Designer'
const year        = '2026–2026'
const description = 'Ongoing graphic design work for Steven Francis Fine Art Gallery in Lynchburg, VA — including exhibition posters and social media content for their Main Street and Tradewynd gallery locations.'
const tools       = ['Canva', 'Adobe Photoshop', 'Mix Book']
const liveLink    = ''
const githubLink  = ''

const posters = [
  { src: '/images/closer-to-home-richard-crozier.png', alt: 'Closer to Home – Richard Crozier exhibition poster',    caption: 'Closer to Home' },
  { src: '/images/David Campbell.png',                 alt: 'David Campbell: Paintings exhibition poster',            caption: 'David Campbell: Paintings' },
  { src: '/images/Double-Vision.png',                  alt: 'Double Vision – Sarah-Faith Strait & Aggie Zed poster', caption: 'Double Vision' },
  { src: '/images/quantum-obersevations.png',          alt: 'Quantum Observations group exhibition poster',           caption: 'Quantum Observations' },
  { src: '/images/The-Founders.png',                   alt: 'The Founders – Beverley Street Studio School poster',    caption: 'The Founders' },
]

const socialPosts = [
  { src: '/images/Social1.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social2.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social4.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social5.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social6.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social7.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social8.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social9.png',  alt: 'SFFA Instagram post' },
  { src: '/images/Social10.png', alt: 'SFFA Instagram post' },
  { src: '/images/Social11.png', alt: 'SFFA Instagram post' },
]

const deliverables = [
  'Exhibition posters',
  'Social media graphics',
  'Event announcements',
  'Print-ready files',
]

const StevenFrancisGraphicDesign = () => {
  const [posterSelected, setPosterSelected] = useState(null)
  const [socialSelected, setSocialSelected] = useState(null)

  const Lightbox = ({ images, selected, onClose, onPrev, onNext }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
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
        <div className="flex justify-between mt-4">
          <button
            onClick={onPrev}
            className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            ← Prev
          </button>
          <button
            onClick={onNext}
            className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >

      {/* Exhibition Posters */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Exhibition Posters</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {posters.map((img, i) => (
            <button
              key={i}
              onClick={() => setPosterSelected(i)}
              className="group text-left focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#f0ece6]" style={{ aspectRatio: '3/4' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium px-3 py-1 bg-black/40 rounded-full whitespace-nowrap">
                    View ↗
                  </span>
                </div>
              </div>
              {img.caption && (
                <p className="mt-2 text-sm text-ink font-medium leading-tight">{img.caption}</p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Social Media</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialPosts.map((img, i) => (
            <button
              key={i}
              onClick={() => setSocialSelected(i)}
              className="group text-left focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#f0ece6]" style={{ aspectRatio: '1/1' }}>
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
            </button>
          ))}
        </div>
      </div>

      {/* Lightboxes */}
      {posterSelected !== null && (
        <Lightbox
          images={posters}
          selected={posterSelected}
          onClose={() => setPosterSelected(null)}
          onPrev={() => setPosterSelected((posterSelected - 1 + posters.length) % posters.length)}
          onNext={() => setPosterSelected((posterSelected + 1) % posters.length)}
        />
      )}
      {socialSelected !== null && (
        <Lightbox
          images={socialPosts}
          selected={socialSelected}
          onClose={() => setSocialSelected(null)}
          onPrev={() => setSocialSelected((socialSelected - 1 + socialPosts.length) % socialPosts.length)}
          onNext={() => setSocialSelected((socialSelected + 1) % socialPosts.length)}
        />
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

export default StevenFrancisGraphicDesign
