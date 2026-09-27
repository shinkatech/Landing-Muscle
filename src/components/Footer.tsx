import { useEffect, useState } from 'react'
import { contact, developer, navLinks } from '../data/content'
import { ArrowUpRight } from './Icons'
import { Logo } from './Logo'
import { container } from './ui'

export function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="border-t border-white/[0.06] bg-[#131417] pb-24 pt-11 lg:pb-8">
      <div className={container}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#inicio" aria-label="Forja Academia — voltar ao início">
            <Logo />
          </a>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.slice(1).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-[15px] font-semibold text-[#D9D5CF] transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${contact.email}`} className="text-[15px] font-semibold text-bone transition hover:text-flame-soft">
              {contact.email}
            </a>
            <a
              href="#contato"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-[18px] text-sm font-bold text-bone transition hover:border-flame"
            >
              Fale conosco
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
        <div className="mt-9 flex flex-col items-center gap-5 border-t border-white/[0.06] pt-6 text-[13px] text-dim lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
            <span>© {new Date().getFullYear()} Forja Academia. Todos os direitos reservados.</span>
            <span>
              CNPJ {contact.cnpj} · {contact.hours}
            </span>
          </div>
          <DevCredit />
        </div>
      </div>

      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_12px_30px_rgba(208,64,11,0.45)] transition-all duration-300 hover:-translate-y-1 ${
          showTop ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
        }`}
      >
        <ArrowUpRight className="h-5 w-5 -rotate-45" />
      </a>
    </footer>
  )
}

// Assinatura "Desenvolvido por ShinkaTech" com a logo em versão clara
function DevCredit() {
  return (
    <a
      href={developer.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Desenvolvido por ${developer.name} (abre em nova aba)`}
      className="group flex flex-col items-center gap-1.5 rounded-xl px-3 py-2 transition-colors hover:bg-white/[0.04]"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/35 transition-colors group-hover:text-white/60">
        Desenvolvido por
      </span>
      <span className="flex items-center gap-2.5">
        <img
          src="/shinka-kanji.png"
          alt=""
          className="h-7 w-auto opacity-80 transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(236,40,36,.55)]"
        />
        <span className="h-6 w-px bg-white/15" />
        <span className="flex flex-col items-start gap-1">
          <img src="/shinka-word.png" alt={developer.name} className="h-2.5 w-auto opacity-80 transition group-hover:opacity-100" />
          <span className="text-[8px] tracking-[0.35em] text-white/35">SOFTWARE &amp; IA</span>
        </span>
      </span>
    </a>
  )
}
