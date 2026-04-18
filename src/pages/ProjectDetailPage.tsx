import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { getPortfolioProject } from '../data/portfolioProjects'
import WhatsAppButton from '../components/WhatsAppButton'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ProjectDetailPage() {
  const revealRef = useScrollReveal()
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? getPortfolioProject(projectId) : undefined

  if (!projectId || !project) {
    return <Navigate to="/our-work" replace />
  }

  const metaLine = [project.year, project.location].filter(Boolean).join(' · ')

  return (
    <main className="page-service">
      <div ref={revealRef} className="page-service__reveal">
        <article className="service-detail container">
          <nav className="service-detail__breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="service-detail__crumb">
              Home
            </Link>
            <span className="service-detail__crumb-sep" aria-hidden>
              /
            </span>
            <Link to="/our-work" className="service-detail__crumb">
              Our work
            </Link>
            <span className="service-detail__crumb-sep" aria-hidden>
              /
            </span>
            <span className="service-detail__crumb service-detail__crumb--current">{project.title}</span>
          </nav>

          <header className="service-detail__header fade-up">
            <p className="project-detail__category">{project.category}</p>
            <h1 className="service-detail__title">{project.title}</h1>
            {project.lead ? <p className="service-detail__lede">{project.lead}</p> : null}
            {metaLine ? (
              <p className="project-detail__meta" role="note">
                {metaLine}
              </p>
            ) : null}
          </header>

          <figure className="service-detail__hero fade-up">
            <img
              className="service-detail__hero-img project-detail__hero-img"
              src={project.src}
              alt={`${project.title} — ${project.category} interior project`}
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>

          <div className="service-detail__body">
            {project.paragraphs.map((p, i) => (
              <p key={i} className="service-detail__para fade-up">
                {p}
              </p>
            ))}
          </div>

          <footer className="service-detail__footer fade-up">
            <Link to="/#contact" className="btn-solid-gold service-detail__cta">
              <Sparkles size={16} strokeWidth={2} aria-hidden />
              Book consultation
            </Link>
            <Link to="/our-work" className="service-detail__back">
              <ArrowLeft size={18} strokeWidth={1.75} aria-hidden />
              Back to our work
            </Link>
          </footer>
        </article>
      </div>
      <WhatsAppButton />
    </main>
  )
}
