import { FaReact, FaNode, FaPython, FaDocker } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiDjango, SiFigma, SiAdobe } from 'react-icons/si'

export const projects = [
  {
    id: 14,
    slug: 'cafe-da-alma',
    path: '/projects/cafe-da-alma',
    title: 'Café da Alma – Senior Exhibition 2026',
    description: 'A comprehensive brand identity for a bilingual Brazilian café chain, presented at the University of Lynchburg Senior Thesis Exhibition 2026.',
    longDescription: 'A comprehensive brand identity for Café da Alma, a bilingual global café chain celebrating the vibrancy of Brazilian culture. Presented at the University of Lynchburg Senior Thesis Exhibition 2026.',
    image: '/images/CAFE-de-ALMA-Branding (2) conflict.png',
    imageBg: 'bg-white',
    imageFit: 'object-contain',
    technologies: [
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Adobe Photoshop', icon: SiAdobe },
      { name: 'Adobe InDesign', icon: SiAdobe },
    ],
    features: [
      'Logo & brand identity',
      'Packaging design',
      'Merchandise',
      'Menu design',
      'Brand guide',
      'Environmental signage',
    ],
    category: 'Graphic Design',
  },
  {
    id: 15,
    slug: 'cafe-da-alma-web',
    path: '/projects/cafe-da-alma-web',
    title: 'Café da Alma – Web Design',
    description: 'Website design for a bilingual Brazilian café chain — full e-commerce with online ordering, shop, menu, and locations pages.',
    longDescription: 'Website design for Café da Alma, a bilingual Brazilian coffee and tea chain. Built as part of the Senior Thesis Exhibition 2026, featuring a full e-commerce experience with online ordering, a shop, menu, and locations pages.',
    image: '/images/screencapture-cafedaalma-netlify-app-2026-04-28-12_56_28.png',
    technologies: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Adobe Photoshop', icon: SiAdobe },
    ],
    features: [
      'Website design',
      'E-commerce / online ordering',
      'Menu & shop pages',
      'Mobile responsive',
    ],
    category: 'Web Design',
  },
  {
    id: 13,
    slug: 'steven-francis-graphic-design',
    path: '/projects/steven-francis-graphic-design',
    title: 'Steven Francis Fine Art Socials & Posters',
    description: 'Exhibition posters and social media graphics for a fine art gallery in Lynchburg, VA.',
    longDescription: 'Ongoing graphic design work for Steven Francis Fine Art Gallery — exhibition posters and social media content for their Main Street and Tradewynd gallery locations.',
    image: '/images/Social2 - Copy (4).png',
    technologies: [
      { name: 'Adobe Photoshop', icon: SiAdobe },
      { name: 'Adobe InDesign', icon: SiAdobe },
    ],
    features: [
      'Exhibition posters',
      'Social media graphics',
      'Event announcements',
      'Print-ready files',
    ],
    category: 'Graphic Design',
  },
  {
    id: 1,
    slug: 'commvault',
    path: '/projects/commvault',
    title: 'Commvault',
    description: 'Created various marketing Resources for Commvault including brochures, banners, and digital ads.',
    longDescription: 'Created various marketing materials for cross functional teams at Commvault including various Data sheets, infographics, whitepapers, and digital ads.',
    image: '/images/Commvault.png',
    additionalImages: [
      '/images/CVLT-Clumio_Records_Retention-_Requirements_Education_v1.1-1-1.pdf',
      '/images/CVLT-Establishing-Higher-Education-Minimum-Viability_Infographic_v1.2.pdf',
      '/images/59.-Cloud-Data-Management_Whitepaper_v1.2.pdf'
    ],
    technologies: [
      { name: 'Adobe Indesign', icon: SiAdobe },
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Adobe Photoshop', icon: SiAdobe }
    ],
    features: [
      'Infographics',
      'Whitepapers',
      'Data sheets',
      'Digital ads',
      'Print materials',
      'Brand consistency'
    ],
    category: 'Graphic Design',
    liveLink: 'https://commvault.com'
  },
  {
    id: 3,
    slug: 'steven-francis-fine-art',
    path: '/projects/steven-francis-fine-art',
    title: 'Steven Francis Fine Art Gallery',
    description: 'Website design for a fine art gallery showcasing original paintings and limited edition prints.',
    longDescription: 'Website design for Steven Francis Fine Art Gallery, featuring a clean, elegant layout to showcase original paintings and limited edition prints. Focused on letting the artwork take center stage.',
    image: '/images/Screenshot 2026-04-02 112023.png',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNode },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    features: [
      'Real-time collaboration',
      'Custom workflow creation',
      'Time tracking',
      'Team management',
      'Performance analytics'
    ],
    category: 'Web Design',
    liveLink: 'https://task-dashboard-demo.com',
    githubLink: 'https://github.com/gracefoster/task-dashboard'
  },
  {
    id: 4,
    slug: 'university-of-lynchburg',
    path: '/projects/university-of-lynchburg',
    title: 'University of Lynchburg',
    description: 'Web design and digital marketing materials for the University of Lynchburg.',
    longDescription: 'Web design and digital marketing materials created for the University of Lynchburg. Included page layouts, promotional graphics, and campaign assets.',
    image: '/images/Screenshot 2026-04-02 111935.png',
    technologies: [
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ],
    features: [
      'Machine learning algorithms',
      'Automated reporting',
      'Custom dashboard creation',
      'Data visualization tools',
      'API integration'
    ],
    category: 'Web Design',
    liveLink: 'https://analytics-platform-demo.com',
    githubLink: 'https://github.com/gracefoster/analytics-platform'
  },
  {
    id: 6,
    slug: 'gregory-consulting',
    path: '/projects/gregory-consulting',
    title: 'Gregory Consulting Solutions',
    description: 'Brand and web design for a professional business consulting firm.',
    longDescription: 'Brand and web design for Gregory Consulting Solutions, a professional business consulting firm. Focused on conveying trust, expertise, and a clean corporate identity.',
    image: '/images/Screenshot 2026-04-02 112136.png',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNode },
      { name: 'Docker', icon: FaDocker }
    ],
    features: [
      'Online ordering system',
      'Inventory management',
      'Table reservations',
      'Customer profiles',
      'Analytics dashboard'
    ],
    category: 'Web Design',
    liveLink: 'https://restaurant-system-demo.com',
    githubLink: 'https://github.com/gracefoster/restaurant-system'
  },
  {
    id: 7,
    slug: 'willow-and-word',
    path: '/projects/willow-and-word',
    title: 'Willow & Word',
    description: 'A typographical brand identity for a botanical bookstore/café.',
    longDescription: 'A typographical brand identity designed for Willow & Word, a botanical bookstore and café. Rooted in editorial elegance and natural texture, the identity blends lush botanical motifs with refined typography to create a warm, inviting brand presence.',
    image: '/images/Screenshot 2025-05-06 225010.png',
    technologies: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Illustrator', icon: SiAdobe },
      { name: 'Photoshop', icon: SiAdobe }
    ],
    features: [
      'Logo suite',
      'Brand guidelines',
      'Packaging design',
      'Marketing collateral',
      'Typography system'
    ],
    category: 'Graphic Design',
    liveLink: 'https://www.behance.net/gallery/221747443/Willow-Word-Branding-Identity'
  },
  {
    id: 10,
    slug: 'book-cover-redesign',
    path: '/projects/book-cover-redesign',
    title: 'Book Cover Redesign Project',
    description: 'Editorial redesigns for classic book covers including Little Women and The Enchanted April.',
    longDescription: 'A book cover redesign series exploring modern, minimal, and feminine editorial aesthetics for classic titles. The project includes concept development, draft explorations, and final hardback and paperback mockups built with typography, illustration, and thoughtful layout design.',
    image: '/images/Screenshot 2025-06-01 003342.png',
    technologies: [
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Adobe Photoshop', icon: SiAdobe },
      { name: 'Adobe InDesign', icon: SiAdobe }
    ],
    features: [
      'Book cover redesigns',
      'Hardback and paperback mockups',
      'Typography exploration',
      'Mood board and concept development'
    ],
    category: 'Graphic Design',
    liveLink: 'https://www.behance.net/gallery/223468167/Book-Cover-Redesign-Project'
  },
  {
    id: 11,
    slug: 'whimsy-deco',
    path: '/projects/whimsy-deco',
    title: 'WHIMSY DECO – Display Serif Typeface',
    description: 'A custom display serif typeface with whimsical, elegant letterforms inspired by decorative editorial design.',
    longDescription: 'An original display serif typeface created in Illustrator and Fontself, designed to feel whimsical, elegant, and expressive. The project focuses on distinctive letterform design and a cohesive display type system for creative branding and editorial use.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c92b03225134165.6818a70a06bc8.jpg',
    technologies: [
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Fontself', icon: SiAdobe }
    ],
    features: [
      'Custom typeface design',
      'Letterform development',
      'Display typography system',
      'Editorial-inspired styling'
    ],
    category: 'Graphic Design',
    liveLink: 'https://www.behance.net/gallery/225134165/WHIMSY-DECO-Display-Serif-Typeface'
  },
  {
    id: 12,
    slug: 'dream-brewery',
    path: '/projects/dream-brewery',
    title: 'Dream Brewery – Branding Identity',
    description: 'A brand identity system for a dreamy brewery and café concept centered around the Creative Archetype.',
    longDescription: 'This branding project was built around a brewery and café concept designed for creative-minded audiences. It includes visual identity development, brand guide assets, and mockups created in Photoshop, Illustrator, and InDesign.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6338e211358519.Y3JvcCw4NTksNjcxLDMxNiwzMQ.png',
    technologies: [
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Adobe Photoshop', icon: SiAdobe },
      { name: 'Adobe InDesign', icon: SiAdobe }
    ],
    features: [
      'Logo and visual identity',
      'Brand guide design',
      'Packaging and mockups',
      'Creative archetype strategy'
    ],
    category: 'Graphic Design',
    liveLink: 'https://www.behance.net/gallery/211358519/Dream-Brewery-Branding-Identity'
  },

]

export const getProjectById = (id) =>
  projects.find((project) => project.id === Number(id))
