import type { ReactNode, SVGProps } from 'react'
import type { IconName } from '../data/content'

type P = SVGProps<SVGSVGElement>

const stroke = (props: P) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
})

export const BoltIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M13.5 1.5L3.5 14h7l-1.5 8.5L20.5 9h-7.2z" fill="currentColor" />
  </svg>
)
export const ArrowUpRight = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)
export const ArrowDownRight = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M7 7l10 10M17 9v8H9" />
  </svg>
)
export const ArrowLeft = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)
export const ArrowRight = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const ChevronsRight = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 6l6 6-6 6M13 6l6 6-6 6" />
  </svg>
)
export const PlayIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
  </svg>
)
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor" />
  </svg>
)
export const CheckIcon = (p: P) => (
  <svg {...stroke({ strokeWidth: 2.6, ...p })}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
)
export const PlusIcon = (p: P) => (
  <svg {...stroke({ strokeWidth: 2.4, ...p })}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)
export const CloseIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
export const MenuIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
)
export const CalendarIcon = (p: P) => (
  <svg {...stroke(p)}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
)
export const CameraIcon = (p: P) => (
  <svg {...stroke({ strokeWidth: 1.8, ...p })}>
    <path d="M3 8.5A2.5 2.5 0 015.5 6h2l1.5-2h6l1.5 2h2A2.5 2.5 0 0121 8.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5z" />
    <circle cx="12" cy="13" r="3.8" />
  </svg>
)
export const PinIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const serviceIconPaths: Record<IconName, ReactNode> = {
  dumbbell: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  personal: (
    <>
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
      <path d="M15.5 11l2 2 4-4" />
    </>
  ),
  group: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <path d="M14.5 14.6c.8-.4 1.6-.6 2.5-.6 2.3 0 4.1 1.7 4.6 4.5" />
    </>
  ),
  swim: (
    <>
      <circle cx="16.5" cy="6" r="2" />
      <path d="M4 13.5l5-4 3 3 3.5-2.5" />
      <path d="M2 17c1.7 0 1.7-1.2 3.3-1.2S7 17 8.7 17s1.7-1.2 3.3-1.2 1.7 1.2 3.3 1.2 1.7-1.2 3.4-1.2S20.3 17 22 17" />
      <path d="M2 21c1.7 0 1.7-1.2 3.3-1.2S7 21 8.7 21s1.7-1.2 3.3-1.2 1.7 1.2 3.3 1.2 1.7-1.2 3.4-1.2S20.3 21 22 21" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="17" r="3.5" />
      <circle cx="18.5" cy="17" r="3.5" />
      <path d="M5.5 17l4-7h6l3 7M9.5 10L8 7H6M15.5 10l-2-4h2.5" />
    </>
  ),
  glove: (
    <>
      <path d="M7 20.5h9.5v-4c2-1.1 3-3 3-5.2V7.3A3.3 3.3 0 0016.2 4H9.3A3.3 3.3 0 006 7.3V9H5a2.2 2.2 0 000 4.4h2z" />
      <path d="M7 16.5h9.5M10 9h6" />
    </>
  ),
  yoga: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 6.5v6.5M5 9.5l7 3.5 7-3.5M7.5 21l4.5-8 4.5 8" />
    </>
  ),
  pulse: <path d="M2.5 12h4.5l2-5 4 10 2.2-5h6.3" />,
}

export const ServiceIcon = ({ name, ...p }: P & { name: IconName }) => (
  <svg {...stroke({ strokeWidth: 0.9, ...p })}>{serviceIconPaths[name]}</svg>
)
