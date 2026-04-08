/**
 * ProjectLayout — shared frame used by every project page.
 * You don't need to edit this file. Edit the individual project files instead.
 */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

/**
 * Props:
 *  title       string    — project name
 *  role        string    — e.g. "Graphic Designer"
 *  year        string    — e.g. "2023"
 *  tools       string[]  — list of tools/technologies
 *  liveLink    string?   — URL for "View Project" button
 *  githubLink  string?   — URL for "Source Code" button
 *  description string    — main paragraph shown below the header
 *  children    ReactNode — image gallery / custom sections go here
 */
const ProjectLayout = ({
  title,
  role,
  year,
  tools = [],
  liveLink,
  githubLink,
  description,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      {/* ── Back link ──────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-12 pb-4 sm:pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-200"
        >
          <FaArrowLeft className="text-xs" />
          All work
        </Link>
      </div>

      {/* ── Project header ─────────────────────────────────────── */}
      <div className="border-b border-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-end">
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {title}
              </h1>
              {description && (
                <p className="text-muted max-w-xl leading-[1.85]" style={{ fontSize: '16px' }}>{description}</p>
              )}
            </div>

            {/* Meta column */}
            <div className="flex flex-row md:flex-col flex-wrap gap-5 md:min-w-[180px]">
              {role && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">Role</p>
                  <p className="text-ink" style={{ fontSize: '16px' }}>{role}</p>
                </div>
              )}
              {year && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">Year</p>
                  <p className="text-ink" style={{ fontSize: '16px' }}>{year}</p>
                </div>
              )}
              {tools.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <span key={t} className="text-xs text-muted border border-soft px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {(liveLink || githubLink) && (
                <div className="flex flex-col gap-2 pt-2">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 text-xs"
                    >
                      View Project <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2 text-xs"
                    >
                      Source Code <FaGithub />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Project content (images, sections, etc.) ───────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16 flex flex-col gap-8">
        {children}
      </div>
    </motion.div>
  )
}

export default ProjectLayout
