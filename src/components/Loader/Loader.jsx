import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 2600
    let raf
    const tick = (now) => {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 2)
      setProgress(Math.floor(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 450)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onComplete && onComplete(), 600)
      return () => clearTimeout(t)
    }
  }, [done, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader__glow" />
          <motion.div
            className="loader__logo"
            animate={{ scale: [1, 1.06, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 64 64" width="96" height="96">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#1e90ff" />
                  <stop offset="1" stopColor="#0a3cff" />
                </linearGradient>
              </defs>
              <rect x="6" y="6" width="52" height="52" rx="14" fill="none" stroke="url(#lg)" strokeWidth="3" />
              <path d="M20 44V20h12a10 10 0 0 1 0 20H20" fill="none" stroke="url(#lg)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="44" cy="20" r="4" fill="#1e90ff" />
            </svg>
          </motion.div>

          <h1 className="loader__name">ADVENWARE</h1>
          <p className="loader__slogan">Engineering Africa’s technological future</p>

          <div className="loader__bar">
            <motion.div
              className="loader__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loader__pct">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
