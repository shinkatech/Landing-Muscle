import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { CloseIcon, MenuIcon } from './Icons'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // fundo sólido depois de rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // destaca o link da seção visível
  useEffect(() => {
    const sections = ['inicio', ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'inicio' ? '' : e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // menu mobile: trava a rolagem e fecha com Esc
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav
        aria-label="Principal"
        className={`mx-auto flex h-16 max-w-[1200px] items-center rounded-full border pl-6 pr-2 transition-all duration-500 sm:h-[68px] ${
          scrolled
            ? 'border-white/10 bg-ink-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-white/[0.09] bg-white/[0.045] backdrop-blur-md'
        }`}
      >
        <a href="#inicio" aria-label="Forja Academia — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="ml-16 hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                  active === l.id ? 'text-white' : 'text-[#D9D5CF] hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-flame transition-opacity ${
                    active === l.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        <a
          href="#contato"
          className="hidden h-12 items-center rounded-full bg-brand px-6 text-[15px] font-bold text-white transition hover:bg-[#b8390a] hover:shadow-[0_10px_30px_rgba(208,64,11,0.45)] sm:inline-flex"
        >
          Aula grátis
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-bone lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`mx-auto mt-3 max-w-[1200px] origin-top overflow-hidden rounded-3xl border border-white/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-bold text-bone hover:bg-white/5"
              >
                {l.label}
                {active === l.id && <span className="h-2 w-2 rounded-full bg-flame" />}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex h-14 items-center justify-center rounded-full bg-brand text-base font-bold text-white"
            >
              Quero minha aula grátis
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
