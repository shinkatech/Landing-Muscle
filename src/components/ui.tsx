import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'
import { CameraIcon } from './Icons'

/* ---------- hooks ---------- */

export function useInView<T extends Element>(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])
  return { ref, inView }
}

/* ---------- Reveal: aparece suavemente ao entrar na tela ---------- */

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ---------- CountUp: número que sobe quando aparece ---------- */

export function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * to))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration])
  return <span ref={ref}>{value}</span>
}

/* ---------- Photo: usa a imagem se existir em /public/images, senão mostra um espaço estilizado ---------- */

interface PhotoProps {
  src: string
  alt: string
  hint?: string
  className?: string
  imgClassName?: string
  showBolt?: boolean
  /** só o fundo texturizado, sem legenda (quando há ícone/botão por cima) */
  bare?: boolean
  /** carrega na hora (imagens do topo da página) */
  priority?: boolean
  children?: ReactNode
}

export function Photo({ src, alt, hint, className = '', imgClassName = '', showBolt, bare, priority, children }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`${/\b(absolute|fixed)\b/.test(className) ? '' : 'relative'} overflow-hidden photo-placeholder ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      ) : bare ? (
        <div role="img" aria-label={alt} className="absolute inset-0" />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-6 text-center">
          {showBolt && (
            <svg viewBox="0 0 24 24" aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[72%] -translate-x-1/2 -translate-y-1/2">
              <path d="M13.5 1.5L3.5 14h7l-1.5 8.5L20.5 9h-7.2z" fill="none" stroke="rgb(255 106 43 / 0.28)" strokeWidth="0.25" strokeLinejoin="round" />
            </svg>
          )}
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
            <CameraIcon className="h-5 w-5 text-bone" />
          </span>
          <span className="relative text-sm font-bold text-bone">{alt}</span>
          {hint && <span className="relative max-w-64 text-xs leading-relaxed text-muted">{hint}</span>}
          <span className="relative mt-1 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[11px] text-dim">
            public{src}
          </span>
        </div>
      )}
      {children}
    </div>
  )
}

/* ---------- Cabeçalho de seção ---------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-flame">{children}</p>
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 font-display font-wide text-[32px] font-extrabold uppercase leading-[1.1] tracking-[-0.005em] text-bone sm:text-[40px] lg:text-[46px] ${className}`}
    >
      {children}
    </h2>
  )
}

export const Hl = ({ children }: { children: ReactNode }) => <span className="text-flame">{children}</span>

export const container = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0'
