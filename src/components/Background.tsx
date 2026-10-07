import { useState } from 'react'
import { education, awards, publications } from '../data/background'
import ExperienceBinder from './ExperienceBinder'
import FolderCard from './FolderCard'
import Reveal from './Reveal'
const tabs = ['Education', 'Experience', 'Awards', 'Publications'] as const
type Tab = typeof tabs[number]
export default function Background() {
  const [tab, setTab] = useState<Tab>('Education')
  return (
    <section id="background" className="section">
      <p className="path"><b>Portfolio</b>/Background</p>
      <div className="tabbar" role="tablist" aria-label="Background categories">
        {tabs.map(t => (
          <div key={t} className="tabwrap">
            <button role="tab" aria-selected={tab === t} className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>{t}</button>
            {tab === t && <span className="pointer" aria-hidden="true" />}
          </div>))}
      </div>
      <div className={`panel ${tab === 'Experience' ? 'bound' : ''}`}>
        <Reveal key={tab} className="fill">
          {tab === 'Education' && (
            <div className="banner">
              <img className="banner-img" src={education.image} alt="BINUS University" loading="lazy" />
              <div className="tx"><h2 className="fx">{education.year}</h2><h3>{education.school}</h3><p>{education.degree}</p></div>
            </div>)}
          {tab === 'Experience' && <ExperienceBinder />}
          {tab === 'Awards' && <div className="folders">{awards.map(c => <FolderCard key={c.title} c={c} />)}</div>}
          {tab === 'Publications' && <div className="folders">{publications.map(c => <FolderCard key={c.title} c={c} />)}</div>}
        </Reveal>
      </div>
    </section>
  )
}
