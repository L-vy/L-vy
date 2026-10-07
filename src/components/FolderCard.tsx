import Icon from './Icon'
import type { CardEntry } from '../data/background'
export default function FolderCard({ c }: { c: CardEntry }) {
  return (
    <article className="folder">
      <div className="media">{c.image ? <img src={c.image} alt="" /> : <div aria-hidden="true" />}</div>
      <div className="rest">
        <div className="tab" aria-hidden="true" />
        <div className="head"><b>{c.title}</b><span title={c.hint}>{c.sub}</span></div>
        <p>{c.text}</p>
        <div className="foot">
          <strong className="fx">{c.date}</strong>
          {c.link && <a className="go" href={c.link} target="_blank" rel="noreferrer" aria-label={`View paper: ${c.title}`}><Icon name="arrow-up-right" size={20} /></a>}
        </div>
      </div>
    </article>
  )
}
