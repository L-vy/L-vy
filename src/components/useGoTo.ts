import { useLocation, useNavigate } from 'react-router-dom'
export const pulseContact = () => window.dispatchEvent(new Event('contact-pulse'))
export function scrollToId(id: string) {
  if (id === 'contact') { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); return }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
/** Navigate to a section on the home page from anywhere. */
export function useGoTo() {
  const nav = useNavigate(); const { pathname } = useLocation()
  return (id: string, pulse = false) => {
    if (pathname === '/') { scrollToId(id); if (pulse) setTimeout(pulseContact, 700) }
    else nav('/', { state: { scrollTo: id, pulse } })
  }
}
