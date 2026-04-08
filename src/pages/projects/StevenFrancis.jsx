import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Steven Francis Fine Art Gallery'
const role        = 'Web Designer'
const year        = '2024'
const description = 'Website design for a fine art gallery showcasing original paintings and limited edition prints. Focused on letting the artwork take center stage.'
const tools       = ['Figma', 'Adobe Photoshop']
const liveLink    = ''
const githubLink  = ''

const images = [
  // { src: '/images/steven-francis-01.png', alt: 'Steven Francis – homepage', caption: '' },
]

const deliverables = [
  'Website design',
  'Gallery layout',
  'Mobile responsive',
  'Typography system',
]

const StevenFrancis = () => (
  <ProjectLayout
    title={title} role={role} year={year} description={description}
    tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
  >
    {images[0] && (
      <figure>
        <div className="overflow-hidden bg-[#EEECEA]">
          <img src={images[0].src} alt={images[0].alt} className="w-full object-cover" />
        </div>
        {images[0].caption && <figcaption className="text-xs text-muted mt-3">{images[0].caption}</figcaption>}
      </figure>
    )}
    {images.length > 1 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(1).map((img, i) => (
          <figure key={i}>
            <div className="overflow-hidden bg-[#EEECEA]">
              <img src={img.src} alt={img.alt} className="w-full object-cover" />
            </div>
            {img.caption && <figcaption className="text-xs text-muted mt-3">{img.caption}</figcaption>}
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
              <span className="w-1 h-1 rounded-full bg-muted shrink-0" />{d}
            </li>
          ))}
        </ul>
      </div>
    )}
  </ProjectLayout>
)

export default StevenFrancis
