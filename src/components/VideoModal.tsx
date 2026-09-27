import { useEffect, useRef, useState } from 'react'
import { CloseIcon, PlayIcon } from './Icons'

/** Abre o vídeo de public/videos/tour.mp4. Sem o arquivo, mostra um aviso. */
export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-label="Tour pela academia"
      className="m-auto w-[min(960px,92vw)] overflow-visible rounded-[28px] bg-transparent p-0 text-bone backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 photo-placeholder">
        {open && !missing && (
          <video
            src="/videos/tour.mp4"
            controls
            autoPlay
            playsInline
            onError={() => setMissing(true)}
            className="h-full w-full object-cover"
          />
        )}
        {missing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand">
              <PlayIcon className="ml-1 h-7 w-7 text-white" />
            </span>
            <p className="text-lg font-bold text-white">Seu vídeo aparece aqui</p>
            <p className="max-w-md text-sm text-muted">
              Coloque o arquivo em <code className="rounded bg-black/40 px-1.5 py-0.5 text-flame-soft">public/videos/tour.mp4</code> e ele toca automaticamente.
            </p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </dialog>
  )
}
