import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const pad = (n: number) => String(n + 1).padStart(2, '0')

export default function ProjectSidebar({ index }: { index: number }) {
  const prev = projects[index - 1], next = projects[index + 1]
  return (
    <aside className="side">
      <nav className="steps" aria-label="Projects">
        {projects.map((q, n) => (
          <Link
            key={q.id}
            to={`/recentworks/${q.id}`}
            // RULE 2: 'on' = cream tab
            className={`step fx${n === index ? ' on' : ''}`}   
            aria-label={`Project ${n + 1}: ${q.title}`}
            aria-current={n === index ? 'page' : undefined}
          >{pad(n)}</Link>
        ))}
      </nav>
      <nav className="side-nav" aria-label="Previous and next project">
        {/* RULE 3: no prev → first page → 'edge' (light blue) */}
        {prev
          ? <Link className="side-btn" to={`/recentworks/${prev.id}`}>Previous</Link>
          : <span className="side-btn edge" aria-disabled="true">Previous</span>}
        {/* RULE 3: no next → last page → 'edge' (light blue) */}
        {next
          ? <Link className="side-btn" to={`/recentworks/${next.id}`}>Next</Link>
          : <span className="side-btn edge" aria-disabled="true">Next</span>}
      </nav>
    </aside>
  )
}