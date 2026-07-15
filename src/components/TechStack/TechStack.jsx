import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import { TECH_STACK } from '../../data/content'
import './TechStack.css'

export default function TechStack() {
  return (
    <section className="section techstack">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Engineered with the"
          accent="best tools"
          subtitle="A modern, battle-tested stack powering every product across the Advenware ecosystem."
          align="center"
        />

        <div className="tech__grid">
          {TECH_STACK.map((t, i) => (
            <motion.div
              key={t}
              className="tech__chip glass"
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.05, boxShadow: 'var(--glow-blue)' }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="tech__dot" />
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
