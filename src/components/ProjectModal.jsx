import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-6">
          <div className="relative w-full aspect-video mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                {tech.icon && <tech.icon className="text-gray-600" />}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {project.longDescription && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">About the Project</h3>
                <p className="text-gray-600">{project.longDescription}</p>
              </div>
            )}

            {project.features && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.additionalImages && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
