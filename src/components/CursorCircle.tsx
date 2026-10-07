import { useEffect, useRef } from 'react'
// Soft circle that follows the pointer and expands over buttons/links. Hidden on touch devices.
export default function CursorCircle() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = ref.current!
    const move = (e: MouseEvent) => {
      const over = (e.target as Element | null)?.closest('a,button,[data-cursor]')
      el.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%) scale(${over ? 1 : 0})`
    }
    const leave = () => { el.style.transform = 'translate(-100px,-100px) scale(0)' }
    window.addEventListener('mousemove', move); document.addEventListener('mouseleave', leave)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', leave) }
  }, [])
  return <div ref={ref} className="cursor-circle" aria-hidden="true" />
}
