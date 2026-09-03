import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Café da Alma – Web Design'
const role        = 'Web Designer'
const year        = '2025-2026'
const description = 'Website design for Café da Alma, a bilingual Brazilian coffee and tea chain. Built as part of the Senior Thesis Exhibition 2026 — featuring a full e-commerce experience with online ordering, a shop, menu, and locations pages.'
const tools       = ['VSCode', 'Figma', 'Netlify']
const liveLink    = 'https://cafedaalma.netlify.app/'
const githubLink  = ''

const pages = [
  { src: '/images/screencapture-cafedaalma-netlify-app-2026-04-28-12_56_28.png',         alt: 'Café da Alma – Homepage',      caption: 'Homepage' },
  { src: '/images/screencapture-cafedaalma-netlify-app-order-2026-04-28-12_58_35.png',   alt: 'Café da Alma – Order Online',  caption: 'Order Online' },
  { src: '/images/screencapture-cafedaalma-netlify-app-menu-2026-04-28-12_56_52.png',    alt: 'Café da Alma – Menu',          caption: 'Menu' },
  { src: '/images/screencapture-cafedaalma-netlify-app-shop-2026-04-28-12_57_46.png',    alt: 'Café da Alma – Shop',          caption: 'Shop' },
  { src: '/images/screencapture-cafedaalma-netlify-app-locations-2026-04-28-12_58_01.png', alt: 'Café da Alma – Locations',   caption: 'Locations' },
  { src: '/images/screencapture-cafedaalma-netlify-app-checkout-2026-04-28-12_58_45.png',                    alt: 'Café da Alma – Checkout',              caption: 'Checkout' },
  { src: '/images/screencapture-cafedaalma-netlify-app-shop-merchandise-2026-04-28-13_03_23.png',           alt: 'Café da Alma – Merch',                 caption: 'Merch' },
  { src: '/images/screencapture-cafedaalma-netlify-app-shop-packaged-coffee-tea-2026-04-28-13_03_30.png',   alt: 'Café da Alma – Packaged Coffee & Tea',  caption: 'Packaged Coffee & Tea' },
]

const deliverables = [
  'Website design',
  'E-commerce / online ordering',
  'Menu page',
  'Shop page',
  'Locations page',
  'Mobile responsive',
  'Typography system',
  'Brand-consistent UI',
]

const CafeDaAlmaWeb = () => {
  const [selected, setSelected] = useState(null)

  return (
    <ProjectLayout
      title={title} role={role} year={year} description={description}
      tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
    >
      {/* Page Screenshots */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-4">Pages</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {pages.map((img, i) => (
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
              src={pages[selected].src}
              alt={pages[selected].alt}
              className="w-full object-contain"
            />
            {pages[selected].caption && (
              <p className="text-center text-sm text-white mt-3">{pages[selected].caption}</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setSelected((selected - 1 + pages.length) % pages.length)}
                className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                ← Prev
              </button>
              <button
                onClick={() => setSelected((selected + 1) % pages.length)}
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

export default CafeDaAlmaWeb
