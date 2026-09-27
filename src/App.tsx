import { useState } from 'react'
import { About } from './components/About'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Locations } from './components/Locations'
import { Navbar } from './components/Navbar'
import { Plans } from './components/Plans'
import { Services } from './components/Services'
import { VideoModal } from './components/VideoModal'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-brand px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero onPlayVideo={() => setVideoOpen(true)} />
        <About onPlayVideo={() => setVideoOpen(true)} />
        <Services />
        <WhyChoose />
        <Plans />
        <Locations />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
