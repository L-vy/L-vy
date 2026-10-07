import { site } from '../data/site'
import Reveal from './Reveal'
export default function Skills() {
  return (
    <Reveal className="intro">
      <p className="intro-text">{site.about}</p>
      <ul className="pills" aria-label="Skills">{site.skills.map(s => <li key={s} className="pill">{s}</li>)}</ul>
    </Reveal>
  )
}
