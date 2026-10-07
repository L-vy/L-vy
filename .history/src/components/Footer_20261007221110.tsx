import { useEffect, useState } from 'react'
import Icon from './Icon'
import { site, socialLinks } from '../data/site'
const items = [
  { k: 'email', label: 'Email', icon: 'mail' }, { k: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp' },
  { k: 'github', label: 'GitHub', icon: 'github' }, { k: 'linkedin', label: 'LinkedIn', icon: 'linkedin' }, { k: 'instagram', label: 'Instagram', icon: 'instagram' },
] as const
export default function Footer() {
  const [pulse, setPulse] = useState('')
  useEffect(() => {
    const run = () => { setPulse('email'); setTimeout(() => setPulse('whatsapp'), 600); setTimeout(() => setPulse(''), 1300) }
    window.addEventListener('contact-pulse', run); return () => window.removeEventListener('contact-pulse', run)
  }, [])
  return (
    <footer className="footer">
      <ul>{items.map(({ k, label, icon }) => (<li key={k}><a href={socialLinks[k]} aria-label={label} target={k === 'email' ? undefined : '_blank'} rel="noreferrer" className={`ci ${pulse === k ? 'pulse' : ''}`}><Icon name={icon} size={24} /></a></li>))}</ul>
      <p className="footer-by">{site.footer.by}<br />{site.footer.release}</p>
    </footer>
  )
}
