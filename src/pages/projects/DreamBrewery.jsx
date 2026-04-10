import ProjectLayout from '../../components/ProjectLayout'

const title = 'Dream Brewery – Branding Identity'
const role = 'Brand Designer'
const year = '2024'
const description = 'A dreamy brand identity system for a brewery and café concept, built around the Creative Archetype with logo, visual language, and mockups.'
const tools = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign']
const liveLink = 'https://www.behance.net/gallery/211358519/Dream-Brewery-Branding-Identity'
const githubLink = ''

const images = [
  {
    src: '/images/Dream1.png',
    alt: 'Dream Brewery brand board',
    caption: 'Brand board featuring logo system, palette, fonts, and mockup direction.',
  },
  {
    src: '/images/Dream2.png',
    alt: 'Dream Brewery carton mockup',
    caption: 'Starry Espresso packaging mockup for Dream Brewery.',
  },
  {
    src: '/images/Dream3.png',
    alt: 'Dream Brewery can mockup',
    caption: 'Sparkling Brew Tea can concept extending the brand identity.',
  },
]

const deliverables = [
  'Logo and visual identity',
  'Brand guide design',
  'Packaging and mockups',
  'Creative archetype strategy',
]

const DreamBrewery = () => (
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
        <div className="overflow-hidden bg-[#EEECEA] rounded-2xl p-3">
          <img src={images[0].src} alt={images[0].alt} className="w-full object-contain" />
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
            <div className="overflow-hidden bg-[#EEECEA] rounded-2xl p-3">
              <img src={img.src} alt={img.alt} className="w-full object-contain" />
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

export default DreamBrewery
