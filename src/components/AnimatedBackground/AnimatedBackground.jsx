import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

const BINARY = Array.from({ length: 26 }, () =>
  Array.from({ length: 6 }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
)

const EQUATIONS = [
  'f(x) = Σ wᵢxᵢ + b', '∇·E = ρ/ε₀', 'E = mc²', '∫ e^x dx', '∂L/∂θ',
  'y = σ(Wx)', 'λ = h/p', 'a² + b² = c²', 'P(A|B) = P(B|A)P(A)/P(B)',
  'ŷ = argmax p(y|x)', 'Δx → 0', 'e^{iπ} + 1 = 0', 'σ(z) = 1/(1+e⁻ᶻ)'
]

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, raf, mouse = { x: -999, y: -999 }

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const init = () => {
      const count = Math.min(110, Math.floor((width * height) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dxm = p.x - mouse.x
        const dym = p.y - mouse.y
        const dm = Math.sqrt(dxm * dxm + dym * dym)
        if (dm < 140) {
          p.x += (dxm / dm) * 0.6
          p.y += (dym / dm) * 0.6
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(120, 180, 255, 0.7)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(30, 144, 255, ${0.16 * (1 - dist / 140)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    resize()
    init()
    draw()
    window.addEventListener('resize', () => { resize(); init() })
    window.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__gradient" />
      <div className="bg__grid" />
      <canvas ref={canvasRef} className="bg__canvas" />
      <div className="bg__spheres">
        <span className="sphere s1" />
        <span className="sphere s2" />
        <span className="sphere s3" />
      </div>
      <div className="bg__binary">
        {BINARY.map((line, i) => (
          <span key={i} style={{ '--i': i }}>{line}</span>
        ))}
      </div>
      <div className="bg__equations">
        {EQUATIONS.map((eq, i) => (
          <span key={i} style={{ '--i': i }}>{eq}</span>
        ))}
      </div>
      <div className="bg__mesh" />
      <div className="bg__noise" />
    </div>
  )
}
