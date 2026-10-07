import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import RecentWorks from '../components/RecentWorks'
import Background from '../components/Background'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { pulseContact, scrollToId } from '../components/useGoTo'
export default function Home() {
  const { state } = useLocation() as { state: { scrollTo?: string; pulse?: boolean } | null }
  useEffect(() => {
    if (!state?.scrollTo) { window.scrollTo(0, 0); return }
    const t = setTimeout(() => { scrollToId(state.scrollTo!); if (state.pulse) setTimeout(pulseContact, 700) }, 80)
    return () => clearTimeout(t)
  }, [state])
  return (<>
    <Navbar />
    <main className="page"><Hero /><Skills /><RecentWorks /><Background /><ContactSection /></main>
    <Footer />
  </>)
}
