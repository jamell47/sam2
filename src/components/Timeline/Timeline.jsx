import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import { TIMELINE } from '../../data/content'
import './Timeline.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Timeline() {
  return (
    <section className="section timeline">
      <div className="container">
        <SectionHeading
          eyebrow="The Journey"
          title="A timeline of"
          accent="relentless building"
          subtitle="From first lines of code to a continental technology group — the milestones that shaped Advenware."
        />

        <div className="timeline__wrap">
          <div className="timeline__line">
            <motion.div
              className="timeline__progress"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            className="timeline__items"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                className={`timeline__item ${i % 2 ? 'right' : 'left'}`}
                variants={item}
              >
                <div className="timeline__node" />
                <div className="timeline__card glass">
                  <span className="timeline__year">{t.year}</span>
                  <h3>{t.title}</h3>
                  {t.desc && <p>{t.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
