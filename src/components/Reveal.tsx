import { useEffect, useRef, useState, type ReactNode } from 'react'
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.1 })
    if (ref.current) io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}
