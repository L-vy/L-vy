import { Link } from 'react-router-dom'
import Icon from './Icon'
import type { Project } from '../data/projects'
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <Link to={`/recentworks/${p.id}`} className="card-img" aria-label={`Open ${p.title}`}>
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" width={400} height={420} />
      </Link>
      <div className="card-title"><h3 className="clamp" title={p.title}>{p.title}</h3><Icon name="arrow-up-right" size={30} /></div>
      <p className="card-sum">{p.shortDescription}</p>
      <div className="card-links">
        <Link className="link-dotted" to={`/recentworks/${p.id}`}>View details</Link>
      </div>
    </article>
  )
}
