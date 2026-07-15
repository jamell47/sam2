import { motion } from 'framer-motion'
import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, accent, subtitle, align = 'left' }) {
  return (
    <motion.div
      className={`heading heading--${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
