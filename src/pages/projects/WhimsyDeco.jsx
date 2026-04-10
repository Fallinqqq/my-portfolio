import ProjectLayout from '../../components/ProjectLayout'

const title = 'WHIMSY DECO – Display Serif Typeface'
const role = 'Type Designer'
const year = '2025'
const description = 'An original display serif typeface designed to feel whimsical, elegant, and expressive for editorial and branding use.'
const tools = ['Adobe Illustrator', 'Fontself']
const liveLink = 
const githubLink = ''

const images = [
  {
    src: '/images/whimsy1.png',
    alt: 'WHIMSY DECO introduction slide',
    caption: 'Intro slide for the WHIMSY DECO display serif.',
  },
  {
    src: '/images/whimsy2.png',
    alt: 'WHIMSY DECO brand message slide',
    caption: 'Lighthearted elegance for bold creatives.',
  },
  {
    src: '/images/whimsy3.png',
    alt: 'WHIMSY DECO alphabet specimen',
    caption: 'Alphabet specimen showcasing the custom letterforms.',
  },
]

const deliverables = [
  'Custom typeface design',
  'Letterform development',
  'Display typography system',
  'Type specimen presentation',
]

const WhimsyDeco = () => (
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

export default WhimsyDeco
