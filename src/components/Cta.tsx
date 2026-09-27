import { useState, type FormEvent } from 'react'
import { cities } from '../data/content'
import { ArrowUpRight, CheckIcon } from './Icons'
import { Hl, Reveal, container } from './ui'

type Status = 'idle' | 'sending' | 'done'

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export function Cta() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (name.trim().length < 2) return setError('Digite seu nome.')
    if (phone.replace(/\D/g, '').length < 10) return setError('Digite um WhatsApp com DDD.')
    if (!city) return setError('Escolha a cidade da unidade.')
    setError('')
    setStatus('sending')
    // TODO: enviar para o seu CRM, planilha ou API de agendamento.
    setTimeout(() => setStatus('done'), 900)
  }

  const field =
    'h-14 w-full rounded-full border border-white/12 bg-ink-950/70 px-5 text-[15px] text-bone placeholder:text-dim outline-none transition focus:border-flame focus:bg-ink-950'

  return (
    <section id="contato" className="relative overflow-hidden bg-[#202126] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(214,70,14,0.35),rgba(214,70,14,0))]"
      />
      <Reveal className={`${container} relative flex flex-col items-center text-center`}>
        <h2 className="font-display font-wide text-[38px] font-extrabold uppercase leading-[1.05] text-bone sm:text-[58px]">
          Pronto para <Hl>evoluir</Hl>?
        </h2>
        <p className="mt-6 max-w-[760px] text-[17px] leading-[1.65] text-sand sm:text-lg">
          Dê o primeiro passo para uma rotina mais forte e saudável: experimente a Forja por 7 dias, sem custo. Conheça a estrutura, faça aulas e descubra por que somos o lugar certo para os seus objetivos.
        </p>

        {status === 'done' ? (
          <div role="status" className="mt-10 flex items-center gap-4 rounded-3xl border border-flame/30 bg-ink-950/80 px-7 py-5 text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand">
              <CheckIcon className="h-6 w-6 text-white" />
            </span>
            <span>
              <span className="block text-lg font-extrabold text-white">Pronto, {name.trim().split(' ')[0]}!</span>
              <span className="text-[15px] text-muted">Nossa equipe de {city} vai chamar você no WhatsApp para agendar sua semana grátis.</span>
            </span>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-10 grid w-full max-w-[1060px] gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="sr-only" htmlFor="lead-nome">Nome</label>
            <input id="lead-nome" className={field} placeholder="Seu nome" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label className="sr-only" htmlFor="lead-tel">WhatsApp</label>
            <input
              id="lead-tel"
              className={field}
              placeholder="WhatsApp com DDD"
              inputMode="tel"
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
            />
            <label className="sr-only" htmlFor="lead-cidade">Cidade</label>
            <select
              id="lead-cidade"
              className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23FF6A2B%22 stroke-width=%222.4%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_20px_center] bg-no-repeat pr-12 ${city ? '' : 'text-dim'}`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Cidade da unidade</option>
              {cities.map((c) => (
                <option key={c.name} value={c.name} className="text-ink-900">
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-base font-bold whitespace-nowrap text-white shadow-[0_16px_40px_rgba(208,64,11,0.35)] transition hover:bg-[#b8390a] disabled:opacity-70"
            >
              {status === 'sending' ? 'Enviando…' : 'Quero minha semana grátis'}
              <ArrowUpRight className="h-[18px] w-[18px] transition-transform group-hover:rotate-45" />
            </button>
          </form>
        )}
        <p aria-live="polite" className="mt-3 min-h-5 text-sm font-semibold text-flame-soft">{error}</p>
        <span className="mt-1 text-[13px] text-dim">Válido para novos alunos, mediante preenchimento do PAR-Q.</span>
      </Reveal>
    </section>
  )
}
