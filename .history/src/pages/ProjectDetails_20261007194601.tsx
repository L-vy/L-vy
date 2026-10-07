import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
export default function ProjectDetails() {
  const { id } = useParams(); const nav = useNavigate()
  const i = projects.findIndex(p => p.id === id)
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (i < 0) return <Navigate to="/" replace />
  const p = projects[i], prev = projects[i - 1], next = projects[i + 1]
  return (<>
    <main className="page detail">
      <p className="path">
        <button className="crumb" onClick={() => nav('/', { state: { scrollTo: 'recent-works' } })}><b>Portfolio</b>/RecentWork</button>/{p.id}
      </p>
      <div className="detail-grid">
        <div>
          <h1 className="detail-title">{p.title}</h1>
          <p className="meta">{p.type}</p>
          {/* <ul className="pills left">{p.categories.map(c => <li key={c} className="pill solid-outline">{c}</li>)}</ul>
          <p className="meta">{p.tools.join(' · ')} · {p.type}</p> */}
          <ul className="pills left" aria-label="Tools">{p.tools.map(t => <li key={t} className="pill solid-outline">{t}</li>)}</ul>
          <p className="lead sm">{p.description}</p>
          <h2 className="contrib">Contribution</h2>
          <ul className="contrib-list">{p.contributions.map(c => <li key={c}>{c}</li>)}</ul>
          <div className="detail-links">{p.links.map(l => <a key={l.label} className="pill link-dotted" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
        </div>
        <figure className="proto">
          <img src={p.prototypeImage} alt={`${p.title} prototype`} />
          <figcaption>Release {p.releaseDate}</figcaption>
        </figure>
      </div>
    </main>
    <div className="pager">
      {prev ? <Link className="pager-btn prev" to={`/recentworks/${prev.id}`}>Previous</Link> : <span className="pager-btn prev off">Previous</span>}
      {next ? <Link className="pager-btn" to={`/recentworks/${next.id}`}>Next</Link> : <span className="pager-btn off">Next</span>}
    </div>
  </>)
}
