import { useState } from 'react'
import { reasons } from '../data/content'
import { ArrowDownRight } from './Icons'
import { Eyebrow, Hl, Photo, Reveal, SectionTitle, container } from './ui'

export function WhyChoose() {
  const [open, setOpen] = useState<number>(1)
  const shown = open === -1 ? 1 : open

  return (
    <section id="diferenciais" className="relative border-t border-white/5 bg-ink-900 py-24 lg:py-28">
      <div className={container}>
        <Reveal>
          <Eyebrow>Diferenciais</Eyebrow>
          <SectionTitle>
            Por que escolher a Forja
            <br className="hidden sm:block" /> para a sua <Hl>jornada fitness</Hl>?
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[560px_minmax(0,1fr)]">
          {/* Imagem troca conforme o item aberto */}
          <Reveal className="relative h-[380px] overflow-hidden rounded-[28px] border border-white/[0.08] sm:h-[480px] lg:sticky lg:top-28 lg:h-[568px]">
            {reasons.map((r, i) => (
              <Photo
                key={r.image}
                src={r.image}
                alt={r.highlight + r.rest}
                hint={r.imageHint}
                className={`absolute inset-0 transition-all duration-700 ${
                  shown === i ? 'scale-100 opacity-100' : 'pointer-events-none scale-105 opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-6 left-6 flex w-[290px] items-center gap-3.5 rounded-[18px] border border-white/10 bg-ink-950/85 px-5 py-[18px] backdrop-blur-md">
              <span className="font-display font-wide text-[34px] font-extrabold text-flame">100%</span>
              <span className="text-sm leading-snug text-[#D9D5CF]">dos professores com registro ativo no CREF</span>
            </div>
          </Reveal>

          <ul className="flex flex-col gap-3.5">
            {reasons.map((r, i) => {
              const isOpen = open === i
              return (
                <Reveal as="li" key={r.highlight} delay={i * 70}>
                  <div
                    className={`rounded-[20px] border transition-colors duration-300 ${
                      isOpen ? 'border-flame/25 bg-ink-700' : 'border-white/[0.07] bg-ink-800 hover:bg-ink-750'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        id={`dif-btn-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`dif-panel-${i}`}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left text-lg font-bold text-bone sm:text-xl"
                      >
                        <span>
                          <span className="text-flame">{r.highlight}</span>
                          {r.rest}
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? 'rotate-180 bg-brand text-white' : 'text-bone'
                          }`}
                        >
                          <ArrowDownRight className="h-5 w-5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`dif-panel-${i}`}
                      role="region"
                      aria-labelledby={`dif-btn-${i}`}
                      className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-7 pb-6 text-[15px] leading-[1.65] text-muted">{r.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
