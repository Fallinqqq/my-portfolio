import ProjectLayout from '../../components/ProjectLayout'

const title       = 'Steven Francis Fine Art Gallery Socials & Print'
const role        = 'Graphic Designer'
const year        = '2024'
const description = 'Social media content and print collateral designed for Steven Francis Fine Art Gallery. Focused on elegant, art-forward visuals that reflect the gallery\'s aesthetic.'
const tools       = ['Adobe Illustrator', 'Adobe Photoshop']
const liveLink    = ''
const githubLink  = ''

const images = [
  // { src: '/images/steven-francis-socials-01.png', alt: 'Steven Francis – social templates', caption: '' },
]

const deliverables = [
  'Social media templates',
  'Print materials',
  'Event flyers',
  'Gallery signage',
]

const StevenFrancisSocials = () => (
  <ProjectLayout
    title={title} role={role} year={year} description={description}
    tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}
  >
    {images.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <figure key={i}>
            <div className="overflow-hidden bg-[#95B1EE]">
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

export default StevenFrancisSocials
