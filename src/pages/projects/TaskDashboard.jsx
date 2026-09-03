/**
 * ─────────────────────────────────────────────────────
 *  PROJECT PAGE: Task Management Dashboard
 *
 *  HOW TO EDIT THIS FILE:
 *  1. Update the text fields in the INFO block below
 *  2. Drop images into public/images/ and update paths below
 * ─────────────────────────────────────────────────────
 */
import ProjectLayout from '../../components/ProjectLayout'

// ── INFO ─────────────────────────────────────────────
const title       = 'Task Management Dashboard'
const role        = 'UI Designer & Developer'
const year        = '2023'
const description = 'Built for remote teams — this platform offers real-time collaboration tools, task tracking, and project management features including customizable workflows and analytics.'
const tools       = ['React', 'Node.js', 'MongoDB']
const liveLink    = ''   // add URL when ready
const githubLink  = 'https://github.com/gracefoster/task-dashboard'

// ── IMAGES ───────────────────────────────────────────
// Replace the placeholder src values with your actual image paths
const images = [
  {
    src: '/images/task-dashboard-hero.png',   // ← replace with your image
    alt: 'Task Management Dashboard – overview',
    caption: '',
  },
  // {
  //   src: '/images/task-dashboard-02.png',
  //   alt: 'Task detail view',
  //   caption: '',
  // },
]

// ── DELIVERABLES ─────────────────────────────────────
const deliverables = [
  'Real-time collaboration',
  'Custom workflow creation',
  'Time tracking',
  'Team management',
  'Performance analytics',
]
// ─────────────────────────────────────────────────────

const TaskDashboard = () => (
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
        <div className="overflow-hidden bg-[#95B1EE] min-h-[240px] flex items-center justify-center">
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
            <div className="overflow-hidden bg-[#95B1EE]">
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

export default TaskDashboard
