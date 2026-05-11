/**
 * ─────────────────────────────────────────────────────
 *  PROJECT PAGE: Commvault
 *
 *  HOW TO EDIT THIS FILE:
 *  1. Update the text fields in the INFO block below
 *  2. To add/change images: put image files in public/images/
 *     then update the `src` paths in the IMAGES block below
 *  3. To add more images, copy any <img> block and paste it
 * ─────────────────────────────────────────────────────
 */
import { useState } from 'react'
import ProjectLayout from '../../components/ProjectLayout'

// ── INFO ─────────────────────────────────────────────
const title       = 'Commvault'
const role        = 'Graphic Design Intern'
const year        = 'June 2025 – August 2025'
const description = 'Created marketing campaigns and branded assets for cross-functional teams at Commvault, including infographics, whitepapers, social concepts, and digital ads.'
const tools       = ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop']
const liveLink    = 'https://www.commvault.com/resources/infographic/establishing-minimum-viability-for-higher-education'
const githubLink  = ''   // leave empty to hide button

// ── IMAGES ───────────────────────────────────────────
const images = [
  {
    src: '/images/Commvault.png',
    alt: 'Commvault – Higher Education infographic cover',
    caption: 'Higher Education resilience infographic',
    liveUrl: 'https://www.commvault.com/resources/infographic/establishing-minimum-viability-for-higher-education',
  },
  {
    src: '/images/CVLT-Project.png',
    alt: 'Commvault – Vault Insider campaign concept board',
    caption: 'Vault Insider concept board with submark, social ad, and podcast direction',
  },
  {
    src: '/images/CVLT-Project 1.png',
    alt: 'Commvault – National Intern Day social campaign',
    caption: 'National Intern Day social campaign assets',
  },
]

const documents = [
  {
    title: 'Clumio Records Retention Requirements Education',
    src: '/images/CVLT-Clumio_Records_Retention-_Requirements_Education_v1.1-1-1.pdf',
    liveUrl: 'https://www.commvault.com/resources/infographic/records-retention-requirements-in-education-clumio',
  },
  {
    title: 'Higher Education Minimum Viability Infographic',
    src: '/images/CVLT-Establishing-Higher-Education-Minimum-Viability_Infographic_v1.2.pdf',
    liveUrl: 'https://www.commvault.com/resources/infographic/establishing-minimum-viability-for-higher-education',
  },
  {
    title: 'Clumio Backup as a Service for Amazon RDS',
    src: '/images/59.-Clumio-Backup-as-a-Service-for-Amazon-RDS-V1.3.pdf',
    liveUrl: 'https://www.commvault.com/resources/datasheet/clumio-backup-as-a-service-for-amazon-rds',
  },
]

// ── DELIVERABLES (optional bullet list) ─────────────
const deliverables = [
  'Infographics',
  'Whitepapers',
  'Data sheets',
  'Digital ads',
  'Print materials',
]
// ─────────────────────────────────────────────────────

const Commvault = () => {
  const [activePdf, setActivePdf] = useState(null)
  const [selectedImg, setSelectedImg] = useState(null)

  return (
  <>
  <ProjectLayout
    title={title}
    role={role}
    year={year}
    description={description}
    tools={tools}
    liveLink={liveLink || undefined}
    githubLink={githubLink || undefined}
  >


    {/* ── PDF project files ──────────────────────────────── */}
    {documents.length > 0 && (
      <div className="border-t border-soft pt-10">
        <p className="text-xs uppercase tracking-widest text-muted mb-6">Project Files</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <article key={doc.src} className="rounded-2xl overflow-hidden border border-soft bg-white">
              <iframe
                title={doc.title}
                src={`${doc.src}#toolbar=0`}
                className="w-full h-[420px] bg-white"
              />
              <div className="p-4 flex flex-col gap-3">
                <p className="text-ink" style={{ fontSize: '16px' }}>{doc.title}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActivePdf(doc)}
                    className="btn-outline inline-flex items-center justify-center text-xs shrink-0"
                  >
                    Open PDF
                  </button>
                  {doc.liveUrl && (
                    <a
                      href={doc.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center text-xs shrink-0"
                    >
                      View Live Project
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )}

    {/* ── Additional Commvault / CVLT projects ───────────── */}
    {images.length > 1 && (
      <div className="border-t border-soft pt-10">
        <p className="text-xs uppercase tracking-widest text-muted mb-6">More Commvault Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(1).map((img, i) => (
            <figure key={i}>
              <button onClick={() => setSelectedImg(i + 1)} className="group w-full text-left focus:outline-none">
                <div className="overflow-hidden bg-white border border-soft rounded-2xl p-3">
                  <img src={img.src} alt={img.alt} className="w-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              </button>
              {(img.caption || img.liveUrl) && (
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  {img.caption && (
                    <figcaption className="text-xs text-muted">{img.caption}</figcaption>
                  )}
                  {img.liveUrl && (
                    <a
                      href={img.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center justify-center text-xs shrink-0"
                    >
                      View Live Project
                    </a>
                  )}
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    )}

    {/* ── Deliverables list ──────────────────────────────── */}
    {deliverables.length > 0 && (
      <div className="border-t border-soft pt-10">
        <p className="text-xs uppercase tracking-widest text-muted mb-6">Deliverables</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-ink" style={{ fontSize: '16px' }}>
              <span className="w-1 h-1 rounded-full bg-muted shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    )}

  </ProjectLayout>

  {/* ── Image Lightbox ─────────────────────────────────── */}
  {selectedImg !== null && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setSelectedImg(null)}>
      <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setSelectedImg(null)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
        >×</button>
        <img src={images[selectedImg].src} alt={images[selectedImg].alt} className="max-h-[80vh] max-w-full object-contain rounded-sm" />
        {images[selectedImg].caption && <p className="text-center text-sm text-white mt-3">{images[selectedImg].caption}</p>}
        {images.length > 2 && (
          <div className="flex justify-between mt-4 w-full">
            <button onClick={() => setSelectedImg(selectedImg === 1 ? images.length - 1 : selectedImg - 1)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">← Prev</button>
            <button onClick={() => setSelectedImg(selectedImg === images.length - 1 ? 1 : selectedImg + 1)} className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Next →</button>
          </div>
        )}
      </div>
    </div>
  )}

  {/* ── PDF Lightbox ───────────────────────────────────── */}
  {activePdf && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => setActivePdf(null)}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-soft">
          <p className="text-sm font-medium text-ink truncate pr-4">{activePdf.title}</p>
          <button
            onClick={() => setActivePdf(null)}
            aria-label="Close PDF viewer"
            className="text-muted hover:text-ink transition-colors shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* PDF viewer */}
        <iframe
          title={activePdf.title}
          src={`${activePdf.src}#toolbar=0`}
          className="w-full h-[75vh] bg-white"
        />
      </div>
    </div>
  )}
  </>
  )
}

export default Commvault
