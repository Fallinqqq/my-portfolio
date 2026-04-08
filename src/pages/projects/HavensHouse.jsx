/**
 * ─────────────────────────────────────────────────────
 *  PROJECT PAGE: Havens House
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
const title       = 'Book Cover Re-Designs'
const role        = 'Graphic Designer'
const year        = '2024'
const description = 'A series of book cover Re-Designs for classic novels including Little Women and The Enchanted April. Focused on elegant, illustrative aesthetics with refined typography and thoughtful use of colour and texture.'
const tools       = ['Adobe Illustrator', 'Adobe Photoshop']
const liveLink    = ''   // leave empty to hide button
const githubLink  = ''   // leave empty to hide button

// ── IMAGES ───────────────────────────────────────────
const images = [
  {
    src: '/images/Screenshot 2025-06-01 003342.png',
    alt: 'Book Cover Re-Designs – Little Women & The Enchanted April',
    caption: '',
  },
]

// ── DELIVERABLES (optional bullet list) ─────────────
const deliverables = [
  'Cover illustration',
  'Typography design',
  'Colour palette',
  'Print-ready layout',
]
// ─────────────────────────────────────────────────────

const HavensHouse = () => (
  <ProjectLayout
    title={title}
    role={role}
    year={year}
    description={description}
    tools={tools}
    liveLink={liveLink || undefined}
    githubLink={githubLink || undefined}
  >

    {/* ── Primary image ──────────────────────────────────── */}
    {images[0] && (
      <figure>
        <div className="overflow-hidden bg-[#EEECEA]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full object-cover"
          />
        </div>
        {images[0].caption && (
          <figcaption className="text-xs text-muted mt-3">{images[0].caption}</figcaption>
        )}
      </figure>
    )}

    {/* ── Additional images (auto-hidden if none added) ──── */}
    {images.length > 1 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(1).map((img, i) => (
          <figure key={i}>
            <div className="overflow-hidden bg-[#EEECEA]">
              <img src={img.src} alt={img.alt} className="w-full object-cover" />
            </div>
            {img.caption && (
              <figcaption className="text-xs text-muted mt-3">{img.caption}</figcaption>
            )}
          </figure>
        ))}
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

export default HavensHouse
