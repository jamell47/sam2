import { useState } from 'react'
import { motion } from 'framer-motion'
import Loader from './components/Loader/Loader'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Companies from './components/Companies/Companies'
import Leadership from './components/Leadership/Leadership'
import Achievements from './components/Achievements/Achievements'
import TechStack from './components/TechStack/TechStack'
import Timeline from './components/Timeline/Timeline'
import Gallery from './components/Gallery/Gallery'
import News from './components/News/News'
import Testimonials from './components/Testimonials/Testimonials'
import Vision from './components/Vision/Vision'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollProgress } from './hooks/useMousePosition'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const progress = useScrollProgress()

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <AnimatedBackground />
      <CustomCursor />

      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        initial={false}
      />

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Companies />
            <Leadership />
            <Achievements />
            <TechStack />
            <Timeline />
            <Gallery />
            <News />
            <Testimonials />
            <Vision />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
