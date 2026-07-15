import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  const [variant, setVariant] = useState('default')
  const [trails, setTrails] = useState([])
  const [ripple, setRipple] = useState(null)
  const [down, setDown] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setTrails((prev) => [
        ...prev.slice(-9),
        { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY }
      ])
    }

    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor="hover"]')
      if (t) setVariant('hover')
      else setVariant('default')
    }

    const handleDown = () => setDown(true)
    const handleUp = (e) => {
      setDown(false)
      const id = Date.now()
      setRipple({ id, x: e.clientX, y: e.clientY })
      setTimeout(() => setRipple(null), 600)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [x, y])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const size = variant === 'hover' ? 56 : 18

  return (
    <>
      <motion.div
        className="cursor"
        style={{ x: sx, y: sy }}
        animate={{ width: size, height: size, opacity: down ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <span className="cursor__ring" />
      </motion.div>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
      />
      {trails.map((t) => (
        <span
          key={t.id}
          className="cursor-trail"
          style={{ left: t.x, top: t.y }}
        />
      ))}
      {ripple && (
        <span
          className="cursor-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
    </>
  )
}
