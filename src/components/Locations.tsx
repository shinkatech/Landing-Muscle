import { useMemo, useState } from 'react'
import { cities, regions, type City, type Region } from '../data/content'
import { PinIcon } from './Icons'
import { CountUp, Eyebrow, Hl, Reveal, SectionTitle, container } from './ui'

const totalUnits = cities.reduce((sum, c) => sum + c.units, 0)

export function Locations() {
  const [region, setRegion] = useState<Region | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<City>(cities[0])

  const byRegion = useMemo(
    () =>
      regions.map((r) => {
        const list = cities.filter((c) => c.region === r)
        return { region: r, cities: list, units: list.reduce((s, c) => s + c.units, 0) }
      }),
    [],
  )

  const pickRegion = (r: Region) => {
    const next = region === r ? null : r
    setRegion(next)
    if (next) setSelected(cities.find((c) => c.region === next) ?? cities[0])
  }

  return (
    <section id="unidades" className="relative overflow-hidden border-t border-white/5 bg-ink-900 py-24 lg:py-28">
      <div className={container}>
        <Reveal>
          <Eyebrow>Nossas unidades</Eyebrow>
          <SectionTitle>
            Presença nacional: a <Hl>Forja</Hl>
            <br className="hidden sm:block" /> em <Hl>todo o Brasil</Hl>
          </SectionTitle>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-display font-wide text-[52px] font-bold leading-none text-white">
              <CountUp to={totalUnits} />
              <span className="text-flame">+</span>
            </span>
            <span className="text-[15px] text-muted">Unidades em {cities.length} cidades</span>
          </div>
          <div className="hidden h-16 w-px bg-white/10 md:block" />
          <p className="max-w-[620px] text-[17px] leading-[1.65] text-muted">
            Estamos nas cinco regiões do país. Com o plano Plus ou Premium você treina em qualquer unidade da rede, seja na sua cidade ou em viagem.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[480px_minmax(0,1fr)]">
          {/* Regiões (funcionam como filtro do mapa) */}
          <div className="order-2 flex flex-col gap-3 lg:order-1">
            {byRegion.map((r, i) => {
              const active = region === r.region
              return (
                <Reveal key={r.region} delay={i * 70}>
                  <button
                    type="button"
                    onClick={() => pickRegion(r.region)}
                    aria-pressed={active}
                    className={`flex w-full items-start gap-5 rounded-[18px] border px-6 py-5 text-left transition duration-300 ${
                      active
                        ? 'border-flame/50 bg-ink-700 shadow-[0_16px_40px_rgba(208,64,11,0.15)]'
                        : 'border-white/[0.07] bg-ink-800 hover:border-white/15 hover:bg-ink-750'
                    }`}
                  >
                    <span className="w-10 font-display font-wide text-[26px] font-extrabold text-flame">{r.units}</span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[17px] font-extrabold text-white">{r.region}</span>
                      <span className="text-sm leading-normal text-muted">{r.cities.map((c) => c.name).join(', ')}</span>
                    </span>
                  </button>
                </Reveal>
              )
            })}
            <p className="mt-1 text-[13px] text-dim">
              Número de unidades por região. Clique para destacar no mapa.
            </p>
          </div>

          {/* Mapa */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[620/560] w-full max-w-[620px]">
              <img
                src="/mapa-brasil.svg"
                alt="Mapa da América do Sul em pontos, com o Brasil destacado e as cidades com unidades Forja marcadas em laranja"
                className="absolute inset-0 h-full w-full select-none"
                draggable={false}
              />
              {cities.map((c) => {
                const dimmed = region !== null && c.region !== region
                const isSel = selected.name === c.name
                const showTip = hovered === c.name
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelected(c)}
                    onMouseEnter={() => setHovered(c.name)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(c.name)}
                    onBlur={() => setHovered(null)}
                    aria-label={`${c.name}: ${c.units} ${c.units > 1 ? 'unidades' : 'unidade'}`}
                    className={`group absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-300 ${
                      dimmed ? 'opacity-25' : 'opacity-100'
                    } ${showTip || isSel ? 'z-20' : 'z-10'}`}
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  >
                    {(c.hq || isSel) && !dimmed && (
                      <span className="absolute h-3 w-3 animate-ping-slow rounded-full bg-flame-bright/70" />
                    )}
                    <span
                      className={`relative rounded-full bg-flame-bright shadow-[0_0_14px_rgba(255,91,31,0.9)] transition-all duration-300 group-hover:scale-150 ${
                        c.hq ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5'
                      } ${isSel ? 'scale-150 ring-4 ring-flame-bright/25' : ''}`}
                    />
                    <span
                      className={`pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-ink-950/95 px-3 py-1.5 text-xs font-bold text-bone shadow-lg transition-all duration-200 ${
                        showTip ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                      }`}
                    >
                      {c.name} · {c.units} {c.units > 1 ? 'unidades' : 'unidade'}
                    </span>
                  </button>
                )
              })}

              {/* Cartão da cidade selecionada */}
              <div className="absolute bottom-0 left-0 hidden w-[250px] sm:block rounded-[18px] border border-white/10 bg-ink-950/90 p-4 backdrop-blur-md sm:w-[270px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand">
                    <PinIcon className="h-5 w-5 text-white" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-white">
                      {selected.name}
                      {selected.hq && <span className="ml-2 rounded-full bg-flame/15 px-2 py-0.5 text-[11px] font-bold text-flame-soft">Sede</span>}
                    </span>
                    <span className="text-[13px] text-muted">
                      {selected.region} · {selected.units} {selected.units > 1 ? 'unidades' : 'unidade'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
