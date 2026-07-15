import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import { VALUES } from '../../data/content'
import './Leadership.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Leadership() {
  return (
    <section id="leadership" className="section leadership">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership Philosophy"
          title="Principles that"
          accent="guide the group"
          subtitle="The values behind every decision, every product and every team across the Advenware ecosystem."
          align="center"
        />

        <motion.div
          className="leadership__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card glass"
              variants={item}
              whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
            >
              <div className="value-card__icon">
                <v.icon />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
              <span className="value-card__index">0{i + 1}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
