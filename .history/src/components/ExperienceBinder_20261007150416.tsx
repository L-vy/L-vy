import { useState, type CSSProperties } from 'react'
import Icon from './Icon'
import { experience } from '../data/background'
const rich = (t: string) => t.split('**').map((s, i) => (i % 2 ? <b key={i}>{s}</b> : s))
const pages = [
  { k: 'organization', icon: 'people', label: 'Organization', c: '#a1aed1', acc: '#9fadd1', ttl: '#7a8cc2' },
  { k: 'leadership', icon: 'sprout', label: 'Leadership', c: '#7487c0', acc: '#6f84bd', ttl: '#6479b6' },
  { k: 'other', icon: 'hand', label: 'Other', c: '#3d5879', acc: '#3d5879', ttl: '#3b5078' },
] as const
type K = typeof pages[number]['k']
const Photos = ({ n, cls }: { n: number; cls: string }) => (
  <div className={cls} aria-hidden="true">{Array.from({ length: n }, (_, i) => <i key={i} className="sp" />)}</div>
)
export default function ExperienceBinder() {
  const [k, setK] = useState<K>('organization')
  const pg = pages.find(p => p.k === k)!
  const { leadership: l, other: o } = experience
  return (
    <div className="exp">
      <div className="plate" />
      <div className="rail" role="tablist" aria-orientation="vertical" aria-label="Experience categories">
        {pages.map((p, i) => (
          <button key={p.k} role="tab" aria-selected={k === p.k} aria-label={p.label} title={p.label} onClick={() => setK(p.k)}
            style={{ '--c': p.c, '--i': i } as CSSProperties}><Icon name={p.icon} size={26} /></button>
        ))}
      </div>
      <div className="fcard" style={{ '--acc': pg.acc, '--ttl': pg.ttl } as CSSProperties}>
        <div className="pg" key={k}>
          <div className="lab fx">/{pg.label}</div>
          {k === 'organization' && experience.organization.map((it, i) => (
            <div className="col" key={it.title}>
              <h2 className="t">{it.title}</h2><p className="d">{it.text}</p>
              <div className="h fx">{it.listTitle}</div><ul>{it.list.map(x => <li key={x}>{x}</li>)}</ul>
              {i === 0 && <Photos n={3} cls="stack" />}
            </div>
          ))}
          {k === 'leadership' && <><div className="col end"><h2 className="t">{l.title}</h2><div className="sub">{l.subtitle}</div><p className="d">{rich(l.text)}</p></div><Photos n={3} cls="zig" /></>}
          {k === 'other' && <><div className="col end"><h2 className="t">{o.title}</h2><div className="sub">{o.subtitle}</div><p className="d">{rich(o.text)}</p></div><i className="sp p1" aria-hidden="true" /><i className="sp p2" aria-hidden="true" /></>}
        </div>
      </div>
    </div>
  )
}
