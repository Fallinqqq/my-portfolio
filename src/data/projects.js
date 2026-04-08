import { FaReact, FaNode, FaPython, FaDocker } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiDjango, SiFigma, SiAdobe } from 'react-icons/si'

export const projects = [
  {
    id: 9,
    slug: 'steven-francis-socials-print',
    path: '/projects/steven-francis-socials-print',
    title: 'Steven Francis Fine Art Gallery Socials & Print',
    description: 'Social media graphics and print materials for Steven Francis Fine Art Gallery.',
    longDescription: 'Social media content and print collateral designed for Steven Francis Fine Art Gallery. Focused on elegant, art-forward visuals that reflect the gallery\'s aesthetic and attract collectors and art enthusiasts.',
    image: '/images/SFFA_Primary_Logo.webp',
    technologies: [
      { name: 'Adobe Illustrator', icon: SiAdobe },
      { name: 'Adobe Photoshop', icon: SiAdobe }
    ],
    features: [
      'Social media templates',
      'Print materials',
      'Event flyers',
      'Gallery signage'
    ],
    category: 'Graphic Design',
    liveLink: ''
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
    liveLink: ''
  },
  {
    id: 8,
    slug: 'havens-house',
    path: '/projects/havens-house',
    title: 'Book Cover Re-Designs',
    description: 'Redesigned book covers for classic novels, blending editorial typography with illustrative design.',
    longDescription: 'A series of book cover Re-Designs for classic novels including Little Women and The Enchanted April. Focused on elegant, illustrative aesthetics with refined typography and thoughtful use of colour and texture.',
    image: '/images/Screenshot 2025-06-01 003342.png',
    technologies: [
      { name: 'Illustrator', icon: SiAdobe },
      { name: 'Photoshop', icon: SiAdobe }
    ],
    features: [
      'Cover illustration',
      'Typography design',
      'Colour palette',
      'Print-ready layout'
    ],
    category: 'Graphic Design',
    liveLink: ''
  }
]

export const getProjectById = (id) =>
  projects.find((project) => project.id === Number(id))
