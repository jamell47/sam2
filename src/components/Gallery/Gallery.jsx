import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZoomIn, FiX } from 'react-icons/fi'
import SectionHeading from '../SectionHeading/SectionHeading'
import { GALLERY } from '../../data/content'
import './Gallery.css'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the"
          accent="ecosystem"
          subtitle="Inside labs, launch events, classrooms and command centers across the Advenware world."
          align="center"
        />

        <div className="gallery__masonry">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.id}
              className={`gallery__item gallery__item--${(i % 3) + 1}`}
              style={{ '--hue': g.hue }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
              onClick={() => setActive(g)}
              data-cursor="hover"
            >
              <div className="gallery__img" />
              <div className="gallery__overlay">
                <FiZoomIn className="gallery__zoom" />
                <div className="gallery__meta">
                  <span className="gallery__cat">{g.category}</span>
                  <h4>{g.title}</h4>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="lightbox__close" aria-label="Close">
              <FiX />
            </button>
            <motion.div
              className="lightbox__inner"
              style={{ '--hue': active.hue }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox__img" />
              <div className="lightbox__meta">
                <span className="gallery__cat">{active.category}</span>
                <h3>{active.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
