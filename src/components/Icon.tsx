export default function Icon({ name, size = 24, raw = false }: { name: string; size?: number; raw?: boolean }) {
  if (raw) return <img className="icon" src={`/icons/${name}.svg`} alt="" width={size} height={size} />
  const mask = `url(/icons/${name}.svg) center / contain no-repeat`
  return <span className="icon" aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, backgroundColor: 'currentColor', WebkitMask: mask, mask }} />
}
