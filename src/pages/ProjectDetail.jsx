import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { getProjectById } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <Navigate to='/' replace />
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className='w-full max-w-5xl mx-auto pt-24 pb-16 px-8'
    >
      <Link
        to='/'
        className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8'
      >
        <FaArrowLeft />
        Back to portfolio
      </Link>

      <div className='bg-white/80 rounded-2xl overflow-hidden shadow-md border border-gray-100'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full aspect-[16/9] object-cover'
        />

        <div className='p-6 md:p-10'>
          <h1 className='text-3xl md:text-4xl text-gray-900 mb-4' style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
            {project.title}
          </h1>

          <p className='text-gray-600 leading-relaxed mb-8'>{project.longDescription || project.description}</p>

          <div className='flex flex-wrap gap-3 mb-8'>
            {project.technologies?.map((tech) => (
              <div key={tech.name} className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full'>
                <tech.icon className='text-gray-600' />
                <span className='text-sm text-gray-700'>{tech.name}</span>
              </div>
            ))}
          </div>

          {project.features?.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-xl text-gray-900 mb-3' style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Key Features
              </h2>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {project.features.map((feature) => (
                  <li key={feature} className='text-gray-600'>
                    - {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='flex flex-wrap gap-4'>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors'
              >
                View Live
                <FaExternalLinkAlt className='text-xs' />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors'
              >
                Source Code
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectDetail
