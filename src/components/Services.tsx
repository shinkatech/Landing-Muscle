import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { services } from '../data/content'
import { ArrowLeft, ArrowRight, ArrowUpRight, ServiceIcon } from './Icons'
import { Eyebrow, Hl, Photo, Reveal, SectionTitle, container } from './ui'

export function Services() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [progress, setProgress] = useState(0)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= max - 4)
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : 360
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  // arrastar com o mouse (no touch a rolagem nativa já funciona)
  const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== 'mouse' || !trackRef.current) return
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const el = trackRef.current
    if (!drag.current.active || !el) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 5 && !drag.current.moved) {
      drag.current.moved = true
      el.setPointerCapture(e.pointerId)
      el.style.scrollSnapType = 'none'
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx
  }
  const endDrag = () => {
    const el = trackRef.current
    if (!drag.current.active || !el) return
    drag.current.active = false
    el.style.scrollSnapType = ''
  }

  return (
    <section id="servicos" className="relative overflow-hidden border-t border-white/5 bg-ink-850 py-24 lg:py-28">
      <div className={container}>
        <Reveal>
          <Eyebrow>Nossos serviços</Eyebrow>
          <SectionTitle>
            Libere seu potencial: <Hl>serviços de treino</Hl>
            <br className="hidden md:block" /> feitos para você
          </SectionTitle>
        </Reveal>
        <Reveal className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[640px] text-[17px] leading-[1.65] text-muted">
            Da musculação à natação, cada modalidade tem orientação profissional e turmas por nível. Você monta a rotina que cabe na sua agenda e evolui com acompanhamento de verdade.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Serviço anterior"
              aria-controls="lista-servicos"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 bg-ink-700 text-bone transition enabled:hover:border-flame enabled:hover:text-flame disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Próximo serviço"
              aria-controls="lista-servicos"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand text-white transition enabled:hover:bg-[#b8390a] enabled:hover:shadow-[0_10px_30px_rgba(208,64,11,0.45)] disabled:opacity-40"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <ul
        id="lista-servicos"
        ref={trackRef}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault()
            e.stopPropagation()
            drag.current.moved = false
          }
        }}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 pl-5 pr-5 select-none [scroll-padding-left:20px] sm:pl-8 sm:[scroll-padding-left:32px] xl:pl-[calc((100vw-1200px)/2)] xl:[scroll-padding-left:calc((100vw-1200px)/2)]"
      >
        {services.map((s, i) => (
          <li key={s.title} className="group w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-[340px]">
            <article className="relative h-[400px] overflow-hidden rounded-3xl border border-white/[0.08] transition duration-500 group-hover:-translate-y-1.5 group-hover:border-flame/40">
              <Photo
                src={s.image}
                alt={s.title}
                bare
                className="absolute inset-0"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-ink-950/60 backdrop-blur-md transition duration-500 group-hover:border-flame/60 group-hover:bg-brand">
                <ServiceIcon name={s.icon} className="h-7 w-7 text-white [stroke-width:1.6]" />
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 bg-gradient-to-b from-ink-950/0 via-ink-950/85 to-ink-950/95 p-6 pt-24">
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-[21px] font-extrabold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-normal text-[#B5B0A9] lg:mt-0 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:mt-1.5 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-focus-within:mt-1.5 lg:group-focus-within:max-h-24 lg:group-focus-within:opacity-100">
                    {s.description}
                  </p>
                </div>
                <a
                  href="#planos"
                  aria-label={`Ver planos com ${s.title.toLowerCase()}`}
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition duration-300 group-hover:rotate-45 group-hover:bg-brand ${
                    i === 0 ? 'bg-brand' : 'bg-white/10'
                  }`}
                >
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className={`${container} mt-8`}>
        <div className="h-1 w-full max-w-[320px] overflow-hidden rounded-full bg-white/10" aria-hidden>
          <div
            className="h-full rounded-full bg-flame transition-[width] duration-200"
            style={{ width: `${18 + progress * 82}%` }}
          />
        </div>
      </div>
    </section>
  )
}
