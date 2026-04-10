import ProjectLayout from '../../components/ProjectLayout'

const title = 'Book Cover Redesign Project'
const role = 'Graphic Designer'
const year = '2025'
const description = 'Editorial redesigns for classic titles including Little Women and The Enchanted April, developed through concept exploration, typography studies, and final mockups.'
const tools = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign']
const liveLink = 'https://www.behance.net/gallery/223468167/Book-Cover-Redesign-Project'
const githubLink = ''

const images = [
  {
    src: '/images/book1.png',
    alt: 'Book cover redesign image 1',
    caption: 'Book cover redesign concept 1.',
  },
  {
    src: '/images/book2.png',
    alt: 'Book cover redesign image 2',
    caption: 'Book cover redesign concept 2.',
  },
  {
    src: '/images/book3.png',
    alt: 'Book cover redesign image 3',
    caption: 'Book cover redesign concept 3.',
  },
  {
    src: '/images/book4.png',
    alt: 'Book cover redesign image 4',
    caption: 'Book cover redesign concept 4.',
  },
  {
    src: '/images/book5.png',
    alt: 'Book cover redesign image 5',
    caption: 'Book cover redesign concept 5.',
  },
  {
    src: '/images/book6.png',
    alt: 'Book cover redesign image 6',
    caption: 'Book cover redesign concept 6.',
  },
]

const deliverables = [
  'Book cover redesigns',
  'Editorial typography',
  'Hardback and paperback mockups',
  'Mood board and concept development',
]

const BookCoverRedesign = () => (
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

export default BookCoverRedesign
