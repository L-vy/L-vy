import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
export default function RecentWorks() {
  return (
    <section id="recent-works" className="section">
      <p className="path"><b>Portfolio</b>/RecentWork</p>
      <Reveal className="cards">{projects.slice(0, 4).map(p => <ProjectCard key={p.id} p={p} />)}</Reveal>
    </section>
  )
}
