import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectSidebar from '../components/ProjectSidebar'
export default function ProjectDetails() {
  const { id } = useParams(); const nav = useNavigate()
  const i = projects.findIndex(p => p.id === id)
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (i < 0) return <Navigate to="/" replace />
  const p = projects[i]
  return (
  <div style={{transform: 'scale(1.50)',transformOrigin: 'top left',width: '66.667%'}}>
    <div className="detail-shell">
      <main className="page detail">
        <p className="path">
        <button className="crumb" onClick={() => nav('/', { state: { scrollTo: 'recent-works' } })}><b>Portfolio</b>/RecentWork</button>/{p.id}
      </p>
      <div className="detail-grid">
        <div>
          <p className="meta">{p.type}</p>
          <h1 className="detail-title">{p.title}</h1>
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
      <ProjectSidebar index={i} />      {/* first in the DOM = left side */}
    </div>
  </div>
  )
}
// export default function ProjectDetails() {
//   const { id } = useParams(); const nav = useNavigate()
//   const i = projects.findIndex(p => p.id === id)
//   useEffect(() => { window.scrollTo(0, 0) }, [id])
//   if (i < 0) return <Navigate to="/" replace />
//   const p = projects[i], prev = projects[i - 1], next = projects[i + 1]
//   const isLast = !next
//   return (<>
//     <main className="page detail">
//       <p className="path">
//         <button className="crumb" onClick={() => nav('/', { state: { scrollTo: 'recent-works' } })}><b>Portfolio</b>/RecentWork</button>/{p.id}
//       </p>
//       <div className="detail-grid">
//         <div>
//           <p className="meta">{p.type}</p>
//           <h1 className="detail-title">{p.title}</h1>
//           {/* <ul className="pills left">{p.categories.map(c => <li key={c} className="pill solid-outline">{c}</li>)}</ul>
//           <p className="meta">{p.tools.join(' · ')} · {p.type}</p> */}
//           <ul className="pills left" aria-label="Tools">{p.tools.map(t => <li key={t} className="pill solid-outline">{t}</li>)}</ul>
//           <p className="lead sm">{p.description}</p>
//           <h2 className="contrib">Contribution</h2>
//           <ul className="contrib-list">{p.contributions.map(c => <li key={c}>{c}</li>)}</ul>
//           <div className="detail-links">{p.links.map(l => <a key={l.label} className="pill link-dotted" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
//         </div>
//         <figure className="proto">
//           <img src={p.prototypeImage} alt={`${p.title} prototype`} />
//           <figcaption>Release {p.releaseDate}</figcaption>
//         </figure>
//       </div>
//     </main>
//     <div className="pager">
//       {/* {prev ? <Link className="pager-btn prev" to={`/recentworks/${prev.id}`}>Previous</Link> : <span className="pager-btn prev off">Previous</span>}
//       {next ? <Link className="pager-btn" to={`/recentworks/${next.id}`}>Next</Link> : <span className="pager-btn off">Next</span>} */}
//       {prev ? <Link className={`pager-btn${isLast ? ' hang' : ''}`} to={`/recentworks/${prev.id}`}>Previous</Link> : <span className={`pager-btn off${isLast ? ' hang' : ''}`}>Previous</span>}
//       {next ? <Link className={`pager-btn${isLast ? '' : ' hang'}`} to={`/recentworks/${next.id}`}>Next</Link> : <span className={`pager-btn off${isLast ? '' : ' hang'}`}>Next</span>}
//     </div>
//   </>)
// }
