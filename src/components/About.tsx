import { stats, videoCover, whoFacts } from '../data/content'
import { BoltIcon, PlayIcon } from './Icons'
import { CountUp, Eyebrow, Hl, Photo, Reveal, SectionTitle, container } from './ui'

export function About({ onPlayVideo }: { onPlayVideo: () => void }) {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink-900 py-24 lg:py-28">
      <BoltIcon aria-hidden className="pointer-events-none absolute -right-24 -top-10 h-[520px] w-[520px] text-white/[0.025]" />
      <div className={`${container} relative`}>
        <Reveal>
          <Eyebrow>Sobre nós</Eyebrow>
          <SectionTitle>
            Sua jornada fitness <Hl>começa</Hl> aqui
          </SectionTitle>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.65] text-muted">
            Na Forja, nosso trabalho é ajudar você a destravar o seu potencial. Unimos equipamentos de ponta, professores de Educação Física registrados no CREF e um ambiente acolhedor para você treinar com segurança, constância e resultado.
          </p>
        </Reveal>

        <dl className="mt-12 grid max-w-[1040px] grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="flex flex-col-reverse gap-1.5">
              <dt className="text-[15px] text-muted">{s.label}</dt>
              <dd className="whitespace-nowrap font-display font-wide text-[34px] font-bold leading-none text-white sm:text-[52px]">
                <CountUp to={s.value} />
                <span className="text-flame">{s.suffix}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-14">
          <Photo
            src={videoCover}
            alt="Capa do vídeo: tour pela academia"
            hint="Área de treino em luz baixa com detalhes em laranja"
            bare
            className="h-[300px] rounded-[28px] border border-white/[0.08] sm:h-[420px] lg:h-[460px]"
          >
            <div aria-hidden className="absolute inset-0 bg-ink-950/45" />
            <button
              type="button"
              onClick={onPlayVideo}
              aria-label="Assistir ao tour pela academia"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/35 bg-white/[0.12] shadow-[0_0_0_14px_rgba(255,255,255,0.05)] backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:shadow-[0_0_0_18px_rgba(208,64,11,0.18)]">
                <PlayIcon className="ml-1 h-[30px] w-[30px] text-white" />
              </span>
            </button>
            <span className="pointer-events-none absolute bottom-6 left-6 flex h-10 items-center gap-2.5 rounded-full border border-white/10 bg-ink-950/80 px-4 text-[13px] font-bold text-bone">
              <span className="h-2 w-2 rounded-full bg-flame-bright" />
              Tour pela unidade · 1:24
            </span>
          </Photo>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-8 rounded-3xl border border-white/[0.07] bg-ink-800 p-7 sm:p-9 lg:grid-cols-[300px_repeat(3,minmax(0,1fr))]">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-extrabold text-white">O que a ciência recomenda</span>
              <span className="text-[13px] leading-normal text-dim">
                Fonte:{' '}
                <a
                  href="https://www.who.int/publications/i/item/9789240015128"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/20 underline-offset-2 hover:text-flame-soft"
                >
                  Organização Mundial da Saúde — Diretrizes sobre atividade física e comportamento sedentário (2020)
                </a>
                , para adultos de 18 a 64 anos.
              </span>
            </div>
            {whoFacts.map((f) => (
              <div key={f.value} className="flex flex-col gap-1.5 border-white/[0.08] lg:border-l lg:pl-7">
                <span className="font-display font-wide text-[30px] font-bold text-flame">{f.value}</span>
                <span className="text-sm leading-normal text-muted">{f.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
