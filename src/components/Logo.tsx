import { BoltIcon } from './Icons'

export function Logo() {
  return (
    <span className="flex items-center gap-2 text-bone">
      <BoltIcon className="h-[22px] w-[22px] text-flame-bright" />
      <span className="font-display font-wide text-[21px] font-extrabold tracking-[0.02em]">FORJA</span>
    </span>
  )
}
