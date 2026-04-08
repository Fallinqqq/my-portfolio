import ProjectLayout from '../../components/ProjectLayout'

const title       = 'University of Lynchburg'
const role        = 'Web Designer'
const year        = '2024'
const description = 'Web design and digital marketing materials for the University of Lynchburg. Included page layouts, promotional graphics, and campaign assets.'
const tools       = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
const liveLink    = ''
const githubLink  = ''

const images = [
  { src: '/images/screencapture-lynchburg-edu-student-life-campus-traditions-2026-04-02-11_30_41.png', alt: 'University of Lynchburg – Campus Traditions page', caption: 'Campus Traditions' },
  { src: '/images/screencapture-lynchburg-edu-student-life-student-spaces-2026-04-02-11_30_49.png', alt: 'University of Lynchburg – Student Spaces page', caption: 'Student Spaces' },
]

const deliverables = [
  'Page layouts',
  'Promotional graphics',
  'Campaign assets',
  'Digital banners',
]

const UniversityOfLynchburg = () => (
  <ProjectLayout
    title={title} role={role} year={year} description={description}
    tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {images.map((img, i) => (
        <figure key={i}>
          <div className="overflow-hidden bg-[#EEECEA]">
            <img src={img.src} alt={img.alt} className="w-full object-cover" />
          </div>
          {img.caption && <figcaption className="text-xs text-muted mt-3">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
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

export default UniversityOfLynchburg
