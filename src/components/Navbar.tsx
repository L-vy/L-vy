import { useEffect, useState } from 'react'
import Icon from './Icon'
import { site } from '../data/site'
import { useGoTo } from './useGoTo'
const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'recent-works', label: 'Recent Works' },
  { id: 'background', label: 'Background' },
]
export default function Navbar() {
  const go = useGoTo(); const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    tabs.forEach(t => { const el = document.getElementById(t.id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav">
      <nav className="nav-tabs" aria-label="Primary">
        {tabs.map(t => (
          <button key={t.id} className={`nav-tab ${active === t.id ? 'active' : ''}`} aria-label={t.label}
            aria-current={active === t.id ? 'page' : undefined} onClick={() => go(t.id)}>
            {t.id === 'home' ? <img src={site.images.logo} alt="" /> : t.id === 'recent-works' ? <Icon name="recent-works" size={34} /> : <Icon name="background" size={34} />}
          </button>
        ))}
      </nav>
    </header>
  )
}
