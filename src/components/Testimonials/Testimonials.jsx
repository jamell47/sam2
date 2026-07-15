import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from '../SectionHeading/SectionHeading'
import { TESTIMONIALS } from '../../data/content'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const go = (d) => {
    setDir(d)
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[index]

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by partners,"
          accent="clients & students"
          subtitle="The people who build, learn and grow alongside the Advenware ecosystem."
          align="center"
        />

        <div className="testi__stage">
          <button className="testi__arrow testi__arrow--prev" onClick={() => go(-1)} aria-label="Previous">‹</button>

          <div className="testi__viewport glass">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                className="testi__card"
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <FaQuoteLeft className="testi__quote" />
                <blockquote className="testi__text">{t.text}</blockquote>
                <figcaption className="testi__author">
                  <span className="testi__avatar">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.role}</em>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button className="testi__arrow testi__arrow--next" onClick={() => go(1)} aria-label="Next">›</button>
        </div>

        <div className="testi__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testi__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
