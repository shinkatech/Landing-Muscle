import { useState } from 'react'
import { formatBRL, plans } from '../data/content'
import { ArrowUpRight, CheckIcon } from './Icons'
import { Eyebrow, Hl, Reveal, SectionTitle, container } from './ui'

export function Plans() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="planos" className="relative border-t border-white/5 bg-ink-850 py-24 lg:py-28">
      <div className={container}>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Planos</Eyebrow>
            <SectionTitle>
              Planos <Hl>flexíveis</Hl> para
              <br className="hidden sm:block" /> cada objetivo
            </SectionTitle>
          </div>

          <div
            role="radiogroup"
            aria-label="Forma de pagamento"
            className="relative grid w-full grid-cols-2 self-start rounded-full sm:w-auto border border-white/[0.08] bg-ink-700 p-[5px] md:self-auto"
          >
            <span
              aria-hidden
              className={`absolute bottom-[5px] left-[5px] top-[5px] w-[calc(50%-5px)] rounded-full bg-brand shadow-[0_8px_24px_rgba(208,64,11,0.4)] transition-transform duration-300 ease-out ${
                annual ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            <button
              type="button"
              role="radio"
              aria-checked={!annual}
              onClick={() => setAnnual(false)}
              className={`relative h-11 rounded-full px-5 text-[15px] font-bold transition-colors ${!annual ? 'text-white' : 'text-sand hover:text-white'}`}
            >
              Mensal
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={annual}
              onClick={() => setAnnual(true)}
              className={`relative h-11 rounded-full px-5 text-[15px] font-bold whitespace-nowrap transition-colors ${annual ? 'text-white' : 'text-sand hover:text-white'}`}
            >
              <span className="sm:hidden">Anual −15%</span>
              <span className="hidden sm:inline">Anual · até 15% off</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => {
            const price = annual ? p.annual : p.monthly
            const f = p.featured
            return (
              <Reveal key={p.name} delay={i * 100} className={f ? 'md:col-span-2 lg:col-span-1' : ''}>
                <article
                  className={`group relative flex h-full min-h-[600px] flex-col rounded-[28px] border p-9 transition duration-500 hover:-translate-y-2 ${
                    f
                      ? 'border-[#FFAA82]/35 bg-[radial-gradient(120%_70%_at_50%_0%,#D94A12_0%,#B8390A_55%,#9A2F08_100%)] shadow-[0_30px_80px_rgba(208,64,11,0.28)] hover:shadow-[0_40px_100px_rgba(208,64,11,0.4)]'
                      : 'border-white/[0.08] bg-ink-750 hover:border-white/20 hover:shadow-[0_30px_70px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-extrabold text-white">{p.name}</h3>
                    {f && (
                      <span className="flex h-[30px] items-center rounded-full bg-white px-3 text-xs font-extrabold uppercase tracking-[0.04em] text-brand-dark">
                        Mais escolhido
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className={`text-lg font-bold ${f ? 'text-[#FFE6DA]' : 'text-[#D9D5CF]'}`}>R$</span>
                    <span
                      key={price}
                      className="animate-[pricein_0.45s_cubic-bezier(0.22,1,0.36,1)] font-display font-wide text-[52px] font-extrabold leading-none text-white"
                    >
                      {formatBRL(price)}
                    </span>
                    <span className={`text-[15px] ${f ? 'text-[#FFE6DA]' : 'text-muted'}`}>/mês</span>
                  </div>
                  <span className={`mt-2.5 text-[13px] font-semibold ${f ? 'text-[#FFD6C4]' : 'text-dim'}`}>
                    {annual ? `No plano anual, em 12x · economize R$ ${formatBRL((p.monthly - p.annual) * 12)}/ano` : 'Plano mensal, sem fidelidade'}
                  </span>
                  <p className={`mt-4 text-[15px] leading-[1.55] ${f ? 'text-[#FFECE3]' : 'text-muted'}`}>{p.description}</p>

                  <div className={`my-6 h-px ${f ? 'bg-white/20' : 'bg-white/[0.08]'}`} />

                  <span className={`text-xs font-bold uppercase tracking-[0.12em] ${f ? 'text-[#FFD6C4]' : 'text-dim'}`}>
                    O que está incluso
                  </span>
                  <ul className={`mt-4 flex flex-col gap-3 text-[15px] ${f ? 'text-white' : 'text-[#D9D5CF]'}`}>
                    {p.features.map((feat) => (
                      <li key={feat} className="flex gap-2.5">
                        <CheckIcon className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${f ? 'text-white' : 'text-flame'}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className={`mt-auto flex h-[52px] items-center justify-center gap-2 rounded-full text-[15px] font-bold transition ${
                      f ? 'bg-white text-brand-dark hover:bg-[#FFF1EA]' : 'bg-ink-600 text-white hover:bg-brand'
                    }`}
                  >
                    Começar agora
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-dim">
          Sem taxa de matrícula · Plano mensal sem fidelidade · Plano anual com fidelidade de 12 meses
        </p>
      </div>
    </section>
  )
}
