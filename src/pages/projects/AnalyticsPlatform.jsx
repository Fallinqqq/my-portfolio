/**
 * ─────────────────────────────────────────────────────
 *  PROJECT PAGE: AI-Powered Data Analytics Platform
 *
 *  HOW TO EDIT THIS FILE:
 *  1. Update the text fields in the INFO block below
 *  2. Drop images into public/images/ and update paths below
 * ─────────────────────────────────────────────────────
 */
import ProjectLayout from '../../components/ProjectLayout'

// ── INFO ─────────────────────────────────────────────
const title       = 'AI-Powered Data Analytics Platform'
const role        = 'UI Designer & Developer'
const year        = '2023'
const description = 'An advanced analytics platform leveraging AI to surface insights from complex datasets. Features automated reporting, predictive analytics, and customizable dashboards.'
const tools       = ['Python', 'Django', 'PostgreSQL']
const liveLink    = ''
const githubLink  = 'https://github.com/gracefoster/analytics-platform'

// ── IMAGES ───────────────────────────────────────────
const images = [
  {
    src: '/images/analytics-platform-hero.png',   // ← replace with your image
    alt: 'Analytics Platform – dashboard view',
    caption: '',
  },
]

// ── DELIVERABLES ─────────────────────────────────────
const deliverables = [
  'Machine learning algorithms',
  'Automated reporting',
  'Custom dashboard creation',
  'Data visualization tools',
  'API integration',
]
// ─────────────────────────────────────────────────────

const AnalyticsPlatform = () => (
  <ProjectLayout
    title={title}
    role={role}
    year={year}
    description={description}
    tools={tools}
    liveLink={liveLink || undefined}
    githubLink={githubLink || undefined}
  >

    {images[0] && (
      <figure>
        <div className="overflow-hidden bg-[#EEECEA] min-h-[240px] flex items-center justify-center">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        {images[0].caption && (
          <figcaption className="text-xs text-muted mt-3">{images[0].caption}</figcaption>
        )}
      </figure>
    )}

    {images.length > 1 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(1).map((img, i) => (
          <figure key={i}>
            <div className="overflow-hidden bg-[#EEECEA]">
              <img src={img.src} alt={img.alt} className="w-full object-cover"
                   onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            {img.caption && (
              <figcaption className="text-xs text-muted mt-3">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    )}

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

export default AnalyticsPlatform
