import { useState } from 'react'
import { faqs } from '../data/content'
import { ArrowUpRight, PlusIcon } from './Icons'
import { Eyebrow, Hl, Reveal, SectionTitle, container } from './ui'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="duvidas" className="relative border-t border-white/5 bg-ink-850 py-24 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-20`}>
        <Reveal className="flex flex-col lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <SectionTitle>
            Perguntas
            <br />
            <Hl>frequentes</Hl>
          </SectionTitle>
          <p className="mt-5 text-base leading-[1.65] text-muted">
            Não achou o que procurava? Nossa equipe responde no WhatsApp todos os dias, das 7h às 22h.
          </p>
          <a
            href="#contato"
            className="group mt-7 inline-flex h-[52px] items-center gap-2.5 self-start rounded-full border border-white/20 px-6 text-[15px] font-bold text-bone transition hover:border-flame hover:text-white"
          >
            Falar com a equipe
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </Reveal>

        <ul className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal as="li" key={f.question} delay={i * 60}>
                <div
                  className={`rounded-[18px] border transition-colors duration-300 ${
                    isOpen ? 'border-flame/25 bg-ink-700' : 'border-white/[0.07] bg-[#202126] hover:bg-ink-750'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left text-[17px] font-bold text-bone sm:text-lg"
                    >
                      {f.question}
                      <PlusIcon
                        className={`h-5 w-5 shrink-0 text-flame transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-[1.65] text-muted">{f.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
