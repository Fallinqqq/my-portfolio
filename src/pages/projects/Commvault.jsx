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

const Commvault = () => (
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
                  <a
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center justify-center text-xs shrink-0"
                  >
                    Open PDF
                  </a>
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
              <div className="overflow-hidden bg-white border border-soft rounded-2xl p-3">
                <img src={img.src} alt={img.alt} className="w-full max-h-[520px] object-contain" />
              </div>
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
)

export default Commvault
