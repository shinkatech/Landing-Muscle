import { useRef, type MouseEvent } from 'react'
import { heroImage, heroTags } from '../data/content'
import { CalendarIcon, ChevronsRight, PlayIcon, StarIcon } from './Icons'
import { Photo, container } from './ui'

const avatars = [
  { initials: 'AM', bg: 'bg-[#5A3322]', fg: 'text-[#FFD9C7]' },
  { initials: 'RS', bg: 'bg-[#2F3A4A]', fg: 'text-[#D5E3F5]' },
  { initials: 'JP', bg: 'bg-[#4A3A2A]', fg: 'text-[#F4E2C9]' },
]

export function Hero({ onPlayVideo }: { onPlayVideo: () => void }) {
  const glowRef = useRef<HTMLDivElement>(null)

  // brilho laranja acompanha o mouse de leve
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = glowRef.current
    if (!el) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 40
    const y = ((e.clientY - r.top) / r.height - 0.5) * 40
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  return (
    <section
      id="inicio"
      onMouseMove={onMove}
      className="relative overflow-hidden bg-ink-950 pt-32 lg:h-[900px] lg:pt-0"
    >
      {/* luzes de fundo */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-420px)] top-[420px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(214,70,14,0.55)_0%,rgba(214,70,14,0.18)_38%,rgba(214,70,14,0)_66%)] transition-transform duration-700 ease-out lg:left-[calc(50%-80px)] lg:top-[60px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_0%_0%,rgba(214,70,14,0.14),rgba(214,70,14,0)_70%)]" />
      <div aria-hidden className="pointer-events-none absolute left-[calc(50%+20px)] top-[150px] hidden h-[660px] w-[660px] rounded-full border border-flame-soft/15 lg:block" />
      <div aria-hidden className="pointer-events-none absolute left-[calc(50%-50px)] top-[80px] hidden h-[800px] w-[800px] rounded-full border border-flame-soft/[0.07] lg:block" />

      <div className={`${container} relative lg:grid lg:h-full lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-10`}>
        {/* Texto */}
        <div className="relative z-10 flex flex-col lg:pt-[188px]">
          <h1 className="font-display font-wide text-[52px] font-extrabold leading-[0.98] tracking-[-0.02em] text-white sm:text-[72px] xl:text-[84px]">
            Forje sua
            <br />
            <span className="text-flame">melhor</span> versão
          </h1>
          <p className="mt-7 max-w-[470px] text-[17px] leading-relaxed text-sand sm:text-lg">
            Do primeiro treino ao alto rendimento: acompanhamento profissional, estrutura completa e uma comunidade que puxa você para cima.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#planos"
              className="group inline-flex h-[58px] items-center gap-3 rounded-full bg-brand px-8 text-[17px] font-bold text-white transition hover:bg-[#b8390a] hover:shadow-[0_14px_40px_rgba(208,64,11,0.5)]"
            >
              Matricule-se
              <ChevronsRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onPlayVideo}
              className="group inline-flex h-[58px] items-center gap-3.5 text-[17px] font-bold text-bone"
            >
              <span className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/40" />
                <PlayIcon className="relative h-[18px] w-[18px] text-brand" />
              </span>
              Ver o tour da academia
            </button>
          </div>

          <div className="mt-11 flex items-center gap-4">
            <div className="flex">
              {avatars.map((a, i) => (
                <span
                  key={a.initials}
                  className={`flex h-[46px] w-[46px] items-center justify-center rounded-full border-[3px] border-ink-950 text-sm font-extrabold ${a.bg} ${a.fg} ${i ? '-ml-3' : ''}`}
                >
                  {a.initials}
                </span>
              ))}
              <span className="-ml-3 flex h-[46px] w-[46px] items-center justify-center rounded-full border-[3px] border-ink-950 bg-brand text-[15px] font-extrabold text-white">
                +
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-[3px]" aria-label="Nota 4,9 de 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-flame" />
                ))}
                <span className="ml-2 text-[15px] font-extrabold text-white">4,9</span>
              </div>
              <span className="text-sm text-muted">2,1 mil avaliações de alunos</span>
            </div>
          </div>

          <ul className="mt-12 flex max-w-[620px] flex-wrap gap-2.5 lg:mt-auto lg:mb-[88px]">
            {heroTags.map((t) => (
              <li key={t}>
                <a
                  href="#servicos"
                  className="inline-flex h-10 items-center rounded-full border border-white/15 bg-white/[0.03] px-[18px] text-sm font-semibold text-[#E8E4DE] transition hover:border-flame/60 hover:bg-flame/10 hover:text-white"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Foto em arco */}
        <div className="relative mx-auto mt-14 w-full max-w-[440px] lg:mt-0 lg:max-w-none lg:self-end">
          <Photo
            src={heroImage}
            priority
            alt="Atleta de regata preta com os braços cruzados em academia escura"
            hint="Retrato vertical, recorte na cintura, luz lateral laranja e fundo escuro"
            showBolt
            className="h-[520px] rounded-t-[220px] border border-b-0 border-flame-soft/25 sm:h-[620px] lg:h-[776px] lg:rounded-t-[250px]"
            imgClassName="object-[50%_20%] saturate-[0.9]"
          >
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(214,70,14,0.10)_0%,rgba(17,18,21,0)_45%,rgba(17,18,21,0.85)_100%)] mix-blend-normal" />
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_30%,rgba(255,106,43,0.28),rgba(255,106,43,0)_60%)] mix-blend-screen" />
          </Photo>

          <div className="absolute -left-4 bottom-24 z-10 flex w-[272px] animate-float items-center gap-3.5 rounded-[20px] border border-white/10 bg-ink-900/90 px-[18px] py-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:-left-10 lg:-left-[84px] lg:bottom-[150px]">
            <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-brand">
              <CalendarIcon className="h-[22px] w-[22px] text-white" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-muted">Próxima aula · hoje</span>
              <span className="text-base font-extrabold text-white">Funcional · 18h30</span>
              <span className="text-xs font-bold text-flame-soft">6 vagas restantes</span>
            </div>
          </div>

          <div className="absolute -right-2 top-16 z-10 flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-ink-900/90 px-4 backdrop-blur-md sm:right-2 lg:-right-4 lg:top-[52px]">
            <span className="relative flex h-[9px] w-[9px]">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#3DDC84]/60" />
              <span className="relative h-[9px] w-[9px] rounded-full bg-[#3DDC84]" />
            </span>
            <span className="text-[13px] font-bold text-bone">Aberto agora · 5h às 23h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
