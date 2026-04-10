import ProjectLayout from '../../components/ProjectLayout'

const title = 'Willow & Word'
const role = 'Brand Designer'
const year = '2025'
const description = 'Full brand identity system for Willow & Word, a greenhouse-inspired cozy bookstore. Includes logo suite, brand guidelines, packaging, and marketing collateral.'
const tools = ['Adobe Illustrator', 'Adobe Photoshop']
const liveLink = ''
const githubLink = ''

const images = [
  {
    src: '/images/Screenshot 2025-05-06 225010.png',
    alt: 'Willow & Word – brand identity overview',
    caption: '',
  },
  {
    src: '/images/Willow1.png',
    alt: 'Willow & Word – logotype sketch and finalized versions',
    caption: '',
  },
  {
    src: '/images/Willow2.png',
    alt: 'Willow & Word – brand description',
    caption: '',
  },
  {
    src: '/images/Willow3.png',
    alt: 'Willow & Word – logo color variations',
    caption: '',
  },
  {
    src: '/images/Willow4.png',
    alt: 'Willow & Word – color palette',
    caption: '',
  },
  {
    src: '/images/Willow5.png',
    alt: 'Willow & Word – typography',
    caption: '',
  },
  {
    src: '/images/Willow6.png',
    alt: 'Willow & Word – storefront mockup',
    caption: '',
  },
  {
    src: '/images/Willow7.png',
    alt: 'Willow & Word – business card mockup',
    caption: '',
  },
  {
    src: '/images/Willow8.png',
    alt: 'Willow & Word – notebook mockup',
    caption: '',
  },
  {
    src: '/images/Willow 9.png',
    alt: 'Willow & Word – tote bag mockup',
    caption: '',
  },
]

const deliverables = [
  'Logo suite',
  'Brand guidelines',
  'Packaging design',
  'Marketing collateral',
  'Typography system',
]

const WillowAndWord = () => (
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
        <div className="overflow-hidden bg-[#EEECEA] rounded-2xl">
          <img src={images[0].src} alt={images[0].alt} className="w-full object-contain" loading="lazy" />
        </div>
        {images[0].caption && (
          <figcaption className="text-xs text-muted mt-3">{images[0].caption}</figcaption>
        )}
      </figure>
    )}

    {images[1] && (
      <figure>
        <div className="overflow-hidden bg-[#EEECEA] rounded-2xl">
          <img src={images[1].src} alt={images[1].alt} className="w-full object-contain" loading="lazy" />
        </div>
        {images[1].caption && (
          <figcaption className="text-xs text-muted mt-3">{images[1].caption}</figcaption>
        )}
      </figure>
    )}

    {images.length > 2 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(2).map((img, i) => (
          <figure key={i}>
            <div className="overflow-hidden bg-[#EEECEA] rounded-2xl">
              <img src={img.src} alt={img.alt} className="w-full object-contain" loading="lazy" />
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

export default WillowAndWord
